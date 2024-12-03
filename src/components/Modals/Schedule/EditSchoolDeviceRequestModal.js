import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  validateDate,
  validateInputDateValue,
} from "../../../validations/validateDate";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";

export function EditSchoolDeviceRequestModal(props) {
  const [colectDate, setColectDate] = useState(props.schoolRequest.colectDate);
  const [colect, setColect] = useState(props.schoolRequest.colect);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const schoolRequest = props.schoolRequest;

  function handleUpdateSchoolDeviceRequest() {
    let requestData = { colect: colect };
    
    if (colectDate !== undefined) {
        let finalDate = new Date(colectDate);
        requestData.dateColect = finalDate;
    }

    SchoolDeviceRequets.update(schoolRequest.id, requestData);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success d-flex justify-content-center gap-2 align-items-center w-50"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        Editar requisição
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
                defaultValue={schoolRequest.colect}
              >
                <option value={null}>-- Selecione</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
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
                defaultValue={schoolRequest.dateColect !== null ? validateInputDateValue(schoolRequest.dateColect) : undefined}
              />
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleUpdateSchoolDeviceRequest()}
              >
                Atualizar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
