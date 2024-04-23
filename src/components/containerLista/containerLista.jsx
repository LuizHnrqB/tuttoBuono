import data from "../../data/data.json";
import { CustomCarousel } from "../carousel/carousel";
import "./containerLista.css";

import React from "react";

export function ContainerLista() {
  let paos = data;
  const phoneNumber = "+5531995407582";
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de realizar um pedido com vocês!"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagem}`;

  return (
    <div className="tudoWrapper">
      <div className="listaWrapper">
        <div className="listaTitle">
          <h1 className="cardapio">Cardápio</h1>
        </div>
        <div className="cardapioWrapper">
          {paos.map((pao, index) => (
            <div className="cardapioItem">
              <div className="column1">
                <img src="assets\Icon.png" className="Icon" />
              </div>
              <div className="column2">
                <h4 className="paoNome">{pao.Nome}</h4>

                {pao.Recheio && (
                  <div className="recheios">
                    <p>
                      {paos[index].Recheio.map((recheio, innerIndex) => (
                        <span key={innerIndex}>
                          {recheio.recheio}
                          {innerIndex !== paos[index].Recheio.length - 1 &&
                            ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
              <div className="precos">
                <p>
                  {paos[index].Preco.map((preco, index) => (
                    <div className="column3">
                      <span key={index} className="precoNmr">
                        {preco.preco}{" "}
                      </span>
                      <span key={index} className="precoDscp">
                        {preco.PrecoDesc}{" "}
                      </span>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="zipZapContainer">
        <button className="zipzap">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img
              className="zipzapIMG"
              src="assets\contato.png"
              alt="WhatsApp"
            />
          </a>
        </button>
      </div>
      <div className="carousel">
        <CustomCarousel paos={paos} className="carouselInside" />
      </div>
    </div>
  );
}
