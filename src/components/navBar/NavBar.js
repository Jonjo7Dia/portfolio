import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.navBar}>
      <ul>
        <li>About</li>
        <li>My Skills</li>
        <li>Experience</li>
        <li>Current Project</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
