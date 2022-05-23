import LargeProject from "../../large/LargeProject";
import CompoundLarge from "../../../../../images/compound-laptop.png";
import CompoundSmall from "../../../../../images/compound-mobile.png";

function Compound() {
  const techStack = ["html", "css", "react", "redux", "chart"];
  return <LargeProject
    tech={techStack}
    smallImage={CompoundSmall}
    bigImage={CompoundLarge}
  />;
}

export default Compound;
