import classes from "./LargeProject.module.css";
import LargeDesktopBrowser from "../../../../ui/projectCards/large/LargeDesktopBrowser";
import LargeDescription from "../../../../ui/projectCards/large/LargeDescription";
import LargeMobile from "../../../../ui/projectCards/large/LargeMobile";
import LinkButton from '../../../../ui/projectCards/large/LinkButton';

function LargeProject(props) {

  return (
    <div className={classes.largeProject}>
      <div className={classes.largeBody}>
        <LargeDesktopBrowser>
          <img src={props.bigImage} alt="" />
        </LargeDesktopBrowser>
        <LargeDescription
          tech={props.tech}
        ></LargeDescription>
        <LargeMobile>
          <img src={props.smallImage} alt="" />
        </LargeMobile>
        <LinkButton/>
      </div>
    </div>
  );
}

export default LargeProject;
