import { useState } from "react";
import { Modal } from "react-bootstrap";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { validateInputDateValue } from "../../../validations/validateDate";

export function CreateSchoolDeviceRequestModal(props) {
  const date = new Date().toJSON().slice(0,10);
  const [colect, setColect] = useState("");
  const [colectDate, setColectDate] = useState(date);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUpdateSchoolDeviceRequest() {
    let data = {
      deviceId: props.deviceId,
      schoolId: props.schoolId,
      dateColect: colectDate
    };

    if(colect !== null) {
      data.colect = parseInt(colect);
    }

    console.log(data)
    SchoolDeviceRequets.create(data);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success d-flex justify-content-start gap-2 align-items-center"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faTruck} />
        Requisitar
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>{`Editando Requisição #${"1"}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-5">
              <label className="mb-2" htmlFor="status">
                Retirada:
              </label>
              <select
                className="form-control"
                onChange={(event) => {
                  setColect(event.target.value);
                }}
                defaultValue={null}
              >
                <option value={null}>-- Selecione</option>
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
              </select>
              <br />
              <label className="mb-2" htmlFor="status">
                Data da coleta:
              </label>
              <input
                type="date"
                name="dateColect"
                className="form-control mb-4"
                onChange={(event) => {
                  setColectDate(event.target.value);
                }}
                defaultValue={validateInputDateValue(date)}
              />
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleUpdateSchoolDeviceRequest(date)}
              >
                Criar requisição
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
