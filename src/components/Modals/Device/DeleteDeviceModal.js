import { useState } from "react";
import Device from "../../../classes/Device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";

export function DeleteDeviceModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDeleteDevice(deviceId) {
    Device.delete(deviceId);
  }

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Excluir este dispositivo?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-5 bg-dark text-light">
          Ao excluir um dispositivo, ele é permanentemente removido do sistema.
          Tem certeza que deseja continuar?
        </Modal.Body>
        <Modal.Footer className="bg-warning">
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={() => {
              handleDeleteDevice(props.deviceId);
            }}
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
