import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleXmark,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";
import { DeleteStudentModal } from "../Modals/Student/DeleteStudentModal";
import { EditStudentModal } from "../Modals/Student/EditStudentModal";
import { ViewStudentModal } from "../Modals/Student/ViewStudentModal";

export default function StudentsTable(props) {
  const students = props.students;
  const schools = props.schools;

  if (students !== "") {
    return (
      <Row className="admin-devices-table w-100">
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>Nome</th>
              <th>Escola</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>Série</th>
              <th>{"Família (nº)"}</th>
              <th>Renda Familiar</th>
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
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td className="d-flex justify-content-center gap-2 align-items-center p-3">
                    {student.familyMembers}
                    <FontAwesomeIcon icon={faUser} />
                  </td>
                  <td>{`R$${student.familyIncome}`}</td>
                  <td>{student.benefited ? "sim" : "não"}</td>
                  <td>{student.returned ? "sim" : "não"}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <ViewStudentModal student={student}/>
                    <EditStudentModal student={student} schools={schools}/>
                    <FontAwesomeIcon
                      icon={faMessage}
                      onClick={() =>
                        alert("There is a modal somewhere for messaging users.")
                      }
                    />
                    <FontAwesomeIcon
                      icon={faHandHoldingMedical}
                      onClick={() =>
                        alert("Contempla estudante e muda benefited para true")
                      }
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
