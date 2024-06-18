import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

// Imported Images

const Login = () => {
  return (
    <div className="login">
      <div className="backWhite">
        <div className="logo">
          <i className="fa-solid fa-book-open"></i>
          <h1>STU-HUB</h1>
        </div>
      </div>
      <div className="title">
        <h1 className="text-4xl">Login</h1>
        <p className="" style={{ fontSize: "16px" }}>
          Join STU-HUB and start learning
        </p>
      </div>
      <form action="#">
        <label for="email">Email</label>
        <input type="email" placeholder="Enter Your Email" required />
        <br />
        <i className="fa-solid fa-id-card"></i>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter strong Password" required />
        <br />
        <i className="fa-solid fa-lock"></i>
        <div className="btn">
          <Link to="/featured">Login</Link>
        </div>
        <p className="font-bold" id="theEnd">
          Already have an acount?{" "}
          <Link to="/signUp" className="hover:underline text-[#20A4A0]">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
