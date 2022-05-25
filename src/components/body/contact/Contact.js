import classes from "./Contact.module.css";
import { useEffect, useRef, useState } from "react";

function Contact(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    if (startAnimation) {
      props.onView("Contact");
    }
  }, [startAnimation, props]);
  return (
    <div className={classes.contact}>
      <div className={classes.marker} ref={myRef}></div>
      contact
    </div>
  );
}

export default Contact;
