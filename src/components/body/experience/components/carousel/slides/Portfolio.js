import LargeProject from "../../large/LargeProject";
import PortLarge from "../../../../../images/portfolio-laptop.png";
import PortSmall from "../../../../../images/portfolio-mobile.png";

function Portfolio() {
  const techStack = ["css", "html", "react"];

  return (
    <LargeProject
      tech={techStack}
      smallImage={PortSmall}
      bigImage={PortLarge}
    />
  );
}
export default Portfolio;
