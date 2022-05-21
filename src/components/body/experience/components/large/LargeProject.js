import classes from "./LargeProject.module.css";
import LargeDesktopBrowser from "../../../../ui/projectCards/large/LargeDesktopBrowser";
import LargeDescription from "../../../../ui/projectCards/large/LargeDescription";
import LargeMobile from "../../../../ui/projectCards/large/LargeMobile";

function LargeProject(props) {
  console.log(props);
  return (
    <div className={classes.largeProject}>
      <div className={classes.largeBody}>
        <LargeDesktopBrowser>
          <img src={props.bigImage} alt="" />
        </LargeDesktopBrowser>
        <LargeDescription
          tech={["javascript", "firebase", "react", "html", "redux", "css"]}
        ></LargeDescription>
        <LargeMobile>
          <img src={props.smallImage} alt="" />
        </LargeMobile>
      </div>
    </div>
  );
}

export default LargeProject;
