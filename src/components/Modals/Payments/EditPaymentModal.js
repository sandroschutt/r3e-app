import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Payments from "../../../classes/Payments";

export function EditPaymentModal(props) {
  const payment = props.payment;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEditPayment() {
    const data = {
      price: payment.price,
      status: payment.status,
      method: payment.method
    }

    Payments.update(payment.id, data);
  }

  return (
    <>
      <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>{`Editando Pagamento Nº ${payment.id}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => {
            event.preventDefault();
            handleEditPayment();
          }}>
            <div className="mb-5">
              <label htmlFor="price" className="form-label mb-2">
                <strong>Preço:</strong>
              </label>
              <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" defaultValue={payment.price} />
              </InputGroup>

              <label htmlFor="status" className="form-label mb-2">
                <strong>Status:</strong>
              </label>
              <select
                className="form-control mb-3"
                onChange={(event) => {
                  payment.status = event.target.value;
                }}
                defaultValue={payment.status}
              >
                <option>-- selecione</option>
                <option value="pago">Pago</option>
                <option value="pendente">Pendente</option>
                <option value="expirado">Expirado</option>
              </select>

              <label htmlFor="method" className="form-label mb-2">
                <strong>Método:</strong>
              </label>
              <select
                className="form-control mb-3"
                onChange={(event) => {
                  payment.method = event.target.value;
                }}
                defaultValue={payment.method}
              >
                <option>-- selecione</option>
                <option value="pix">Pix</option>
                <option value="credito">Crédito</option>
                <option value="debito">Débito</option>
                <option value="boleto">Boleto</option>
                <option value="transferencia-bancaria">Transferência bancária</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary" type="submit">
                Atualizar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
