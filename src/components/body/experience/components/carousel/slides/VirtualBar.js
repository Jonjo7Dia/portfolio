import LargeProject from "../../large/LargeProject";
import VirtualBarImage from "../../../../../images/virtual-bar.png";
import VirtualBarMobile from "../../../../../images/virtual-bar-mobile.png";
function VirtualBar() {
  const techStack = ["html", "css", "typescript", "react", "redux"];
  const description =
    "At my previous role I was in charge of training new employees as well as just refreshing bar knowledge. The best way I learn is constant repetition, so before stepping into the bar for the first time I created physical flashcards. Since it worked for me I wanted to share my knowledge with my colleagues, so I created this website, where people could practice cocktail recipes and learn about the drinks they were making. This Project is really important to me, because it was my very first website I created! I just wanted to create this for my colleagues, but in doing so I fell in love with programming. This project was also really important to the hotel we were working for as they prided themselves for having very good bartenders who were knowledgeable about their craft.";
  return (
    <LargeProject
      bigImage={VirtualBarImage}
      smallImage={VirtualBarMobile}
      title={"Bar Training"}
      tech={techStack}
      mobile={true}
      link={"https://virtualbartraining.com/"}
      github={"https://github.com/Jonjo7Dia/Bar-training-2.0"}
      description={description}
      alternate={
        "My very first project! where users can practice and test bar knowledge, unfortunately there is no mobile version available"
      }
    />
  );
}

export default VirtualBar;

// <LargeProject
// bigImage={QuizBig}
// smallImage={QuizSmall}
// tech={techStack}
// description={description}
// title = {title}
// github = {'https://github.com/Jonjo7Dia/Flashcards-Quiz'}
// link = {'http://flashcard.digital/'}
// alternate={'A flashcard building tool, for people to create and view flashcards.'}
// />
