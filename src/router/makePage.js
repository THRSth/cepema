import React from "react";
import SliderBackground from "../Componentes/SliderBackground";

export const makePage = (Page, ...args) => {
  const [slide] = args;
  return !slide ? pageDefault(Page) : pageWithSlider(Page, slide);
};

const pageDefault = (Page) => <Page />;

const pageWithSlider = (Page, slide) => (
  <>
    <SliderBackground fotos={slide.photos}>{slide.text}</SliderBackground>
    <Page />
  </>
);
