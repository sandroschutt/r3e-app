import "./style.scss";
import SearchForm from "../../../components/forms/SearchForm";
import { UsersFilter } from "../../../components/Lists/Flters";
import { UserList } from "../../../components/Lists";
import { AdminUsersPreview } from "../../../components/Previews";

export default function ManageUsers() {
  return (
    <>
      <header className="view-header">
        <h1 className="view-title">Users</h1>
        <SearchForm />
      </header>
      <div id="admin-users--view">
        <div className="admin-users--filters">
          <UsersFilter />
        </div>
        <div className="admin-users--items">
          <div className="admin-users--list">
            <UserList />
          </div>
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
        </div>
      </div>
    </>
  );
}
