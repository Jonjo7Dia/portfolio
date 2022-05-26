import classes from "./ContactHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactHeader() {
  return (
    <div className={classes.contactHeader}>
      <div className={classes.header}>
        <h1>Contact Me</h1>
      </div>
      <div className={classes.description}>
        <p>Want to work together? Have a chat? Send me message!</p>
      </div>
      <div className={classes.contactOptions}>
        <a
          href="https://www.linkedin.com/in/svend-petter-jonathan-hjelmstrom-573882168/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto: jonathan.hjelmstrom@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default ContactHeader;
