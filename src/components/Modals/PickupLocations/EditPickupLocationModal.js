import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import PickupLocation from "../../../classes/PickupLocation";

export function EditPickupLocationModal(props) {
  const location = props.location;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEditPickupLocation() {
    const formdata = new FormData();
    formdata.append("name", location.name);
    formdata.append("description", location.description);
    formdata.append("business", location.business);
    formdata.append("email", location.email);
    formdata.append("phone", location.phone);
    formdata.append("cep", location.cep);
    formdata.append("number", location.number);
    formdata.set("image", location.image);

    PickupLocation.update(location.id, formdata);
  }

  return (
    <>
      <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>{`Editando ${location.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleEditPickupLocation();
            }}
          >
            <div className="mb-5">
              <label className="mb-2" htmlFor="name">
                <strong>Nome:</strong>
              </label>
              <input
                type="text"
                className="form-control mb-3"
                onChange={(event) => {
                  location.name = event.target.value;
                }}
                defaultValue={location.name}
              />

              <label className="mb-2" htmlFor="image">
                <strong>Foto:</strong>
              </label>
              <input
                type="file"
                accept="img/jpeg, img/jpg, img/png"
                className="form-control mb-3"
                onChange={(event) => {
                  location.image = event.target.files[0];
                }}
              />

              <label className="mb-2" htmlFor="description">
                <strong>Descrição:</strong>
              </label>
              <textarea
                className="form-control mb-3"
                onChange={(event) => {
                  location.description = event.target.value;
                }}
                defaultValue={location.description}
                rows={5}
              />

              <label className="mb-2" htmlFor="business">
                <strong>Estabelecimento:</strong>
              </label>
              <input
                type="text"
                className="form-control mb-3"
                onChange={(event) => {
                  location.business = event.target.value;
                }}
                defaultValue={location.business}
              />
            </div>

            <label className="mb-2" htmlFor="email">
              <strong>E-mail:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              onChange={(event) => {
                location.email = event.target.value;
              }}
              defaultValue={location.email}
            />

            <label className="mb-2" htmlFor="phone">
              <strong>Telefone:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              onChange={(event) => {
                location.phone = event.target.value;
              }}
              defaultValue={location.email}
            />

            <label className="mb-2" htmlFor="zipcode">
              <strong>CEP:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              onChange={(event) => {
                location.cep = event.target.value;
              }}
              defaultValue={location.cep}
            />

            <label className="mb-2" htmlFor="number">
              <strong>Número:</strong>
            </label>
            <input
              type="number"
              className="form-control mb-5"
              onChange={(event) => {
                location.number = event.target.value;
              }}
              defaultValue={location.number}
            />
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary" type="submit">
                Atualizar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
