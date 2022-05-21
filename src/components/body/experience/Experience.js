import classes from "./Experience.module.css";
import ControlledCarousel from './components/carousel/ControlledCarousel';
function Experience() {
  return (
    <div className={classes.experience}>
        <ControlledCarousel/>
    </div>
  );
}

export default Experience;
