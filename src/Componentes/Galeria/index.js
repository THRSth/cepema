import React from "react";
import { Carousel } from "react-materialize";

import fotos from "../../JSON/Galeria";

import "./styles.css";

const Galeria = () => (
  <>
    <Carousel
      className="carousel-container"
      images={fotos}
      options={{
        fullWidth: true,
        indicators: true,
      }}
    />
  </>
);

export default Galeria;
