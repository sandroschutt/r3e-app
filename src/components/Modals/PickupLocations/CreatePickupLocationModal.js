import { useState } from "react";
import { Modal } from "react-bootstrap";
import PickupLocation from "../../../classes/PickupLocation";
import { escapePhoneNumber } from "../../../validations/validatePhones";
import { escapeZipcode } from "../../../validations/validateZipcode";
import { useUserDataContext } from "../../../context/UserDataContext";

export function CreatePickupLocationModal() {
  const {userData} = useUserDataContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = {
    name: "",
    description: "",
    business: "",
    email: "",
    phone: "",
    cep: "",
    number: "",
    image: "",
  };

  function handleCreatePickupLocation() {
    location.phone = escapePhoneNumber(location.phone);
    location.cep = escapeZipcode(location.cep);

    const formdata = new FormData();
    formdata.append("userId", userData.id)
    formdata.append("name", location.name);
    formdata.append("description", location.description);
    formdata.append("business", location.business);
    formdata.append("email", location.email);
    formdata.append("phone", location.phone);
    formdata.append("cep", location.cep);
    formdata.append("number", location.number);
    formdata.set("image", location.image);

    PickupLocation.create(formdata);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-success col-2 my-3"
        onClick={handleShow}
      >
        Novo Local de Coleta +
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <Modal.Title>Novo Local de Coleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            name="create-pickup-location-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleCreatePickupLocation();
            }}
          >
            <div className="mb-5">
              <label className="mb-2" htmlFor="name">
                <strong>Nome:</strong>
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Novo Local de Coleta"
                onChange={(event) => {
                  location.name = event.target.value;
                }}
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
                placeholder="Galpão de reciclagem de materiais"
                onChange={(event) => {
                  location.description = event.target.value;
                }}
                rows={5}
              />

              <label className="mb-2" htmlFor="business">
                <strong>Estabelecimento:</strong>
              </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Coleta Seletiva"
                onChange={(event) => {
                  location.business = event.target.value;
                }}
              />
            </div>

            <label className="mb-2" htmlFor="email">
              <strong>E-mail:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="novolocaldecoleta@email.com"
              onChange={(event) => {
                location.email = event.target.value;
              }}
            />

            <label className="mb-2" htmlFor="phone">
              <strong>Telefone:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="(15) 99999-9999"
              onChange={(event) => {
                location.phone = event.target.value;
              }}
            />

            <label className="mb-2" htmlFor="zipcode">
              <strong>CEP:</strong>
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="00000-000"
              onChange={(event) => {
                location.cep = event.target.value;
              }}
            />

            <label className="mb-2" htmlFor="number">
              <strong>Número:</strong>
            </label>
            <input
              type="number"
              className="form-control mb-5"
              placeholder="999"
              onChange={(event) => {
                location.number = event.target.value;
              }}
            />
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-success" type="submit">
                Adicionar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
