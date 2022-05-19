import classes from "./BodyPart.module.css";

function BodyPart(props) {
  return (
    <div className={classes.bodyPart} style={{ backgroundColor: props.color }}>
      <div className={classes.bufferSpace}></div>
      <div className={classes.bodyPartContent}>
        {props.children}
      </div>
    </div>
  );
}

export default BodyPart;
