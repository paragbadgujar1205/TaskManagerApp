import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = async(event) => {
    try{
        event.preventDefault();
        const res = await axios.post("http://localhost:5000/register", {name, email, password})
        console.log("Register successfully",res.data);
    }catch(e){
        console.log("registration unsuccessful:",e)
    }
  }

  return (
    <>
      <form action="">
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
      </form>
    </>
  );
};

export default Register;
