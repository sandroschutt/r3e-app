import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Payments from "../../../classes/Payments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export function SendProofModal(props) {
  const payment = props.payment;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleProofPayment() {
    const data = {
      paymentNote:
        "https://centraldesuporte.levelup.com.br/Media/c84f3127-e578-4780-b9a7-5e3ba894cab3.PNG",
    };

    Payments.proof(payment.id, data);
  }

  return (
    <>
      <button className="btn btn-outline-success d-flex align-items-center gap-2" onClick={handleShow}>
        <FontAwesomeIcon icon={faFileInvoice} />
        Enviar comprovante
      </button>

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
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="form-control"
                  onChange={(event) =>
                    (payment.paymentNote = event.target.value)
                  }
                />
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
