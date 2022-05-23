import classes from "./Body.module.css";
import BodyPart from "../ui/bodyPart/BodyPart";
import About from "./about/About";
import Contact from "./contact/Contact";
import MySkills from "./myskills/MySkills";
import Experience from "./experience/Experience";
import CurrentProject from "./currently/CurrentProject";
import Resume from "./resume/Resume";
import ReactFullpage from "@fullpage/react-fullpage";
function Body() {
    <ReactFullpage
      licenseKey={"PAKUJ-ANMJ8-JV6G6-KJHDH-DWLNIs"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
          return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <BodyPart color={"#4495e5"}>
              <About></About>
            </BodyPart>
          </div>
          <div className="section">
            <BodyPart color={"#eb757f"}>
              <MySkills></MySkills>
            </BodyPart>
          </div>
          <div className="section">
            <BodyPart color={"#f5c544"}>
              <Experience></Experience>
            </BodyPart>
          </div>
          <div className="section">
            <BodyPart color={"#4495e5"}>
              <CurrentProject></CurrentProject>
            </BodyPart>
          </div>
          <div className="section">
            <BodyPart color={"#eb757f"}>
              <Resume></Resume>
            </BodyPart>
          </div>
          <div className="section">
            <BodyPart color={"#f5c544"}>
              <Contact></Contact>
            </BodyPart>
          </div>
        </ReactFullpage.Wrapper>)
        ;
      }}
    />
    // <div className={classes.body}>

    // </div>

}
export default Body;

//"#8e26b4"
//"#b7ee5d"
//"#ea346e
