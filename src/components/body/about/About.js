import classes from "./About.module.css";
import AboutHeader from "./aboutComponents/AboutHeader";
import AboutBody from "./aboutComponents/AboutBody";
import { useEffect, useRef, useState } from "react";

function About(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    if (startAnimation) {
      props.onView("About");
    }
  }, [startAnimation, props]);
  return (
    <div className={classes.about}  >
      <div className={classes.marker} ref={myRef}></div>
  
      <AboutHeader />
      <AboutBody />
    </div>
  );
}

export default About;
