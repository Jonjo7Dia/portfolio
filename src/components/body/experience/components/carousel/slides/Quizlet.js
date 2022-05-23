import LargeProject from "../../large/LargeProject";
import QuizBig from "../../../../../images/quizlet-laptop.png";
import QuizSmall from "../../../../../images/quizlet-mobile.png";
function Quizlet() {
  const techStack = ["css", "html", "react", "redux", "firebase"];
  return (
    <LargeProject bigImage={QuizBig} smallImage={QuizSmall} tech={techStack} />
  );
}

export default Quizlet;
