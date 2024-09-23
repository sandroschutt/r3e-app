import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { faCircleXmark, faHandHoldingMedical, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import { validateDate } from "../../validations/validateDate";
import { DeleteStudentModal } from "../Modals/Student/DeleteUserModal";
import { validatePhones } from "../../validations/validatePhones";

export default function StudentsTable(props) {
  const students = props.students;
  const navigate = useNavigate();

  if (students !== "") {
    return (
      <Row className="admin-devices-table w-100">
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>Nome</th>
              <th>Escola</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Idade</th>
              <th>Série</th>
              <th>Renda Familiar</th>
              <th>CR</th>
              <th>Cadastro</th>
              <th>Contemplado</th>
              <th>Retorno</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              return (
                <tr
                  id={student.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{student.name}</td>
                  <td>{student.school.name}</td>
                  <td>{student.email}</td>
                  <td>{validatePhones(student.phone)}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>{`R$${student.familyIncome}`}</td>
                  <td>{`${student.performanceIndex}/10`}</td>
                  <td>{validateDate(student.createdAt)}</td>
                  <td>{student.benefited ? "sim" : "não"}</td>
                  <td>{student.returned ? "sim" : "não"}</td>
                  <td className="d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon
                      icon={faMessage}
                      onClick={() =>
                        alert("There is a modal somewhere for messaging users.")
                      }
                    />
                    <FontAwesomeIcon
                      icon={faHandHoldingMedical}
                      onClick={() => alert("Contempla estudante e muda benefited para true")}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => alert("Reprova o estudante")}
                    />
                    <DeleteStudentModal id={student.id} name={student.name} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
  }
}
