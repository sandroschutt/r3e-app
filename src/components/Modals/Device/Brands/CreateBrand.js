import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Brands from "../../../../classes/Brands";

export function CreateBrand() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newBrand = {
    name: "",
  };

  function handleCreateBrand() {
    Brands.create(newBrand);
  }

  return (
    <>
      <Button variant="success" className="my-2 col-2" onClick={handleShow}>
        Nova marca +
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <p className="h3">Nova marca</p>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleCreateBrand();
            }}
          >
            <label className="form-label">Nome:</label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder={"Nome da Nova Marca"}
              onChange={(event) => (newBrand.name = event.target.value)}
            />
            <button
              type="button"
              className="btn btn-secondary me-3"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              Criar
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
