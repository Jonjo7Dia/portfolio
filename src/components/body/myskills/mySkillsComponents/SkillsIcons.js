import classes from "./SkillsIcons.module.css";
import CSSLogo from "../../../ui/svgPhotos/css-3.svg";
import HTMLLogo from "../../../ui/svgPhotos/html-5.svg";
import JSLogo from "../../../ui/svgPhotos/typescript.svg";
import MongoLogo from "../../../ui/svgPhotos/mongodb.svg";
import NodeLogo from "../../../ui/svgPhotos/nodejs.svg";
import ReactLogo from "../../../ui/svgPhotos/react.svg";
import ExpressLogo from "../../../ui/svgPhotos/express.svg";
import ReduxLogo from '../../../ui/svgPhotos/redux.svg';
import { useEffect, useRef, useState } from "react";

function SkillsIcons() {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  let iconClasses;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  if (startAnimation) {
    iconClasses = [
      classes.icon1,
      classes.icon2,
      classes.icon3,
      classes.icon4,
      classes.icon5,
      classes.icon6,
      classes.icon7,
      classes.icon8,
    ];
  } else {
    iconClasses = [null, null, null, null, null, null, null, null];
  }

  return (
    <div className={classes.skillsIcons} ref={myRef}>
      <div className={iconClasses[0]}>
        <img src={CSSLogo} alt="csslogo" />
        <span className={classes.tooltiptext}>CSS</span>

      </div>
      <div className={iconClasses[1]}>
        <img src={HTMLLogo} alt="htmllogo" />
        <span className={classes.tooltiptext}>HTML5</span>

      </div>
      <div className={iconClasses[2]}>
        <img src={JSLogo} alt="jslogo" />
        <span className={classes.tooltiptext}>Typescript</span>

      </div>
      <div className={iconClasses[3]}>
        <img src={ReactLogo} alt="reactLogo" />
        <span className={classes.tooltiptext}>ReactJS</span>

      </div>
      <div className={iconClasses[4]}>
        <img src={MongoLogo} alt="mongologo" />
        <span className={classes.tooltiptext}>MongoDB</span>

      </div>
      <div className={iconClasses[5]}>
        <img src={ReduxLogo} alt="nodeLogo" />
        <span className={classes.tooltiptext}>Redux</span>

      </div>
      <div className={iconClasses[6]}>
        <img src={NodeLogo} alt="nodeLogo" />
        <span className={classes.tooltiptext}>Nodejs</span>

      </div>
     
      <div className={classes.tooltip, iconClasses[7]}>
        <img src={ExpressLogo} alt="expressLogo" />
        <span className={classes.tooltiptext}>Express</span>
      </div>
    </div>
  );
}

export default SkillsIcons;
