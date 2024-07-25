import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const Lists = [
    {
      title: "Home",
      to: "",
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
    <div className="home-content">
      <div className="list">
        {Lists.map((list, index) => {
          return (
            <Link key={index} to={list.to} className="link">
              {list.title}
            </Link>
          );
        })}
      </div>

      <div className="name-desc">
        <h1>Jonathan Edem Klu</h1>
        <p>
          I&apos;m a passionate Tech enthusiast, Graphic Designer, Product
          Designer, and a Photographer.
        </p>
      </div>
    </div>
  );
}
export default Home;
