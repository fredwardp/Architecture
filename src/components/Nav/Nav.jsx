import { Link, NavLink } from "react-router-dom";
import NavLogo from "../NavLogo/NavLogo";
import "./Nav.css";
import DarkToggle from "../DarkToggle/DarkToggle";
import BrightToggle from "../BrightToggle/BrightToggle";
import { useState } from "react";
const Nav = () => {
  const [switcher, setSwitcher] = useState(true);

  // let number = 0;
  const toggleFunc = () => {
    // number++;

    if (switcher === false) {
      document.documentElement.style.setProperty("--black", "#000000");
      document.documentElement.style.setProperty("--dark", "#343434");
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty("--bg", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--black", "#ffffff");
      document.documentElement.style.setProperty("--dark", "#ffffff");
      document.documentElement.style.setProperty("--white", "#000000");
      document.documentElement.style.setProperty("--bg", "#343434");
    }
    setSwitcher((switcher) => !switcher);
    return;
  };
  return (
    <nav className="container">
      <NavLink to="/">
        <NavLogo />
      </NavLink>
      <div>
        <NavLink to="/">main</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink>projects</NavLink>
        <NavLink>certifications</NavLink>
        <NavLink>contacts</NavLink>
        <div className="toggle_click" onClick={toggleFunc}>
          {switcher ? <DarkToggle /> : <BrightToggle />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
