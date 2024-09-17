import "./style.scss";
import { UsersFilter } from "../../../components/Lists/Flters";
import { UserList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";
import UserHeader from "../../../components/UserHeader";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Admin } from "../../../classes/Admin";
import { AddNewUserModal } from "../../../components/Modals";

export default function ManageUsers() {
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (users === "") {
      Admin.getAllUsers(setUsers);
    }

    if (users !== "" && user === "") {
      setUser(users[0]);
    }
  }, [users, user]);

  return (
    <Row id="admin-users--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Usuários"} />
      </Col>
      <Col className="admin-users--filters">
        <Row className="justify-content-between pb-3">
          <Col>
            <UsersFilter />
          </Col>
          <Col style={{textAlign: "right"}}>
            <AddNewUserModal />
          </Col>
        </Row>
      </Col>
      <Row className="admin-users--items ps-0">
        <Col className="admin-users--list col-5">
          <UserList users={users} setUser={setUser} />
        </Col>
        <Col className="ps-0 col-7">
          <AdminUsersPreview
            user={user}
            users={"users"}
            actions={["ver", "editar", "desativar", "excluir", "mensagem"]}
          />
        </Col>
      </Row>
    </Row>
  );
}
