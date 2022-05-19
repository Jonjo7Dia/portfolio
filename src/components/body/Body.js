import classes from "./Body.module.css";
import BodyPart from "../ui/bodyPart/BodyPart";
function Body() {
  return (
    <div className={classes.body}>
      <BodyPart color={"#4495e5"}></BodyPart>

      <BodyPart color={"#eb757f"}></BodyPart>
      <BodyPart color={"#f5c544"}></BodyPart>
      <BodyPart color={"#8e26b4"}></BodyPart>
      <BodyPart color={"#b7ee5d"}></BodyPart>



    </div>
  );
}
export default Body;
