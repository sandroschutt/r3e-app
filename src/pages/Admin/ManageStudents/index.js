import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { StudentsFilter } from "../../../components/Lists/Flters";
import { StudentsList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";

export default function ManageStudents() {
  return (
    <Row className="flex-column">
      <Col>
        <UserHeader pageTitle={"Estudantes"} />
      </Col>

      <Col id="admin-users--view">
        <div className="admin-users--filters">
          <StudentsFilter />
        </div>
        <Row className="admin-users--items">
          <Col className="admin-users--list ps-0 col-4">
            <StudentsList />
          </Col>
          <Col className="ps-0">
            <AdminUsersPreview
              users={"student"}
              actions={["Aprovar", "Reprovar", "Contemplar", "Mensagem"]}
            >
              <div>
                <ul>
                  <li>
                    <p>
                      <strong>Escola:</strong>Escola Exemplo
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Frequência:</strong>96.5%
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>CR:</strong>8.8
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <p>
                      <strong>Idade:</strong>15
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Doc:</strong>RG
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
              </div>

              <div>
                <ul>
                  <li>
                    <p>
                      <strong>Família:</strong>6 pessoas
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Renda familiar:</strong>3SM
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
              </div>

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
      </Col>
    </Row>
  );
}
