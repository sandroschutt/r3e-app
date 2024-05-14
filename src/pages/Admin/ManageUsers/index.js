import "./style.scss";
import { UsersFilter } from "../../../components/Lists/Flters";
import { UserList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";

export default function ManageUsers() {
  return (
    <Row id="admin-users--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Usuários"} />
      </Col>
      <Col className="admin-users--filters">
        <UsersFilter />
      </Col>
      <Row className="admin-users--items ps-0">
        <Col className="admin-users--list col-5">
          <UserList />
        </Col>
        <Col className="ps-0 col-7">
          <AdminUsersPreview
            actions={["editar", "desativar", "excluir", "mensagem"]}
          >
            <ul>
              <li>
                <p>
                  <strong>Nome:</strong>Usuário Teste
                </p>
              </li>
              <li>
                <p>
                  <strong>Função:</strong>reciclador
                </p>
              </li>
              <li>
                <p>
                  <strong>Área:</strong>informática
                </p>
              </li>
              <li>
                <p>
                  <strong>Doc:</strong>CNPJ
                </p>
              </li>
              <li>
                <p>
                  <strong>Nº:</strong>00000000000
                </p>
              </li>
              <li>
                <p>
                  <strong>Data cad:</strong>26/08/2023
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  <strong>Rua:</strong>Avenida Teste da Silva
                </p>
              </li>
              <li>
                <p>
                  <strong>Cidade:</strong>São Teste
                </p>
              </li>
              <li>
                <p>
                  <strong>UF:</strong>SP
                </p>
              </li>
              <li>
                <p>
                  <strong>CEP:</strong>00000-000
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  <strong>E-mail secundário:</strong>email@teste.com
                </p>
              </li>
              <li>
                <p>
                  <strong>Celular:</strong>{"(15) 99999-9999"}
                </p>
              </li>
            </ul>
          </AdminUsersPreview>
        </Col>
      </Row>
    </Row>
  );
}
