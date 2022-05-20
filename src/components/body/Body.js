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
      <BodyPart color={"#4495e5"}>
        <About></About>
      </BodyPart>
      <BodyPart color={"#eb757f"}>
        <MySkills></MySkills>
      </BodyPart>
      <BodyPart color={"#f5c544"}>
        <Experience></Experience>
      </BodyPart>
      <BodyPart color={"#8e26b4"}>
        <CurrentProject></CurrentProject>
      </BodyPart>
      <BodyPart color={"#b7ee5d"}>
        <Resume></Resume>
      </BodyPart>
      <BodyPart color={"#ea346e"}>
        <Contact></Contact>
      </BodyPart>
    </div>
  );
}
export default Body;
