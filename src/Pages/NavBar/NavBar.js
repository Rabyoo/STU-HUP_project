import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Add your CSS styles here
import {
  FaHome,
  FaPlayCircle,
  FaBookmark,
  FaBusinessTime,
  FaUserCircle,
} from "react-icons/fa";

// Imported Images
import logo from "../../Assets/imgs/logo.png";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sidebar top-0 z-10">
      <div className="icons-link">
        <div className="mattoolBarButton py-1 px-1 mx-2">
          <Link className="" to="/">
            <img className="sideicon ml-4" src={logo} alt="Home" />
          </Link>
        </div>

        <div className="icons">
          <div className="mattoolBarButton mb-[0px] w-[100%] py-1 px-1 mx-0">
            <Link to="/" className="ico-holder icon">
              <FaHome className="icon-size d-flex align-items-center" />
            </Link>
            <br />
            <h6 className="font-medium mt-[-15px] text-lg text-gray-950">
              Home
            </h6>
          </div>

          <div className="mattoolBarButton mb-[0px] w-[100%] py-1 px-1 mx-0">
            <Link
              to="/courses"
              className="ico-holder icon ml-[-10px]"
              id="courses">
              <FaPlayCircle className="icon-size" />
            </Link>
            <br />
            <h6 className="font-medium mt-[-15px] text-lg text-gray-950">
              Courses
            </h6>
          </div>

          <div className="mattoolBarButton mb-[0px] w-[100%] py-1 px-1 mx-0">
            <Link to="/saved" className="ico-holder icon ml-[-10px]" id="saved">
              <FaBookmark className="icon-size" />
            </Link>
            <br />
            <h6 className="font-medium mt-[-15px] text-lg text-gray-950">
              Saved
            </h6>
          </div>

          <div className="mattoolBarButton mb-[0px] w-[100%] py-1 px-1 mx-0">
            <Link
              to="/internship"
              className="ico-holder icon ml-[-10px]"
              id="internship">
              <FaBusinessTime className="icon-size" />
            </Link>
            <br />
            <h6 className="font-medium mt-[-15px] text-lg text-gray-950">
              Internship
            </h6>
          </div>

          <div className="mattoolBarButton mb-[0px] w-[100%] py-1 px-1 mx-0">
            <Link onClick={handleClick} className="ico-holder icon ml-[-10px]">
              <FaUserCircle className="icon-size" />
            </Link>
            <br />
            <h6 className=" font-medium mt-[-15px] text-lg text-gray-950">
              Profile
            </h6>
            {anchorEl && (
              <div className="menu">
                <div className="menu-item" onClick={handleClose}>
                  <Link
                    className=" bg-cyan-600 p-1 text-md rounded text-gray-50"
                    to="/login">
                    Login
                  </Link>
                </div>
                <br />
                <div className="menu-item" onClick={handleClose}>
                  <Link
                    className=" bg-cyan-600 p-1 text-md rounded text-gray-50"
                    to="/signUp">
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
