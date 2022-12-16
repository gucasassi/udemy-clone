import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { SyncOutlined } from "@ant-design/icons";

const Register = () => {
  const [firstName, setFirstName] = useState("Guillem");
  const [lastName, setLastName] = useState("Casas");
  const [email, setEmail] = useState("gucasassi@gmail.com");
  const [password, setPassword] = useState("12345");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`http://localhost:8000/api/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data);
      });
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
          <button
            className="btn btn-block btn-primary p-2 w-100"
            type="submit"
            disabled={
              !firstName || !lastName || !email || !password || isLoading
            }
          >
            {isLoading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
