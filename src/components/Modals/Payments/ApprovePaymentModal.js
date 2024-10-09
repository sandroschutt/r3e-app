import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Payments from "../../../classes/Payments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

export function ApprovePaymentModal(props) {
  const payment = props.payment;
  const [approve, setApprove] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleProofPayment() {
    Payments.approve(payment.id, approve);
  }

  function handleRoleActions(role) {
    if (role !== "Empresa") return;

    return (
      <>
        <button className="btn btn-secondary" onClick={handleClose}>
          Cancelar
        </button>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={() => setApprove(0)}
        >
          Reprovar
        </button>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => setApprove(1)}
        >
          Aprovar
        </button>
      </>
    );
  }

  return (
    <>
      <button
        className="btn btn-primary d-flex align-items-center gap-2"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        Ver comprovante
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>{`Comprovante do Pagamento Nº ${payment.id}`}</Modal.Title>
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
              </label>
              <img
                src={
                  "https://centraldesuporte.levelup.com.br/Media/c84f3127-e578-4780-b9a7-5e3ba894cab3.PNG"
                }
                width={450}
              />
            </div>
            <div className="d-flex gap-3 justify-content-end">
             {handleRoleActions(props.userRole)}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
