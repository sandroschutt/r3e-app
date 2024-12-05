import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import User from "../../../classes/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function DeleteUserModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function handleDeleteUser(userId) {
      const user = new User(userId);
      user.delete();
      window.location.href = "/app/users"
      return;
    }
  
    return (
      <>
        <FontAwesomeIcon icon={faTrash} onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>{`Excluir ${props.userName}?`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ao excluir um dispositivo, ele é permanentemente removido do sistema.
            Tem certeza que deseja continuar?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button type="submit" variant="danger" onClick={() => { handleDeleteUser(props.userId) }}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }