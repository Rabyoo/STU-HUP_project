import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="backWhite">
        <div className="logo">
          <i className="fa-solid fa-book-open"></i>
          <h1>STU-HUB</h1>
        </div>
      </div>
      <div className="title">
        <h1>Sign Up</h1>
        <p>Join STU-HUP and start learning</p>
      </div>
      <form action="">
        <label for="fullName">Full Name</label>
        <input type="text" placeholder="Enter Your Full Name" required />
        <i className="fa-solid fa-user"></i>
        <label for="email">Email</label>
        <input type="email" placeholder="Enter Your Email" required />
        <i className="fa-solid fa-envelope"></i>
        <label for="username">Your Name</label>
        <input type="text" placeholder="Enter Your Name" required />
        <i className="fa-solid fa-id-card"></i>
        <label for="password">Create a Password</label>
        <input type="password" placeholder="Enter strong Password" required />
        <i className="fa-solid fa-lock"></i>
        <label for="conPassword">Confirm Password</label>
        <input type="password" placeholder="Confirm your Password" required />
        <i className="fa-solid fa-check"></i>
        <label id="checkbox">I agree with a Terms and Privacy a Policy.</label>
        <input type="checkbox" />
        <div className="btn">
          <Link to="/featured">Sign Up</Link>
        </div>
        <p id="theEnd">
          Already have an acount? <Link to="/signup">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
