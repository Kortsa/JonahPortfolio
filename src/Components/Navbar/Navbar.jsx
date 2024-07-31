import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import hamburger2 from "../../assets/icons8-hamburger-button-50.png";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Lists = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Resume",
      to: "/resume",
    },
    {
      title: "Portfolio",
      to: "/portfolio",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <div className={`navbar ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
        <div className="hamburger-menu">
          <img src={hamburger2} alt="Hamburger Menu" />
        </div>
        <div className="list">
          {Lists.map((list, index) => (
            <Link key={index} to={list.to} className="link">
              {list.title}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
