import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    console.log(firstName, lastName, email, password);

    // Validations
    if (!firstName) return res.status(400).send("First Name is required");
    if (!lastName) return res.status(400).send("Last Name is required");

    if (!password || password.length < 5) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }

    let userExist = await User.findOne({ email });

    if (userExist) return res.status(400).send("User already exist");

    // hash the password
    const hashedPassword = await hashPassword(password);

    // Register user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};
