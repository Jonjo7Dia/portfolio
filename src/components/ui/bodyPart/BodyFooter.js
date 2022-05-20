import classes from "./BodyFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function BodyFooter() {
  return (
    <div className={classes.bodyFooter}>
      <div className={classes.socialIcons}>
        <a href="https://github.com/Jonjo7Dia" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/svend-petter-jonathan-hjelmstrom-573882168/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
export default BodyFooter;
