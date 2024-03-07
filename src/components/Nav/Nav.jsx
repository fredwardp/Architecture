import { Link, NavLink } from "react-router-dom";
import NavLogo from "../NavLogo/NavLogo";
import "./Nav.css";
import DarkToggle from "../DarkToggle/DarkToggle";
const Nav = () => {
  let number = 0;
  const toggleFunc = () => {
    number++;
    if (number % 2 !== 0) {
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
          <DarkToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
