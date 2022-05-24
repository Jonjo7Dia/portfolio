import classes from "./ProjectMobile.module.css";
import HouseMobile from '../../../images/ourHouse-mobile.png';
function ProjectMobile() {
  return (
    <div className={classes.largeMobile}>
      <div className={classes.phoneScreen}>
        <img src={HouseMobile} alt=""/>
      </div>
    </div>
  );
}
export default ProjectMobile;
