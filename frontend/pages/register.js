import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("Guillem");
  const [lastName, setLastName] = useState("Casas");
  const [email, setEmail] = useState("gucasassi@gmail.com");
  const [password, setPassword] = useState("12345");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`http://localhost:8000/api/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log("Register response", data);
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form className="pt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <button className="btn btn-block btn-primary p-2 w-100" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
