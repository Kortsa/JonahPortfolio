import { Link, Outlet } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
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
      to: "portfolio",
    },
  ];
  return (
    <>
      <div className="navbar">
        <div className="list">
          {Lists.map((list, index) => {
            return (
              <Link key={index} to={list.to} className="link">
                {list.title}
              </Link>
            );
          })}
        </div>
        <Outlet />
      </div>
    </>
  );
}
export default Navbar;
