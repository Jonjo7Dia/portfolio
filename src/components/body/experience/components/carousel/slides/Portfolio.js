import LargeProject from "../../large/LargeProject";
import PortLarge from "../../../../../images/portfolio-laptop.png";
import PortSmall from "../../../../../images/portfolio-mobile.png";

function Portfolio() {
  const techStack = ["css", "html", "react"];
  const description ='A website I created to showcase my work, skills and personal projects. I created this website with a big focus on UI, researching color importance, animations and general layouts. This portfolio is important as it is the one place where all my work is located. This porfolio also allows me to provide a place to not only list my experience, but to show my experience and contextualize it in greater detail than a resume with bullet points. I hope this project shows the growth that I have personally felt on my learning curve of web development. I look forward to continuously adding to this project with future work!'
  return (
    <LargeProject
      tech={techStack}
      smallImage={PortSmall}
      bigImage={PortLarge}
      title={'Portfolio'}
      mobile={true}

      github={'https://github.com/Jonjo7Dia/portfolio/blob/main/README.md'}
      description={description}
      alternate = {'A website to showcase my work, skills and personal projects'}

    />
  );
}
export default Portfolio;
