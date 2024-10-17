import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Admin from "../../../classes/Admin";
import UsersTable from "../../../components/Tables/UsersTable";
import {
  getSearchQueryParams,
  searchInObject,
  SearchResults,
} from "../../../components/forms/SearchForm";
import { CreateUserModal } from "../../../components/Modals/User/CreateUserModal";

export default function ManageUsers() {
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (users === "") {
      Admin.getAllUsers(setUsers);
    }

    if (users !== "" && user === "") {
      setUser(users[0]);
    }

    if (users !== "" && search !== null && searched === false) {
      const filteredDevices = users.filter((user) =>
        searchInObject(user, search)
      );
      setUsers(filteredDevices);
      setSearched(true);
    }
  }, [users, user, search, searched]);

  if (users !== "")
    return (
      <Row id="admin-users--view" className="flex-column">
        <Col>
          <UserHeader pageTitle={"Usuários"} />
          <SearchResults search={search} />
        </Col>
        <Col className="admin-users--filters">
          <CreateUserModal />
          <UsersTable users={users} />
        </Col>
      </Row>
    );
}
