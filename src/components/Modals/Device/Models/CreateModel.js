import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DeviceModel from "../../../../classes/DeviceModel";

export function CreateModel(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const brands = props.brands;

  const newModel = {
    brandId: "",
    name: "",
    category: "",
    year: "",
    CPU: "",
    RAM: "",
    OS: "",
    battery: "",
    screen: ""
  };

  function handleCreateModel() {
    console.log(newModel);
    DeviceModel.create(newModel);
  }

  return (
    <>
      <Button variant="success" className="my-2 col-2" onClick={handleShow}>
        Novo modelo +
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <p className="h3">Novo modelo</p>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleCreateModel();
            }}
          >
            <label className="form-label">Nome:</label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder={"Modelo Novo Dispositivo"}
              onChange={(event) => (newModel.name = event.target.value)}
            />
            <label className="form-label">Marca:</label>
            <select
              type="text"
              name="brand"
              className="form-control mb-3"
              placeholder={"Marca"}
              onChange={(event) => (newModel.brandId = parseInt(event.target.value))}
            >
              {brands.map((brand, index) => {
                return (
                  <option key={index + 1} value={brand.id}>
                    {brand.name}
                  </option>
                );
              })}
            </select>
            <label className="form-label">Categoria:</label>
            <select
              name="category"
              className="form-control mb-3"
              onChange={(event) => (newModel.category = event.target.value)}
            >
              <option key={Math.random()}>-- selecione</option>
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
            <label className="form-label">Ano:</label>
            <input
              type="text"
              name="year"
              className="form-control mb-3"
              placeholder={"2024"}
              onChange={(event) => (newModel.year = event.target.value)}
            />
            <label className="form-label">CPU:</label>
            <select
              name="cpu"
              className="form-control mb-3"
              onChange={(event) => (newModel.CPU = event.target.value)}
            >
              <option>-- família</option>
              <option value={"atom"}>Atom</option>
              <option value={"pentium"}>Pentium</option>
              <option value={"celeron"}>Celeron</option>
              <option value={"i3"}>i3</option>
              <option value={"i5"}>i5</option>
              <option value={"i7"}>i7</option>
              <option value={"i9"}>i9</option>
              <option value={"ryzen 3"}>Ryzen 3</option>
              <option value={"ryzen 5"}>Ryzen 5</option>
              <option value={"ryzen 7"}>Ryzen 7</option>
              <option value={"snapdragon"}>Snapdragon</option>
              <option value={"snapdragon-g"}>Snapdragon G</option>
              <option value={"exynos"}>Exynos</option>
              <option value={"m1"}>M1</option>
              <option value={"m2"}>M2</option>
              <option value={"m3"}>M3</option>
            </select>
            <label className="form-label">RAM:</label>
            <select
              type="text"
              name="ram"
              className="form-control mb-3"
              onChange={(event) => (newModel.RAM = event.target.value)}
            >
              <option>-- selecione</option>
              <option value="2GB">2GB</option>
              <option value="3GB">3GB</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
            </select>
            <label className="form-label">OS:</label>
            <select
              name="os"
              className="form-control mb-3"
              onChange={(event) => (newModel.OS = event.target.value)}
            >
              <option>-- selecione</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="Windows">Windows</option>
              <option value="Linux">Linux</option>
              <option value="OSX">OSX</option>
              <option value="Chrome OS">Chrome OS</option>
            </select>
            <label className="form-label">Bateria:</label>
            <select
              name="battery"
              className="form-control mb-3"
              onChange={(event) => (newModel.battery = event.target.value)}
            >
              <option>-- selecione</option>
              <option value="3000MAh">3000MAh</option>
              <option value="3500MAh">3500MAh</option>
              <option value="4000MAh">4000MAh</option>
              <option value="4500MAh">4500MAh</option>
              <option value="5000MAh">5000MAh</option>
              <option value="5500MAh">5500MAh</option>
              <option value="6000MAh">6000MAh</option>
              <option value="6500MAh">6500MAh</option>
              <option value="7000MAh">7000MAh</option>
              <option value="7500MAh">7500MAh</option>
              <option value="8000MAh">8000MAh</option>
            </select>
            <label className="form-label">Tela:</label>
            <select
              name="screen"
              className="form-control mb-3"
              onChange={(event) => (newModel.screen = event.target.value)}
            >
              <option>-- selecione</option>
              <option value="TN">TN</option>
              <option value="IPS LCD">IPS LCD</option>
              <option value="LED">LED</option>
              <option value="Retina">Retina</option>
              <option value="outra">Outra</option>
            </select>
            <button
              type="button"
              className="btn btn-secondary me-3"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              Adicionar
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
