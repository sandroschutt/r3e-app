import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import User from "../../../classes/User";

export function DeleteScheduleModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleDeleteSchedule(id) {
      const user = new User();
      user.deleteSchedule(id)
    }
  
    return (
      <>
        <FontAwesomeIcon icon={faTrash} onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header className="bg-warning" closeButton>
            <Modal.Title>{`Excluir agendamento #${props.id}?`}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-light py-5">
            Ao excluir um agendamento, ele é permanentemente removido do sistema.
            Tem certeza que deseja continuar?
          </Modal.Body>
          <Modal.Footer className="bg-warning">
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button type="submit" variant="danger" onClick={() => { handleDeleteSchedule(props.id) }}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }