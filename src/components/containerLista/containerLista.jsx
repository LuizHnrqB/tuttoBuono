import data from "../../data/data.json";
import { CustomCarousel } from "../carousel/carousel";
import "./containerLista.css";

import React from "react";

export function ContainerLista() {
  let paos = data;

  return (
    <div className="tudoWrapper">
      <div className="listaTitle">
        <h1>Cardápio</h1>
      </div>
      <div className="listaWrapper">
        <img src="src\assets\trigo.png" className="trigo1" />

        <CustomCarousel paos={paos} className="carousel" />

        <img src="src\assets\trigo.png" className="trigo2" />
      </div>
    </div>
  );
}
