import { useState } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-scroll";

function NavBar(props) {
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
  console.log(props.currentView);

  return (
    <div className={classes.navBar}>
      <div className={classes.current}>{props.currentView}</div>
      <ul style={listStyle}>
        <li className={links[0]}>
          <Link
            to={"about"}
            onClick={() => {
              const el = document.getElementById("about");
              const pos = el.getBoundingClientRect();
              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
            className={`${
              props.currentView === "About" ? classes.selected : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className={links[1]}>
          <Link
            to={"skills"}
            onClick={() => {
              const el = document.getElementById("skills");
              const pos = el.getBoundingClientRect();
              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
            className={`${
              props.currentView === "My Skills" ? classes.selected : ""
            }`}
          >
            My Skills
          </Link>
        </li>
        <li className={links[2]}>
          <Link
            to={"exp"}
            onClick={() => {
              const el = document.getElementById("exp");

              const pos = el.getBoundingClientRect();
              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
          className={`${props.currentView === 'My Experience' ? classes.selected : ''}`} 

          >
            Experience
          </Link>
        </li>
        <li className={links[3]}>
          <Link
            to={"current"}
            onClick={() => {
              const el = document.getElementById("current");
              const pos = el.getBoundingClientRect();
              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
          className={`${props.currentView === 'Current Project' ? classes.selected : ''}`} 

          >
            Current Project
          </Link>
        </li>
        <li className={links[4]}>
          <Link
            to={"resume"}
            onClick={() => {
              const el = document.getElementById("resume");
              const pos = el.getBoundingClientRect();
              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
          className={`${props.currentView === 'My Resume' ? classes.selected : ''}`} 

          >
            Resume
          </Link>
        </li>
        <li className={links[5]}>
          <Link
            to={"contact"}
            onClick={() => {
              const el = document.getElementById("contact");
              const pos = el.getBoundingClientRect();

              const body = document.querySelector("#body");
              body.scrollBy(0, pos.y);
            }}
          className={`${props.currentView === 'Contact' ? classes.selected : ''}`} 

          >
            Contact
          </Link>
        </li>
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
