import classes from "./ProjectDescription.module.css";
import TechStack from "../../../ui/techStack/TechStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function ProjectDescription() {
  const tech = ["html", "css",  "mongo",  "express", "react", "node", "redux",];
  return (
    <div className={classes.desktopDescription}>
      <div className={classes.projectHeader}>
        <div className={classes.projectName}>
          <h1>OurHome v1.0</h1>
        </div>
        <div className={classes.projectLinks}>
          <a href={'https://github.com/Jonjo7Dia/housemates'} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className={classes.projectAbout}>
        <p className={classes.primaryAbout}>At first I wanted to just create a full-stack application that encapsulated all that I learnt so far. At the same time, while living with room mates I saw that we used a bunch of apps to organize our independent as well as dependent lives, so I thought why not have all the same features that those apps offer and put them under one roof? and now this full-stack project turneed in to a product that I am building to serve other people in the same situation. Serving the best of both world this application aims to include the backend technologies of node & express, whille taking advantage of the ui componnets that react offers, and to wrap it all up mongoDB will work as the database</p>
        <p className={classes.alternateAbout}>A platform where users who live together can share calendars, expenses and more.</p>
      </div>
      <div className={classes.techUsed}>
        {tech.map((tech, index) => {
          return <TechStack key={index} tech={tech} />;
        })}
      </div>
    </div>
  );
}

export default ProjectDescription;
