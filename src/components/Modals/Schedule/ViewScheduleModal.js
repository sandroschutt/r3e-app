import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validateDate } from "../../../validations/validateDate";
import dummyAvatar from "../../../assets/images/r3d3_profile_avatar.png";

export function ViewScheduleModal(props) {
  const schedule = props.schedule;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleObservation(observation) {
    if (observation !== "") {
      return (
        <div className="mb-5 p-3 bg-warning">
          <strong>Observações: </strong>
          <p>{observation}</p>
        </div>
      );
    }
  }

  if (schedule !== "")
    return (
      <>
        <FontAwesomeIcon icon={faEye} onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-light" closeButton>
            <Modal.Title>{`Coleta Nº ${schedule.id}: ${schedule.device.brand.name} ${schedule.device.model.name}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="h4 mb-4">Dispositivo</p>
            <div className="d-flex px-0 pb-3 gap-3 mb-5">
              <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.NQEXIknxuWGIk8Ws3pJlMAHaHa&pid=Api&P=0&h=180" />
              </div>
              <div>
                <p className="mb-1">
                  <strong>Marca: </strong>
                  {schedule.device.brand.name}
                </p>
                <p className="mb-1">
                  <strong>Modelo: </strong>
                  {schedule.device.model.name}
                </p>
                <p className="mb-1">
                  <strong>Ano: </strong>
                  {schedule.device.model.year}
                </p>
                <p className="mb-3">
                  <strong>Estado: </strong>
                  {schedule.device.state}
                </p>
                <a
                  href="#"
                  className="text-success ps-0"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(
                      `/${window.location.pathname.split("/")[1]}/devices/${
                        schedule.device.id
                      }`
                    );
                  }}
                >
                  Ver detalhes
                </a>
              </div>
            </div>

            <div className="mb-5 p-4 border">
              <p className="h4 mb-4">Coleta</p>
              <p>
                <strong>Aceita: </strong>
                {schedule.accepted ? "sim" : "não"}
              </p>
              <p>
                <strong>Nº do pagamento:</strong>
                <span
                  className="ms-2 py-1 px-2 bg-primary text-light"
                  style={{ borderRadius: "4px" }}
                >
                  #{schedule.paymentId}
                </span>
              </p>
              <p>
                <strong>Status: </strong>
                {schedule.status.replace("-", " ")}
              </p>
              <p>
                <strong>Data da coleta: </strong>
                {validateDate(schedule.dateColect)}
              </p>
              <p>
                <strong>Última atualização: </strong>
                {validateDate(schedule.updatedAt)}
              </p>
              <p className="mb-5">
                <strong>Data coletado: </strong>
                {validateDate(schedule.dateColected)}
              </p>

              <div className="mb-5 p-4 bg-light">
                <p className="h4 mb-4">Doador:</p>
                <a
                  href="#"
                  className="d-flex gap-3 align-items-center text-decoration-none"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(
                      `/${window.location.pathname.split("/")[1]}/users/${
                        schedule.clientId
                      }`
                    );
                  }}
                >
                  <img src={dummyAvatar} height={64} width={64} />
                  <p className="h5 mb-3">{schedule.client.name}</p>
                </a>
              </div>

              <div className="mb-5 p-4 bg-light">
                <p className="h4 mb-4">Coletor:</p>
                <a
                  href="#"
                  className="d-flex gap-3 align-items-center text-decoration-none"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(
                      `/${window.location.pathname.split("/")[1]}/users/${
                        schedule.vendorId
                      }`
                    );
                  }}
                >
                  <img src={dummyAvatar} height={64} width={64} />
                  <p className="h5 mb-3">{schedule.vendor.name}</p>
                </a>
              </div>

              {handleObservation(schedule.obs)}
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}
