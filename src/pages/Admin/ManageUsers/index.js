import "./style.scss";
import { UsersFilter } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Admin from "../../../classes/Admin";
import { NewUserModal } from "../../../components/Modals";
import UsersTable from "../../../components/Tables/UsersTable";

export default function ManageUsers() {
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (users === "") {
      Admin.getAllUsers(setUsers);
    }

    if(users !== "" && user === "") {
      setUser(users[0])
    }
  }, [users, user]);

  if(users !== "") return (
    <Row id="admin-users--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Usuários"} />
      </Col>
      <Col className="admin-users--filters">
          <Col>
            <UsersFilter />
          </Col>
          <Col>
            <NewUserModal />
            <UsersTable users={users} />
          </Col>
      </Col>
    </Row>
  );
}
