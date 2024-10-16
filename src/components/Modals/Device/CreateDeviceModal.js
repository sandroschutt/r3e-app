import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import Device from "../../../classes/Device";
import { Modal } from "react-bootstrap";

export function CreateDeviceModal(props) {
  const { userData } = useUserDataContext();
  const models = props.models;
  const brands = props.brands;
  const [userCanCreate, setUserCanCreate] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const device = {
    userId: userData.id
  };

  useEffect(() => {
    if (
      userData.role !== undefined &&
      (userData.role === "Admin" || userData.role === "Cliente") &&
      userCanCreate === false
    )
      setUserCanCreate(true);
  }, [userData, userCanCreate]);

  function handleCreateDevice() {
    const formdata = new FormData();
    formdata.append("userId", device.userId);
    formdata.append("type", device.type);
    formdata.append("brandId", device.brandId);
    formdata.append("modelId", device.modelId);
    formdata.append("state", device.state);
    formdata.set("photo", device.photo);
    
    Device.create(formdata);
  }

  if (brands !== "" && models !== "" && userCanCreate)
    return (
      <>
        <button
          type="button"
          className="col-2 my-2 btn btn-success"
          onClick={handleShow}
        >
          Novo Dispositivo +
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-light" closeButton>
            <Modal.Title>Novo Dispositivo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="new-device"
              onSubmit={(event) => {
                event.preventDefault();
                handleCreateDevice();
              }}
            >
              <div className="mb-3">
                <label className="form-label my-2" htmlFor="type">
                  <strong>Tipo:</strong>
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Default select example"
                  name="type"
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
                  <strong>Marca:</strong>
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Seleciona a marca do dispositivo"
                  name="brand"
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
                  <strong>Modelo:</strong>
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Seleciona a marca do dispositivo"
                  name="model"
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
              <div className="mb-3">
                <label className="form-label my-2" htmlFor="state">
                  <strong>Estado:</strong>
                </label>
                <select
                  className="form-control mb-3"
                  aria-label="Default select example"
                  name="state"
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
              <div className="mb-5">
                <label htmlFor="profilePicture" className="my-2">
                  <strong>Foto:</strong>
                </label>
                <input
                  className="mb-3 form-control"
                  name="devicePhoto"
                  type="file"
                  accept="img/png, img/jpeg, img/jpg"
                  onChange={(event) => (device.photo = event.target.files[0])}
                />
              </div>
              <div>
                <button className="btn btn-success me-2" onClick={handleClose}>
                  Cancelar
                </button>
                <button className="btn btn-primary" type="submit">
                  Adicionar
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
}
