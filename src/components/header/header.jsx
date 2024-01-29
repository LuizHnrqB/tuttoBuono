import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"; // Add this import for the close button
import "bootstrap/dist/css/bootstrap.min.css"; // Add this import for Bootstrap styles
import modalData from "../../data/modalData.json";
import "./header.css";

export function Header() {
  console.log(modalData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const phoneNumber = "+5531983004028";
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de realizar um pedido com vocês!"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagem}`;

  return (
    <div className="wrapper">
      <div className="headerWrapper">
        <div onClick={handleShow} className="aboutUs">
          Sobre nós:
        </div>
        <img
          className="tuttoBuono"
          src="src\assets\tuttobuono.png"
          alt="Tutto Buono"
        />

        <button className="zipzap">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img
              className="zipzapIMG"
              src="src\assets\contato.png"
              alt="WhatsApp"
            />
          </a>
        </button>
      </div>
      <div>
        <Modal className="modalStyle" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bodyModal">
            <p>{modalData.content}</p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
