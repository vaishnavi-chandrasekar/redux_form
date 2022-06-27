import React, { useState } from "react";
import "./Signup.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const fetchData = async (Data)=>{
  //     try {
  //       await fetch("http://localhost:5000/userpost" , {
  //         method:"POST",
  //         body:JSON.stringify(Data),
  //         headers:{
  //           "content-type":"application/json"
  //         }

  //       })
  //       setName(Data)
  //       alert("data saved")
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <>
      <div className="Signup">
        <form className="Signup_form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign-up</h1>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <br />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
