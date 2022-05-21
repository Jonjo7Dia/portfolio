import classes from "./LargeMobile.module.css";

function LargeMobile(props) {
  return (
    <div className={classes.largeMobile}>
      <div className={classes.phoneScreen}>{props.childrenß}</div>
    </div>
  );
}

export default LargeMobile;
