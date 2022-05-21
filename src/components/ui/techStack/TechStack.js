import Javascript from "../svgPhotos/javascript.svg";
import CSS from "../svgPhotos/css-3.svg";
import Express from "../svgPhotos/express.svg";
import HTML from "../svgPhotos/html-5.svg";
import Mongo from "../svgPhotos/mongodb.svg";
import Node from "../svgPhotos/nodejs.svg";
import react from "../svgPhotos/react.svg";
import redux from "../svgPhotos/redux.svg";
import firebase from "../svgPhotos/firebase.svg";

import classes from "./TechStack.module.css";

function TechStack(props) {
  const logos = {
    javascript: {
      src: Javascript,
      name: "Javascrip",
    },
    css: {
      src: CSS,
      name: "CSS3",
    },
    express: {
      src: Express,
      name: "Express",
    },
    html: {
      src: HTML,
      name: "HTML5",
    },
    mongo: {
      src: Mongo,
      name: "mongoDB",
    },
    node: {
      src: Node,
      name: "nodeJS",
    },
    react: {
      src: react,
      name: "React",
    },
    redux: {
      src: redux,
      name: "Redux",
    },
    firebase: {
      src: firebase,
      name: "Firebase",
    },
  };

  return (
    <div className={classes.techStack}>
      <img src={logos[props.tech].src} alt={props.tech} />
      <span className={classes.tooltiptext}>{logos[props.tech].name}</span>
    </div>
  );
}

export default TechStack;
