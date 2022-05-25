import classes from "./Experience.module.css";
import ControlledCarousel from "./components/carousel/ControlledCarousel";
import { useEffect, useRef, useState } from "react";

function Experience(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);

    });
    observer.observe(myRef.current);
    if (startAnimation) {
      props.onView("My Experience");
    }
  }, [startAnimation, props]);
  return (

    <div className={classes.experience} >
      <div className={classes.marker} ref={myRef}></div>
      <ControlledCarousel />
    </div>
  );
}

export default Experience;
