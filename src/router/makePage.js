import React from "react";
import SliderBackground from "../Componentes/SliderBackground";

export const makePage = (Page, photos) =>
  !photos ? pageDefault(Page) : pageWithSlider(Page, photos);

const pageDefault = (Page) => <Page />;

const pageWithSlider = (Page, photos) => (
  <>
    <SliderBackground fotos={photos} />
    <Page />
  </>
);
