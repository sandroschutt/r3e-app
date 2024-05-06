import "./style.scss";
import SearchForm from "../../../components/forms/SearchForm";
import { StudentsFilter } from "../../../components/Lists/Flters";
import { StudentsList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";

export default function ManageStudents() {
  return (
    <>
      <header className="view-header">
        <h1 className="view-title">Students</h1>
        <SearchForm />
      </header>

      <div id="admin-users--view">
        <div className="admin-users--filters">
          <StudentsFilter />
        </div>
        <div className="admin-users--items">
          <div className="admin-users--list">
            <StudentsList />
          </div>
          <AdminUsersPreview
            users={"student"}
            actions={["aprovar", "reprovar", "contemplar", "mensagem"]}
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
        </div>
      </div>
    </>
  );
}
