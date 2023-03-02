import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../estiloscam.css";

function BotonCompra(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

<button onClick={handleShow} id = '{camiseta.name}' className = 'boton '> Comprar </button> 

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Gracias por su compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Acabas de comprar {props.name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>Entendido</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BotonCompra