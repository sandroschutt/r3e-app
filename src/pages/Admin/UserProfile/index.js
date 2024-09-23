import "./style.scss";
import { useEffect, useState } from "react";
import { Admin } from "../../../classes/Admin";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import UserProfileForm from "../../../components/forms/UserProfileForm";
import { useNavigate } from "react-router-dom";
import { validateDate } from "../../../validations/validateDate";
import User from "../../../classes/User";
import { useUserDataContext } from "../../../context/UserDataContext";

export default function UserProfile() {
  const { userData } = useUserDataContext();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const pathname = window.location.pathname.split("/");
  const id = pathname[pathname.length - 1];
  let optionsCards = [
    ["Coletas", `pickups`, "Ver todas as coletas do usuário"],
    ["Dispositivos", `devices`, "Ver todos os dispositivos do usuário"],
  ];

  useEffect(() => {
    if (user === "") {
      Admin.getSingleUser(id, setUser);
    }
  }, [user, id]);

  function handleUserDeletion() {
    new User(id).delete();
    userData.role === "Admin"
      ? (window.location.href = "/admin/users")
      : (window.location.href = window.location.origin);
    return;
  }

  if (user !== "") {
    if (
      (user.role.toLowerCase() === "empresa" ||
        user.role.toLowerCase() === "ong") &&
      optionsCards.length <= 2
    ) {
      optionsCards.push([
        "Pontos de coleta",
        `/admin/pickup-locations`,
        "Ver todos os pontos de coleta do usuário",
      ]);
    }
    return (
      <Row id="admin--single-user--view" className="flex-column">
        <Col>
          <UserHeader pageTitle={"Usuário"} />
        </Col>
        <Col>
          <Row>
            <Col className="option-cards col-4 px-0">
              {optionsCards.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="option-card p-3"
                    onClick={() => {
                      navigate(`${option[1]}?name=${user.name}`);
                    }}
                  >
                    <h4>{option[0]}</h4>
                    <p className="mb-0">{option[2]}</p>
                  </div>
                );
              })}
              <Row className="user-data--overview px-2 py-4">
                <h5>Overview</h5>
                <hr className="mb-4 text-secondary" />
                <ul>
                  <li>
                    <strong
                      className={
                        user.online === true ? "text-success" : "text-danger"
                      }
                    >
                      {user.online === true ? "Online" : "Offline"}
                    </strong>
                  </li>
                  <li>
                    <strong>Status:</strong>{" "}
                    {user.active === true ? "ativo" : "inativo"}
                  </li>
                  <li>
                    <strong>Função:</strong> {user.role.toLowerCase()}
                  </li>
                  <li>
                    <strong>Coletas:</strong> 56
                  </li>
                  <li>
                    <strong>Dispositivos:</strong> 64
                  </li>
                  <li>
                    <strong>Advertências:</strong> {user.strikes}
                  </li>
                  <li>
                    <strong>Data de cadastro:</strong>{" "}
                    {validateDate(user.createdAt)}
                  </li>
                  <li>
                    <strong>Último acesso</strong>{" "}
                    {validateDate(user.lastLogin)}
                  </li>
                </ul>
              </Row>
              <div className="delete-user">
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    className="delete-user--accordion"
                  >
                    <Accordion.Header>
                      <span>Exportar dados</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Tenha uma cópia dos dados com apenas um clique. Incluí:
                        informações de contato, endereço, documento, coletas e
                        dispositivos de clientes.
                      </p>

                      <p>
                        Para funções como empresas e escolas, também são
                        exportados os dados de pontos de coleta e alunos.
                      </p>
                      <Button variant="primary">Exportar</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className="delete-user--accordion"
                  >
                    <Accordion.Header>
                      <span className="text-secondary">Desativar conta</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Ao desativar um usuário, seus dados ainda ficarão no
                        sistema do R3E, mas seu perfil e dispositivos não serão
                        exibidos em listas e mapas públicos. O usuário também
                        perderá acesso ao sistema, podendo reativar sua conta se
                        efetuar um novo login.
                      </p>
                      <Button variant="secondary">Desativar</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className="delete-user--accordion"
                  >
                    <Accordion.Header>
                      <span className="text-danger">Deletar conta</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Deletar um usuário irá remover seu acesso ao sistema e
                        todos os seus registros. Uma cópia anonimizada de
                        registros de dispositivos permanecerá no sistema para
                        fins estatísticos.
                      </p>
                      <Button
                        variant="danger"
                        onClick={() => handleUserDeletion()}
                      >
                        Deletar
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col className="user-profile">
              <Row className="user-form">
                <UserProfileForm user={user} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
