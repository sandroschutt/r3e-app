import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeviceModel from "../../../../classes/DeviceModel";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export function DeleteModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDeleteModel(modelId) {
    DeviceModel.delete(modelId);
  }

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>{`Excluir ${props.name}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          Ao excluir um modelo, ele é permanentemente removido do sistema, assim
          como todos os dispositivos do modelo e suas dependências. <strong>Tem certeza que deseja continuar?</strong>
        </Modal.Body>
        <Modal.Footer className="bg-warning">
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={() => {
              handleDeleteModel(props.modelId);
            }}
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
