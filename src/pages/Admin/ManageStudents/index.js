import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { StudentsFilter } from "../../../components/Lists/Flters";
import { StudentsList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";
import { useEffect, useState } from "react";
import { AddNewStudentModal } from "../../../components/Modals";
import Student from "../../../classes/Student";

export default function ManageStudents() {
  const [students, setStudents] = useState("");
  const [student, setStudent] = useState("");

  useEffect(() => {
    if (students === "") {
      Student.getAll(setStudents);
    }

    if (students !== "" && student === "") {
      setStudent(students[0]);
    }
  }, [students, student]);

  if (students !== "") {
    return (
      <Row className="flex-column">
        <Col>
          <UserHeader pageTitle={"Estudantes"} />
        </Col>

        <Col id="admin-users--view">
          <div className="admin-users--filters">
            <Row className="justify-content-between pb-3">
              <Col>
                <StudentsFilter />
              </Col>
              <Col style={{ textAlign: "right" }}>
                <AddNewStudentModal />
              </Col>
            </Row>
          </div>
          <Row className="admin-users--items">
            <Col className="admin-users--list ps-0 col-4">
              <StudentsList students={students} setStudent={setStudent} />
            </Col>
            <Col className="ps-0">
              <AdminUsersPreview
                user={student}
                users={"student"}
                actions={["Aprovar", "Reprovar", "Contemplar", "Mensagem"]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
