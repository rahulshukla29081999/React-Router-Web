import React from "react";
import rahul_logo from "../assets/rahul_logo.png";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="w-40 h-50 p-2" src={rahul_logo} alt="Logo" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact </li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/contact", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
