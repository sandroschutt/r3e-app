import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import Payments from "../../../classes/Payments";

export function CreatePaymentModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    scheduleId: "",
    price: "",
    method: "",
  };

  function handleCreatePayment() {
    Payments.create(data);
  }

  function adminFields() {
    if (props.userRole === "Admin" && props.schedules !== "")
      return (
        <>
          <label htmlFor="pickup" className="form-label mb-2">
            <strong>Coleta:</strong>
          </label>
          <select
            className="form-control mb-3"
            onChange={(event) => {
              data.scheduleId = event.target.value;
            }}
          >
            <option>-- selecione</option>
            {props.schedules.map((schedule, index) => {
              return (
                <option key={index} value={schedule.id}>
                  {`#${schedule.id} - ${schedule.vendor.name} > ${schedule.client.name}`}
                </option>
              );
            })}
          </select>
        </>
      );
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-success col-2 my-2"
        onClick={handleShow}
      >
        Novo Pagamento +
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <Modal.Title>Nova Ordem de Pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              handleCreatePayment();
            }}
          >
            <div className="mb-5">
              {adminFields()}

              <label htmlFor="price" className="form-label mb-2">
                <strong>Preço:</strong>
              </label>
              <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  onChange={(event) => {
                    data.price = event.target.value;
                  }}
                />
              </InputGroup>

              <label htmlFor="method" className="form-label mb-2">
                <strong>Método de pagamento:</strong>
              </label>
              <select
                className="form-control mb-3"
                onChange={(event) => {
                  data.method = event.target.value;
                }}
              >
                <option>-- selecione</option>
                <option value="pix">Pix</option>
                <option value="credito">Crédito</option>
                <option value="debito">Débito</option>
                <option value="boleto">Boleto</option>
                <option value="transferencia-bancaria">
                  Transferência bancária
                </option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-success" type="submit">
                Criar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
