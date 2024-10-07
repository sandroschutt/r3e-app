import { useState } from "react";
import { Modal } from "react-bootstrap";
import PickupLocation from "../../../classes/PickupLocation";

export function CreatePickupLocationFromSchoolModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = {
    description: "",
    business: "",
    image: "",
  };

  function handleCreatePickupLocation() {
    PickupLocation.createFromSchool(props.id, location);
  }

  return (
    <>
      <button className="btn btn-outline-success" onClick={handleShow}>Criar</button>

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
              <div className="alert alert-info">
                <strong>Torne-se um ponto de coleta:</strong> Ao enviar este formulário,
                informações como nome, endereço e meios de contato da sua escola serão
                usados para torná-la em um ponto de coleta.
              </div>
              <div className="alert alert-warning">
                <strong>Atenção!</strong> Ao tornar sua escola em um ponto de
                coleta, ela será listada nos mapas e tabelas de pontos de coleta.
                Não torne sua escola em um ponto de coleta caso não tenha capacidade
                de coletar lixo eletrônico (REEE).
              </div>
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
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-success" type="submit">
                Confirmar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
