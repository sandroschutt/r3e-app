import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { DeleteUserModal } from "../Modals/User/DeleteUserModal";
import { useNavigate } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function UsersTable(props) {
  const users = props.users;
  const navigate = useNavigate();

  if (users !== "") {
    return (
      <Row className="admin-devices-table w-100">
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>Nome</th>
              <th>Função</th>
              <th>E-mail</th>
              <th>Cidade</th>
              <th>Status</th>
              <th>Online</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr
                  id={user.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.active === true ? "ativo" : "inativo"}</td>
                  <td>{user.online === true ? "sim" : "não"}</td>
                  <td className="d-flex justify-content-between align-items-center p-3">
                    <FontAwesomeIcon
                      className="action"
                      icon={faEye}
                      onClick={() => {
                        navigate(`/admin/users/${user.id}`);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      onClick={() => alert("Sets user s status to false")}
                    />
                    <DeleteUserModal userId={user.id} userName={user.name}/>
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
