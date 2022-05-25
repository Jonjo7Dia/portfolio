import classes from "./CurrentProject.module.css";
import ProjectTimeline from "./components/ProjectTimeline";
import ProjectContent from "./components/ProjectContent";
import { useEffect, useRef, useState } from "react";
function CurrentProject(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    if(startAnimation){
      props.onView('Current Project');
    }
  }, [startAnimation, props]);
  
  return (
    <div className={classes.currentProject}>
      <div className={classes.marker} ref={myRef}></div>

      <ProjectContent />

      <ProjectTimeline />
    </div>
  );
}

export default CurrentProject;
