import classes from "./Resume.module.css";
import CV from "../../files/Jonathan Hjelmstrom Resume.jpg";
import file from "../../files/Jonathan Hjelmstrom Resume.pdf";
import { useEffect, useRef, useState } from "react";

function Resume(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    if(startAnimation){
      props.onView('My Resume');
    }
  }, [startAnimation, props]);
  return (
    <div className={classes.resume}>
      <div className={classes.marker} ref={myRef}></div>

      <a  className={classes.cv} href={file} download={"Jonathan Hjelmstrom CV"}>
        <img src={CV} alt="" />
      </a>
      <a className={classes.cvLink} href={file} download={"Jonathan Hjelmstrom CV"}>
        Click Here to Download!
      </a>
    </div>
  );
}

export default Resume;
