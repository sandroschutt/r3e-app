import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { StudentsFilter } from "../../../components/Lists/Flters";
import { StudentsList } from "../../../components/Lists";
import { useEffect, useState } from "react";
import { AddNewStudentModal } from "../../../components/Modals";
import Student from "../../../classes/Student";
import StudentsTable from "../../../components/Tables/StudentsTable";

export default function ManageStudents() {
  const [students, setStudents] = useState("");

  useEffect(() => {
    if (students === "") {
      Student.getAll(setStudents);
    }
  }, [students]);

  if (students !== "") {
    return (
      <Row className="flex-column">
        <Col>
          <UserHeader pageTitle={"Estudantes"} />
        </Col>

        <Col id="admin-users--view">
          <Row className="justify-content-between pb-3">
            <Col>
              <StudentsFilter />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <AddNewStudentModal />
            </Col>
          </Row>
        </Col>
        <Col>
          <StudentsTable students={students} />
        </Col>
      </Row>
    );
  }
}
