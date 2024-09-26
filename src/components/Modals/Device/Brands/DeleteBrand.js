import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Brands from "../../../../classes/Brands";

export function DeleteBrand(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDeleteBrand() {
    Brands.delete(props.brand.id);
  }

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>{`Excluir marca ${props.brand.name}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white py-5">
          Ao excluir uma marca, ela é permanentemente removida do sistema, assim
          como todos os modelos, dispositivos e suas dependências. <strong>Tem certeza que deseja continuar?</strong>
        </Modal.Body>
        <Modal.Footer className="bg-warning">
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={() => {
              handleDeleteBrand();
            }}
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
