import classes from "./Body.module.css";
import BodyPart from "../ui/bodyPart/BodyPart";
import About from "./about/About";
import Contact from "./contact/Contact";
import MySkills from "./myskills/MySkills";
import Experience from "./experience/Experience";
import CurrentProject from "./currently/CurrentProject";
import Resume from "./resume/Resume";
function Body(props) {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
  if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
    document.body.style.setProperty("max-height", "-webkit-fill-available");
    document.documentElement.style.setProperty("max-height", "-webkit-fill-available");



  }
  else {
    document.body.style.setProperty("height", "calc(var(--vh) * 100)");

  }
  return (
    <div className={classes.body} id={"body"}>
      <BodyPart color={"#4495e5"} id={"about"} indicator={true}>
        <About
          onView={(string) => {
            props.onView(string);
          }}
        ></About>
      </BodyPart>
      <BodyPart color={"#eb757f"} id={"skills"}>
        <MySkills
          onView={(string) => {
            props.onView(string);
          }}
        ></MySkills>
      </BodyPart>
      <BodyPart color={"#f5c544"} id={"exp"}>
        <Experience
          onView={(string) => {
            props.onView(string);
          }}
        ></Experience>
      </BodyPart>
      <BodyPart color={"#4495e5"} id={"current"}>
        <CurrentProject
          onView={(string) => {
            props.onView(string);
          }}
        ></CurrentProject>
      </BodyPart>
      <BodyPart color={"#eb757f"} id={"resume"} indicator={true}>
        <Resume
          onView={(string) => {
            props.onView(string);
          }}
        ></Resume>
      </BodyPart>
      <BodyPart color={"#f5c544"} id={"contact"}>
        <Contact
          onView={(string) => {
            props.onView(string);
          }}
        ></Contact>
      </BodyPart>
    </div>
  );
}
export default Body;

//"#8e26b4"
//"#b7ee5d"
//"#ea346e
