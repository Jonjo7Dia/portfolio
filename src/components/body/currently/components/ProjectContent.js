import classes from "./ProjectContent.module.css";
import ProjectDesktop from "./ProjectDesktop";
import HouseLaptop from "../../../images/ourHouse-laptop.png";
import ProjectDescription from "./ProjectDescription";
import ProjectMobile from "./ProjectMobile";
import { useEffect, useRef, useState } from "react";
function ProjectContent() {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  let desktopAnimation = "";
  let descriptionAnimation = "";
  let mobileAnimation = "";
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  if (startAnimation) {
    desktopAnimation = classes.desktopAnimation;
    descriptionAnimation = classes.descriptionAnimation;
    mobileAnimation = classes.mobileAnimation;
  } else {
    desktopAnimation =classes.desktopAnimationOut;
    descriptionAnimation = "";
    mobileAnimation = "";
  }
  return (
    <div className={classes.projectContent} ref={myRef}>
      <div className={`${classes.desktop} ${desktopAnimation}`}>
        <ProjectDesktop>
          <img src={HouseLaptop} alt="" />
        </ProjectDesktop>
      </div>
      <div className={`${classes.description} ${descriptionAnimation}`}>
        <ProjectDescription />
      </div>
      <div className={`${classes.mobile} ${mobileAnimation}`}>
        <ProjectMobile />
      </div>
      <div className={classes.viewCode}>
      <button className={classes.linkButton}>
          <a href={'https://github.com/Jonjo7Dia/housemates-frontend'} target="_blank" rel="noreferrer">
            <svg width="180px" height="60px" viewBox="0 0 180 60">
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
            </svg>
            <span>VIEW CODE</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectContent;
