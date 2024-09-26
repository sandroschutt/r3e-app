import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Brands from "../../../../classes/Brands";

export function EditBrand(props) {
  const brand = props.brand;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEditBrand() {
    Brands.update(brand);
  }

  if (brand !== "")
    return (
      <>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-dark text-light" closeButton>
            <p className="h3">{`Editando: ${brand.name}`}</p>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleEditBrand();
              }}
            >
              <label className="form-label">Nome:</label>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                defaultValue={brand.name}
                onChange={(event) => (brand.name = event.target.value)}
              />
              <button
                type="button"
                className="btn btn-secondary me-3"
                onClick={handleClose}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                Atualizar
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
}
