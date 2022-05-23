import LargeProject from "../../large/LargeProject";
import CompoundLarge from "../../../../../images/compound-laptop.png";
import CompoundSmall from "../../../../../images/compound-mobile.png";

function Compound() {
  const techStack = ["html", "css", "react", "redux", "chart"];
  const description = 'I personally like to invest passively as well as plan out financial investments for the future. I use a lot of investment calculators in order to make attainable goals and plans, however even some of the most popular ones lack a few desirable features. One big feature that I would like to implement in this calculator which would differentiate it from other investment calcultors is the ability to have contributions increase or decrease. I want to include this feature because I assume my ability to invest will increase as I get older. Another reason why I decided to create this application, is because I find a lot of investment calculator UI\'s displeasing, furthermore with the use of states in react we can see a direct impact on investments plans without having to refresh the page.'
  return <LargeProject
    tech={techStack}
    smallImage={CompoundSmall}
    bigImage={CompoundLarge}
    title={'Interest Calc\''}
    description = {description}
    mobile={true}

    link={'http://compound-interest.online/'}
    github={'https://github.com/Jonjo7Dia/investment-calculator'}
    alternate={'I disliked the UI & features of many investment calculators... so I created my own'}
  />;
}

export default Compound;
