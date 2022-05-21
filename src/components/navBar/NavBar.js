import { useState } from "react";
import classes from "./NavBar.module.css";

function NavBar() {
  const [navClick, setNavClick] = useState(false);
  let listStyle;
  let links = [null, null, null, null, null, null];
  let line1Style;
  let line2Style;
  let line3Style;

  navClick ? (listStyle = { transform: "translateX(0%)" }) : (listStyle = null);
  if (navClick) {
    listStyle = { transform: "translateX(0%)" };
    links = [
      classes.link1,
      classes.link2,
      classes.link3,
      classes.link4,
      classes.link5,
      classes.link6,
    ];
    line1Style = classes.line1;
    line2Style = classes.line2;
    line3Style = classes.line3;
  } else {
    listStyle = null;
    links = [
      classes.link1Out,
      classes.link2Out,
      classes.link3Out,
      classes.link4Out,
      classes.link5Out,
      classes.link6Out,
    ];
    line1Style = line2Style = line3Style = "";
  }


  return (
    <div className={classes.navBar}>
      <ul style={listStyle}>
        <li className={links[0]}>About</li>
        <li className={links[1]}>My Skills</li>
        <li className={links[2]}>Experience</li>
        <li className={links[3]}>Current Project</li>
        <li className={links[4]}>Resume</li>
        <li className={links[5]}>Contact</li>
      </ul>
      <div className={classes.burger}>
        <div
          className={classes.burgerButton}
          onClick={() => {
            setNavClick(!navClick);
          }}
        >
          <div className={line1Style}></div>
          <div className={line2Style}></div>
          <div className={line3Style}></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
