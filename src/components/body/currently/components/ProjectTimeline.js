import { useEffect, useRef, useState } from "react";
import classes from "./ProjectTimeline.module.css";

function ProjectTimeline() {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  let fillClass;
  let finished;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  if (startAnimation){
      fillClass = classes.fill;
      finished = classes.finished;
  } else {
      fillClass = finished = '';
  }


  return (
    <div className={classes.timelineBody} ref={myRef}>
      <div className={classes.timeLabels}>
        <div className={classes.labelsWrapper}>
          <div className= {classes.la}>
            <p className={`${finished} `}>Frontend</p>
          </div>
          <div>
            <p>Backend</p>
          </div>
          <div>
            <p>Endpoints</p>
          </div>
          <div>
            <p>Deploy</p>
          </div>
        </div>
      </div>
      <div className={classes.timeline}>
        <div className={classes.fillBody}>
          <div className={fillClass}></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
