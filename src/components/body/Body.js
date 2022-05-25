import classes from "./Body.module.css";
import BodyPart from "../ui/bodyPart/BodyPart";
import About from "./about/About";
import Contact from "./contact/Contact";
import MySkills from "./myskills/MySkills";
import Experience from "./experience/Experience";
import CurrentProject from "./currently/CurrentProject";
import Resume from "./resume/Resume";
function Body() {
  return (
    <div className={classes.body}>
      <BodyPart color={"#4495e5"} id={'about'}>
        <About></About>
      </BodyPart>
      <BodyPart color={"#eb757f"} id={'skills'}>
        <MySkills></MySkills>
      </BodyPart>
      <BodyPart color={"#f5c544"} id={'experience'}>
        <Experience></Experience>
      </BodyPart>
      <BodyPart color={"#4495e5"} id={'current'}>
        <CurrentProject></CurrentProject>
      </BodyPart>
      <BodyPart color={"#eb757f"} id={'resume'}>
        <Resume></Resume>
      </BodyPart>
      <BodyPart color={"#f5c544"} id={'contact'}>
        <Contact></Contact>
      </BodyPart>
    </div>
  );
}
export default Body;

//"#8e26b4"
//"#b7ee5d"
//"#ea346e
