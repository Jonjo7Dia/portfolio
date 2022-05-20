import classes from "./MySkills.module.css";
import SkillsDescription from "./mySkillsComponents/SkillsDescription";
import SkillsParticles from "./mySkillsComponents/SkillsParticles";
function MySkills() {
  return (
    <div className={classes.mySkills}>
      <SkillsDescription />
      <SkillsParticles />
    </div>
  );
}

export default MySkills;
