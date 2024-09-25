import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { validateDate } from "../../../validations/validateDate";
import { validatePhones } from "../../../validations/validatePhones";

export function ViewStudentModal(props) {
  const student = props.student;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (student !== "")
    return (
      <>
        <FontAwesomeIcon icon={faEye} onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-light" closeButton>
            <Modal.Title>{student.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="h4 px-2 mb-3">Social</p>
            <ul className="list-group list-group-flush mb-5">
              <li className="list-group-item">
                <strong className="me-2">Idade:</strong>
                {student.age}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Família:</strong>
                {`${student.familyMembers} pessoas`}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Renda familiar:</strong>
                {`R$${student.familyIncome}`}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Data de cadastro:</strong>
                {validateDate(student.createdAt)}
              </li>
            </ul>
            <p className="h4 px-2 mb-3">Acadêmico</p>
            <ul className="list-group list-group-flush mb-5">
              <li className="list-group-item">
                <strong className="me-2">Escola:</strong>
                {student.school.name}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Série:</strong>
                {student.grade}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Frequência:</strong>
                {`${student.frequency}%`}
              </li>
              <li className="list-group-item">
                <strong className="me-2">CR:</strong>
                {`${student.performanceIndex}/10`}
              </li>
            </ul>
            <p className="h4 px-2 mb-3">Endereço</p>
            <ul className="list-group list-group-flush mb-5">
              <li className="list-group-item">
                <strong className="me-2">CEP:</strong>
                {student.address.zipcode}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Rua:</strong>
                {student.address.street}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Nº:</strong>
                {student.address.number}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Bairro:</strong>
                {student.address.neighborhood}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Cidade:</strong>
                {student.address.city}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Estado:</strong>
                {student.address.state}
              </li>
            </ul>
            <p className="h4 px-2 mb-3">Contato</p>
            <ul className="list-group list-group-flush mb-5">
              <li className="list-group-item">
                <strong className="me-2">E-mail:</strong>
                {student.email}
              </li>
              <li className="list-group-item">
                <strong className="me-2">Telefone:</strong>
                {validatePhones(student.phone)}
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </>
    );
}
