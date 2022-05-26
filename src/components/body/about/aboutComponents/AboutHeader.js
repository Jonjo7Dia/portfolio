import classes from "./AboutHeader.module.css";
import logo from '../../../images/logo3.png'
function AboutHeader() {
  return (
    <div className={classes.aboutHeader}>
      <h1>Jonathan Hjelmstrom</h1>
      <img src={logo} alt=""/>
      <h4>web developer</h4>
    </div>
  );
}

export default AboutHeader;
