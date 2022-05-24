import classes from "./CurrentProject.module.css";
import ProjectTimeline from "./components/ProjectTimeline";
import ProjectContent from "./components/ProjectContent";
function CurrentProject() {
  return (
    <div className={classes.currentProject}>
      <ProjectContent />

      <ProjectTimeline />
    </div>
  );
}

export default CurrentProject;
