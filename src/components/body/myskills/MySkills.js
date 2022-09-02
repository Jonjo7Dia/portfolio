import classes from "./MySkills.module.css";
import SkillsDescription from "./mySkillsComponents/SkillsDescription";
import SkillsIcons from './mySkillsComponents/SkillsIcons';
import { useEffect, useRef, useState } from "react";

function MySkills(props) {
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();
  const [mobileDevice, setMobileDevice] = useState(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
  useEffect(()=>{
    setMobileDevice(false);

  },[mobileDevice])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    if(startAnimation){
      props.onView('My Skills');
    }
  }, [startAnimation, props]);
  
  return (
    <div className={classes.mySkills}>
      <div className={classes.marker} ref={myRef}></div>

      <SkillsDescription />
      {/* {!mobileDevice && <SkillsParticles />} */}
      <SkillsIcons />
    </div>
  );
}

export default MySkills;
