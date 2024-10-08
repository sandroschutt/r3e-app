import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import User from "../../../classes/User";
import { useUserDataContext } from "../../../context/UserDataContext";

export function CreateScheduleModal(props) {
  const { userData } = useUserDataContext();
  const [price, setPrice] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePickupButton() {
    if (userData.role === undefined) return;
    if (userData.role === "Empresa" || userData.role === "Ong")
      return (
        <button className="btn btn-outline-success" onClick={handleShow}>
          Coletar
        </button>
      );
  }

  function handleFormSubmit() {
    const data = {
      deviceId: props.device.id,
      clientId: props.device.user.id,
      vendorId: userData.id,
      price: price
    };
    
    User.createSchedule(data)
  }

  if (props.device !== "")
    return (
      <>
        {handlePickupButton()}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-light" closeButton>
            <Modal.Title>Nova Coleta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event) => {
              event.preventDefault();
              handleFormSubmit();
            }}>
              <div>
                <label className="h6">Valor da coleta: </label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>R$</InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="0"
                    onBlur={(event) => setPrice(event.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="d-flex gap-3 mt-5">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Criar pedido de coleta
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}
