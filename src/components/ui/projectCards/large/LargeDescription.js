import classes from "./LargeDescription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechStack from '../../techStack/TechStack';
function LargeDescription(props) {

  return (
    <div className={classes.desktopDescription}>
      <div className={classes.projectHeader}>
        <div className={classes.projectName}>
          <h1>{props.title}</h1>
        </div>
        <div className={classes.projectLinks}>
          <a href={props.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

        </div>
      </div>
      <div className={classes.projectAbout}>
          <p className={classes.primaryAbout}>
       {props.description}
        </p>
        <p className={classes.alternateAbout}>
          {props.alternate}
        </p>
      </div>
      <div className={classes.techUsed}>
            {props.tech.map((tech, index) => {

                return <TechStack key = {index} tech = {tech}/>
            })}
      </div>
    </div>
  );
}

export default LargeDescription;
