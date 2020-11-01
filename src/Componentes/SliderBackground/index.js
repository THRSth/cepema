import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./styles.css";

function SliderBackground({ children, fotos }) {
  const fotosLength = fotos.length;
  const [indexFoto, setIndexFoto] = useState(0);

  const urlImage = () => `url(${fotos[indexFoto]})`;
  const changePhoto = (name) => {
    let index = name === "prev" ? indexFoto - 1 : indexFoto + 1;

    if (index < 0) index = fotosLength - 1;
    if (index >= fotosLength) index = 0;
    setIndexFoto(index);
  };

  return (
    <div
      className="slider-background__container"
      style={{
        backgroundImage: urlImage(),
      }}
    >
      <button
        className="slider-background__button__pass"
        onClick={() => changePhoto("prev")}
      >
        <FiChevronLeft />
      </button>
      <div className="slider-background__conteudo">{children}</div>
      <button
        className="slider-background__button__pass"
        onClick={() => changePhoto("next")}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default SliderBackground;
