import classes from "./LargeDescription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechStack from '../../techStack/TechStack';
function LargeDescription(props) {

  return (
    <div className={classes.desktopDescription}>
      <div className={classes.projectHeader}>
        <div className={classes.projectName}>
          <h1>Project Name</h1>
        </div>
        <div className={classes.projectLinks}>
          <a href="" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

        </div>
      </div>
      <div className={classes.projectAbout}>
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        eum, doloribus distinctio dicta qui odio voluptatibus eius repellat
        exercitationem delectus quaerat nihil, nulla perspiciatis earum?
        Voluptas atque, nulla, magni reiciendis iste aut, tempora neque
        molestiae facere corrupti modi et similique dolore inventore ipsum
        praesentium qui totam asperiores soluta laborum. Vitae praesentium
        recusandae incidunt debitis accusamus. Consequuntur excepturi sint
        delectus quae ut fugiat architecto nesciunt et cum. Nam culpa cupiditate
        exercitationem odio blanditiis error, in magni unde velit omnis quae
        expedita?
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
