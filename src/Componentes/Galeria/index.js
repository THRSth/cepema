import React from "react";
import { Carousel } from "react-materialize";

import foto1 from "../../assets/img/Galeria/foto-1.jpg";
import foto2 from "../../assets/img/Galeria/foto-2.JPG";
import foto3 from "../../assets/img/Galeria/foto-3.JPG";
import foto4 from "../../assets/img/Galeria/foto-4.JPG";
import foto5 from "../../assets/img/Galeria/foto-5.JPG";
import foto6 from "../../assets/img/Galeria/foto-6.JPG";
import foto7 from "../../assets/img/Galeria/foto-7.JPG";
import foto8 from "../../assets/img/Galeria/foto-8.jpg";
import foto9 from "../../assets/img/Galeria/foto-9.jpg";

import "./styles.css";

const Galeria = () => (
  <>
    <Carousel
      className="carousel-container"
      images={[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9]}
      options={{
        fullWidth: true,
        indicators: true,
      }}
    />
  </>
);

export default Galeria;
