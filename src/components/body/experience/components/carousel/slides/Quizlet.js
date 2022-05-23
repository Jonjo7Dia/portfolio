import LargeProject from "../../large/LargeProject";
import QuizBig from "../../../../../images/quizlet-laptop.png";
import QuizSmall from "../../../../../images/quizlet-mobile.png";
function Quizlet() {
  const techStack = ["css", "html", "react", "redux", "firebase"];
  const description =
    'This Project is to first take what I learnt in the "React - The Complete Guide (incl Hooks, React Router, Redux)" course found on Udemy and put it to use. I also have specifically chosen to create this project, because in the past when I have been studying for certain courses or subjects I have used Quizlet.com to create flashcards, however recently Quizlet has added a "Pro" version to their users, which allows them to create flash cards with images. I decided I wanted to create my own version of a flashacrd creation site, which would enable creation of flashcards with the optional added feature of using images.';
    const title = 'Flashcards'
  return (
    <LargeProject
      bigImage={QuizBig}
      smallImage={QuizSmall}
      tech={techStack}
      description={description}
      title = {title}
      mobile={true}
      github = {'https://github.com/Jonjo7Dia/Flashcards-Quiz'}
      link = {'http://flashcard.digital/'}
      alternate={'A flashcard building tool, for people to create and view flashcards.'}
    />
  );
}

export default Quizlet;
