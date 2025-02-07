import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });
      console.log("Register successfully", res.data);
    } catch (e) {
      console.log("registration unsuccessful:", e);
    }
  };

  return (
    <>
      <div className="container col-md-4 col-10 border border-black border-1 rounded ">
        <h1 className="text-center">Register</h1>
        <form class="row g-3 p-4">
          <div class="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              aria-label="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <p>
              <Link to="/login">already User?</Link>
            </p>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {/* <form action="">
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </form> */}
    </>
  );
};

export default Register;
