import classes from "./ProjectDesktop.module.css";
function ProjectDesktop(props) {
  return (
    <div className={classes.desktopBrowser}>
      <div className={classes.desktopBrowserNav}>
        <div className={classes.browserButtons}>
          <div className={classes.browserClose}></div>
          <div className={classes.browserMin}></div>
          <div className={classes.browserSize}></div>
        </div>
      </div>
      <div className={classes.desktopBrowserBody}>{props.children}</div>
    </div>
  );
}

export default ProjectDesktop;
