import classes from "./Resume.module.css";
import CV from "../../files/CV-Image.png";
import file from "../../files/cv.pdf";
function Resume() {
  return (
    <div className={classes.resume}>
      <a href={file} download={"Jonathan Hjelmstrom CV"}>
        {" "}
        <img src={CV} alt="" />
      </a>
    </div>
  );
}

export default Resume;
