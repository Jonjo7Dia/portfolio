import classes from "./MySkills.module.css";
import SkillsDescription from "./mySkillsComponents/SkillsDescription";
import SkillsParticles from "./mySkillsComponents/SkillsParticles";
import SkillsIcons from './mySkillsComponents/SkillsIcons';
function MySkills() {
  return (
    <div className={classes.mySkills}>
      <SkillsDescription />
      <SkillsParticles />
      <SkillsIcons />
    </div>
  );
}

export default MySkills;
