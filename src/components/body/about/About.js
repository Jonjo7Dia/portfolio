import classes from "./About.module.css";
import AboutHeader from "./aboutComponents/AboutHeader";
import AboutBody from "./aboutComponents/AboutBody";

function About() {
  return (
    <div className={classes.about}>
      <AboutHeader />
      <AboutBody />
    </div>
  );
}

export default About;
