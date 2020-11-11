import React from "react";
// Components
import Carousel from "../components/layouts/Carousel";
import Information from "../components/layouts/Information";

const carouselImages: string[] = ["images/1.jpg", "images/2.jpg"];

const HomeContainer: React.FC = () => {
  return (
    <>
      <Carousel images={carouselImages} />
      <Information />
    </>
  );
};

export default HomeContainer;
