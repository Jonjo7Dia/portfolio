import classes from "./SkillsDescription.module.css";

function SkillsDescription() {
  return (
    <div className={classes.skillsDescription}>
      <div className={classes.skillsHeader}>
        <h1>My Skills</h1>
      </div>
      <div className={classes.skillsBody}>
        <p>
          Since the beggining of my journey of learning how to center a div,
          I've had a drive to create products that serve a purpose in my life
          and to those around me.
        </p>
        <p>
          I create successful responsive websites that are fast and easy to use.
          The main area of my expertise is font-end development, HTML, CSS, JS.
          I enjoy building web apps, custom plugins, features and coding
          interactive layouts.
        </p>
        <p>
          I also enjoy creating backend applications, and creating full-stack
          applications.
        </p>
      </div>
    </div>
  );
}
export default SkillsDescription;
