import classes from "./ControlledCarousel.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Quizlet from "./slides/Quizlet";
import Portfolio from "./slides/Portfolio";
import Compound from "./slides/Compound";
import VirtualBar from "./slides/VirtualBar";
function ControlledCarousel() {
  useState();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  window.addEventListener("load", function (event) {
    document
      .getElementsByClassName("carousel-indicators")[0]
      .style.setProperty("display", "none");
  });

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={classes.slideShow}
      autoPlay={false}
      interval={null}
    >
      <Carousel.Item className={classes.slide}>
        <Quizlet></Quizlet>
      </Carousel.Item>
      <Carousel.Item>
        <Portfolio></Portfolio>
      </Carousel.Item>
      <Carousel.Item>
        <Compound></Compound>
      </Carousel.Item>
      <Carousel.Item>
        <VirtualBar></VirtualBar>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
