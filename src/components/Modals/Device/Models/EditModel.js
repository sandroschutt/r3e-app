import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DeviceModel from "../../../../classes/DeviceModel";

export function EditModel(props) {
  const model = props.model;
  const brands = props.brands;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEditModel() {
    delete model["updatedAt"];
    DeviceModel.update(model);
  }

  if (model !== "")
    return (
      <>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-dark text-light" closeButton>
            <p className="h3">{`Editando: ${model.name}`}</p>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleEditModel();
              }}
            >
              <label className="form-label">Nome:</label>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder={model.name}
                onChange={(event) => (model.name = event.target.value)}
              />
              <label className="form-label">Marca:</label>
              <select
                type="text"
                name="brand"
                className="form-control mb-3"
                onChange={(event) =>
                  (model.brandId = parseInt(event.target.value))
                }
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
              <label className="form-label">Categoria:</label>
              <select
                name="category"
                className="form-control mb-3"
                onChange={(event) => (model.category = event.target.value)}
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
                placeholder={model.year}
                onChange={(event) => (model.year = event.target.value)}
              />
              <label className="form-label">CPU:</label>
              <select
                name="cpu"
                className="form-control mb-3"
                onChange={(event) => (model.CPU = event.target.value)}
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
                onChange={(event) => (model.RAM = event.target.value)}
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
                onChange={(event) => (model.OS = event.target.value)}
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
                onChange={(event) => (model.battery = event.target.value)}
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
                className="form-control mb-5"
                onChange={(event) => (model.screen = event.target.value)}
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
                Atualizar
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
}
