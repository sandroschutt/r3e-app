import "./style.scss";
import DummyAvatarImage from "../../assets/images/r3d3_profile_avatar.png";
import { Col, Row } from "react-bootstrap";
import { validateDate } from "../../validations/validateDate.js";
import { validatePhones } from "../../validations/validatePhones.js";
import { EditStudentModal } from "../Modals/EditStudentModal.js";

export function StudentPreview(props) {
  const user = props.user;

  if (user !== "") {
    return (
      <>
        <Row className="admin-users--preview flex-column justify-content-between">
          <Col className="admin-users--preview--header d-flex align-items-center gap-4 col-2 w-100">
            <img src={DummyAvatarImage} alt="" />
            <div>
              <h2>{user.name}</h2>
              <p>
                <strong className="me-2">
                  {props.users === "student" ? "Estudante" : "Cliente"}
                </strong>
                {user.email}
              </p>
            </div>
          </Col>
          <Col className="admin-users-preview--children col-8 w-100">
            <StudentCardData student={user} />
          </Col>
          <Col className="admin-users--preview--actions col-2 w-100 d-flex">
            <Row className="w-100 justify-content-start align-items-end">
              <Col>
                <EditStudentModal student={user} />
              </Col>
              <Col className="d-flex justify-content-end gap-3">
                <button type="button" className="btn btn-outline-primary" onClick={() => alert("Receba!")}>
                  Contemplar
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={() => alert("Chora memo!")}>
                  Reprovar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => alert("Playboy aqui não!")}>
                  Excluir
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

function StudentCardData(props) {
  const student = props.student;

  if (student !== "") {
    return (
      <>
        <div>
          <ul>
            <li>
              <p>
                <strong>Escola:</strong>
                {student.school.name}
              </p>
            </li>
            <li>
              <p>
                <strong>Frequência:</strong>
                {`${student.frequency}%`}
              </p>
            </li>
            <li>
              <p>
                <strong>CR:</strong>
                {student.performanceIndex}
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                <strong>Idade:</strong>
                {student.age}
              </p>
            </li>
            <li>
              <p>
                <strong>Data cad:</strong>
                {validateDate(student.createdAt)}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <p>
                <strong>Família:</strong>6 pessoas
              </p>
            </li>
            <li>
              <p>
                <strong>Renda familiar:</strong>
                {`R$${student.familyIncome}`}
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                <strong>Rua:</strong>Avenida Teste da Silva
              </p>
            </li>
            <li>
              <p>
                <strong>Cidade:</strong>São Teste
              </p>
            </li>
            <li>
              <p>
                <strong>UF:</strong>SP
              </p>
            </li>
            <li>
              <p>
                <strong>CEP:</strong>00000-000
              </p>
            </li>
          </ul>
        </div>

        <ul>
          <li>
            <p>
              <strong>E-mail secundário:</strong>
              {student.emailSecondary !== undefined
                ? student.emailSecondary
                : "não informado"}
            </p>
          </li>
          <li>
            <p>
              <strong>Celular:</strong>
              {validatePhones(student.phone)}
            </p>
          </li>
        </ul>
      </>
    );
  }
}
