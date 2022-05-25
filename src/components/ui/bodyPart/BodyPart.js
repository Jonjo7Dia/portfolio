import classes from "./BodyPart.module.css";

import BodyFooter from './BodyFooter';
function BodyPart(props) {

  return (
    <div className={classes.bodyPart} style={{ backgroundColor: props.color }} id={props.id}>
      <div className={classes.bufferSpace}></div>
      <div className={classes.bodyPartContent}>
        {props.children}
      </div>
      <BodyFooter/>
    </div>
  );
}

export default BodyPart;
