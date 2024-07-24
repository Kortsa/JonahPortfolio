import Navbar from "../Navbar/Navbar";
import Folder from "../../assets/icons8-folder-94.png";
import Camera from "../../assets/camera.png";
import Photoshop from "../../assets/photoshop.png";
import Figma from "../../assets/figma.png";
import Adobe from "../../assets/adobe.png";
import Art from "../../assets/art.png";
import Music from "../../assets/music.png";
import Pad from "../../assets/pad.png";
import Fun from "../../assets/fun.png";
import "./About.css";

function About() {
  const folders = [
    {
      title: "Birthday:",
      desc: "22nd March",
    },
    {
      title: "Phone:",
      desc: "+233 546 6616 05",
    },
    {
      title: "City:",
      desc: "Volta Region,Ho",
    },
    {
      title: "Email:",
      desc: "edemthany18@gmail",
    },
  ];
  const skills = [
    {
      title: "Adobe Illustrator",
      icon: Adobe,
    },
    {
      title: "Adobe Photoshop",
      icon: Photoshop,
    },
    {
      title: "Figma",
      icon: Figma,
    },
    {
      title: "Photographer",
      icon: Camera,
    },
  ];

  const Interests = [
    {
      title: "Music & Movies",
      icon: Music,
    },
    {
      title: "Videogames(FIFA)",
      icon: Pad,
    },
    {
      title: "Fun activites",
      icon: Fun,
    },
    {
      title: "Art & Fashion",
      icon: Art,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="about-contents">
        <h2>Jonathan Edem Klu</h2>
        <div className="container">
          <h3>
            About
            <span>
              <hr />
            </span>
          </h3>
          <h1>Learn more about me</h1>
          <div className="about-desc">
            <div className="img"></div>
            <div className="desc">
              <h1>Product/Graphic Designer</h1>
              <p>
                I am a product and graphic designer with close to 2 years of
                experience in the field. While still early in my career, i have
                acquired diverse set of skills that would be valuable to any
                team as exhibited in my portfolio. I bring a high level of
                creativity, open-mindedness, hard work, and strong communication
                skills.
              </p>
              <div className="icons">
                {folders.map((folder, index) => (
                  <div key={index} className="icon">
                    <img src={Folder} alt="" />
                    <h5>{folder.title}</h5>
                    <p>{folder.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills">
            <h3>
              Skills
              <span>
                <hr />
              </span>
            </h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  <img src={skill.icon} alt="" />
                  <h5>{skill.title}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="interests">
            <h3>
              Interest
              <span>
                <hr />
              </span>
            </h3>
            <div className="interest-container">
              {Interests.map((interest, index) => (
                <div key={index} className="interest">
                  <img src={interest.icon} alt="" />
                  <h5>{interest.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
