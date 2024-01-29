import React from "react";
import BootstrapModal from "react-bootstrap/Modal";

const CustomModal = ({ isOpen, onClose, title, content, onOpen }) => {
  return (
    <div
      className="modal show"
      style={{ display: isOpen ? "block" : "none", position: "initial" }}
    >
      <BootstrapModal.Dialog>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{title}</BootstrapModal.Title>
        </BootstrapModal.Header>

        <BootstrapModal.Body>
          <p>{content}</p>
        </BootstrapModal.Body>
      </BootstrapModal.Dialog>
    </div>
  );
};

export default CustomModal;
