import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { StudentsFilter } from "../../../components/Lists/Flters";
import { useEffect, useState } from "react";
import Student from "../../../classes/Student";
import StudentsTable from "../../../components/Tables/StudentsTable";
import { CreateStudentModal } from "../../../components/Modals/Student/CreateStudentModal";
import Admin from "../../../classes/Admin";
import { getSearchQueryParams, searchInObject } from "../../../components/forms/SearchForm";

export default function ManageStudents() {
  const [students, setStudents] = useState("");
  const [schools, setSchools] = useState([{ option: "Escola", value: "0" }]);

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (students === "") Student.getAll(setStudents);
    if (schools.length < 2) Admin.getAllByRole(5, setSchools);

    if (students !== "" && search !== null && searched === false) {
      const filteredStudents = students.filter((student) =>
        searchInObject(student, search)
      );
      setStudents(filteredStudents);
      setSearched(true);
    }
  }, [students, schools, search, searched]);

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
              <CreateStudentModal schools={schools} />
            </Col>
          </Row>
        </Col>
        <Col>
          <StudentsTable students={students} schools={schools} />
        </Col>
      </Row>
    );
  }
}
