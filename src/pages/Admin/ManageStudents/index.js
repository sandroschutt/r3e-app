import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { useEffect, useState } from "react";
import Student from "../../../classes/Student";
import StudentsTable from "../../../components/Tables/StudentsTable";
import { CreateStudentModal } from "../../../components/Modals/Student/CreateStudentModal";
import Admin from "../../../classes/Admin";
import {
  getSearchQueryParams,
  searchInObject,
} from "../../../components/forms/SearchForm";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export default function ManageStudents() {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const [students, setStudents] = useState("");
  const [schools, setSchools] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  if(userData.capabilities !== undefined && !userData.capabilities.manageStudents) {
    navigate('/app/404')
  }

  useEffect(() => {
    if (students === "" && userData.role === "Admin")
      Student.getAll(setStudents);
    if (students === "" && userData.role === "Escola")
      Student.getSchoolSudents(userData.id, setStudents);
    if (schools === "" && userData.role === "Admin")
      Admin.getAllByRole("escola", setSchools);

    if (students !== "" && search !== null && searched === false) {
      const filteredStudents = students.filter((student) =>
        searchInObject(student, search)
      );
      setStudents(filteredStudents);
      setSearched(true);
    }
  }, [userData, students, schools, search, searched]);

  if (students !== "") {
    return (
      <Row className="flex-column">
        <Col>
          <UserHeader pageTitle={"Estudantes"} />
        </Col>

        <Col id="admin-users--view">
          <Row className="justify-content-between pb-3">
            <Col style={{ textAlign: "right" }}>
              <CreateStudentModal
                schools={schools}
                user={{ role: userData.role, id: userData.id }}
              />
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
