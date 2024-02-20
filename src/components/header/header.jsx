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

  return (
    <div className="wrapper">
      <div className="headerWrapper">
        <img
          className="tuttoBuono"
          src="assets\tuttobuono.png"
          alt="Tutto Buono"
        />
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
