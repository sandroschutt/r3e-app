import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import Payments from "../../../classes/Payments";

export function SaveProofModal(props) {
  const payment = props.payment;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleProofPayment() {
    const data = {
      paymentNote: "https://drive.google.com/file/d/1O54uGTUbF8r9pskg4TWa0b6SkHMxJN4J/view?usp=sharing",
    };

    Payments.proof(payment.id, data)
  }

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>Enviar comprovante</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>{`Comprovando Pagamento Nº ${payment.id}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              handleProofPayment();
            }}
          >
            <div className="mb-5">
              <label htmlFor="price" className="form-label mb-2">
                <strong>Comprovante:</strong>
                <input type="file" accept="image/jpeg, image/png" className="form-control" onChange={(event) => payment.paymentNote = event.target.value}/>
              </label>
              
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
