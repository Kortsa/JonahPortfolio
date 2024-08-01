import Navbar from "../Navbar/Navbar";
import "./Resume.css";

function Resume() {
  return (
    <>
      <Navbar />
      <div className="resume-contents">
        <div className="container">
          <h3>
            Resume
            <span>
              <hr />
            </span>
          </h3>
          <h1>Check my resume</h1>
          <div className="summary">
            <h3>summary</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
