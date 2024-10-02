import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PickupLocation from "../../../classes/PickupLocation";

export function DeletePickupLocationModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleDeletePickupLoation(id) {
      PickupLocation.delete(id)
    }
  
    return (
      <>
        <FontAwesomeIcon icon={faTrash} onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header className="bg-warning" closeButton>
            <Modal.Title>{`Excluir local de coleta #${props.id}?`}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-light py-5">
            Ao excluir um local de coleta, ele é permanentemente removido do sistema.
            Tem certeza que deseja continuar?
          </Modal.Body>
          <Modal.Footer className="bg-warning">
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button type="submit" variant="danger" onClick={() => { handleDeletePickupLoation(props.id) }}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }