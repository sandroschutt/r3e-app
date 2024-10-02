import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { validatePhones } from "../../../validations/validatePhones";
import dummyLocationImage from "../../../assets/pickup-locations/pickup-locations.jpg";

export function ViewPickupLocationModal(props) {
  const location = props.location;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon icon={faEye} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <Modal.Title>{location.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div>
              <img src={dummyLocationImage} width={464}/>
            </div>
            <div>
              <p className="mt-3 mb-5">
                {location.description}
              </p>
              <p className="mb-3">
                <strong>Empresa: </strong>
                {location.user.name}
              </p>
              <p className="mb-3">
                <strong>Estabelecimento: </strong>
                {location.business}
              </p>
              <p className="mb-3">
                <strong>E-mail: </strong>
                {location.email}
              </p>
              <p className="mb-3">
                <strong>Telefone: </strong>
                {validatePhones(location.phone)}
              </p>
              <p className="mb-3">
                <strong>CEP: </strong>
                {location.cep}
              </p>
              <p className="mb-3">
                <strong>Número: </strong>
                {location.number}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
