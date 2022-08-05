import classes from "./SkillsIcons.module.css";
import CSSLogo from "../../../ui/svgPhotos/css-3.svg";
import HTMLLogo from "../../../ui/svgPhotos/html-5.svg";
import JSLogo from "../../../ui/svgPhotos/typescript.svg";
import MongoLogo from "../../../ui/svgPhotos/mongodb.svg";
import NodeLogo from "../../../ui/svgPhotos/nodejs.svg";
import ReactLogo from "../../../ui/svgPhotos/react.svg";
import ExpressLogo from "../../../ui/svgPhotos/express.svg";
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
    ];
  } else {
    iconClasses = [null, null, null, null, null, null, null];
  }

  return (
    <div className={classes.skillsIcons} ref={myRef}>
      <div className={iconClasses[0]}>
        <img src={CSSLogo} alt="csslogo" />
      </div>
      <div className={iconClasses[1]}>
        <img src={HTMLLogo} alt="htmllogo" />
      </div>
      <div className={iconClasses[2]}>
        <img src={JSLogo} alt="jslogo" />
      </div>
      <div className={iconClasses[3]}>
        <img src={ReactLogo} alt="reactLogo" />
      </div>
      <div className={iconClasses[4]}>
        <img src={MongoLogo} alt="mongologo" />
      </div>
      <div className={iconClasses[5]}>
        <img src={ExpressLogo} alt="expressLogo" />
      </div>
      <div className={iconClasses[6]}>
        <img src={NodeLogo} alt="nodeLogo" />
      </div>
    </div>
  );
}

export default SkillsIcons;
