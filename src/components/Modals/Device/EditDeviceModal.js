import { useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import Device from "../../../classes/Device";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export function EditDeviceModal(props) {
  const { userData } = useUserDataContext();
  const models = props.models;
  const brands = props.brands;
  const device = props.device;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEditDevice() {
    Device.update({id: userData.id, role: userData.role}, device);
  }

  if (brands !== "" && models !== "")
    return (
      <>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-light" closeButton>
            <Modal.Title>{`Editando: ${device.model.name}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="new-device"
              onSubmit={(event) => {
                event.preventDefault();
                handleEditDevice();
              }}
            >
              <div className="mb-3">
                <label className="form-label my-2" htmlFor="type">
                  Tipo:
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Default select example"
                  name="type"
                  defaultValue={device.type}
                  onChange={(event) => {
                    device.type = event.target.value;
                  }}
                  autoFocus
                >
                  <option>-- selecione</option>
                  <option key={Math.random()} value="smartphone">
                    Smartphone
                  </option>
                  <option key={Math.random()} value="PC">
                    PC
                  </option>
                  <option key={Math.random()} value="notebook">
                    Notebook
                  </option>
                  <option key={Math.random()} value="chromebook">
                    Chromebook
                  </option>
                  <option key={Math.random()} value="perifericos">
                    Periféricos
                  </option>
                  <option key={Math.random()} value="outros">
                    Outros
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label my-2" htmlFor="brand">
                  Marca:
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Seleciona a marca do dispositivo"
                  name="brand"
                  defaultValue={device.brandId}
                  onChange={(event) => (device.brandId = event.target.value)}
                >
                  <option>-- selecione</option>
                  {brands.map((brand, index) => {
                    return (
                      <option key={index + 1} value={brand.id}>
                        {brand.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label my-2" htmlFor="model">
                  Modelo:
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Seleciona a marca do dispositivo"
                  name="brand"
                  defaultValue={device.modelId}
                  onChange={(event) => {
                    device.modelId = event.target.value;
                  }}
                >
                  <option>-- selecione</option>
                  {models.map((model, index) => {
                    return (
                      <option key={index} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-5">
                <label className="form-label my-2" htmlFor="state">
                  Estado:
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Default select example"
                  name="state"
                  defaultValue={device.state}
                  onChange={(event) => {
                    device.state = event.target.value;
                  }}
                >
                  <option>-- selectione</option>]
                  <option value={"bom"}>Bom</option>
                  <option value={"regular"}>Regular</option>
                  <option value={"ruim"}>Ruim</option>
                </select>
              </div>
              <div>
                <button className="btn btn-success me-2" onClick={handleClose}>
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
