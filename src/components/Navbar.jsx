import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useRef } from "react";

function Navbar() {
  const location = useLocation();
  const underline = useRef();

  useEffect(() => {
    const activeLink = document.querySelector(".active");
    if (activeLink && underline.current) {
      underline.current.style.left = `${activeLink.offsetLeft}px`;
      underline.current.style.width = `${activeLink.offsetWidth}px`;
    }
  }, [location]);
  return (
    <div className="navbar">
      <h2>LOGO</h2>
      <div className="main">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div id="underline" ref={underline}></div>
      </div>
    </div>
  );
}

export default Navbar;
