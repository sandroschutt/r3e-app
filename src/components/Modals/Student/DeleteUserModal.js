import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import User from "../../../classes/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Student from "../../../classes/Student";

export function DeleteStudentModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleDeleteStudent(id) {
      Student.delete(id);
    }
  
    return (
      <>
        <FontAwesomeIcon icon={faTrash} onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>{`Excluir ${props.name}?`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ao excluir um dispositivo, ele é permanentemente removido do sistema.
            Tem certeza que deseja continuar?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button type="submit" variant="danger" onClick={() => { handleDeleteStudent(props.id) }}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }