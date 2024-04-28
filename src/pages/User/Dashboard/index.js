import "./style.scss";
import MainNav from "../../../components/Navigation/MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPen } from "@fortawesome/free-solid-svg-icons";
import profileDummyAvatar from "./r3d3_profile_avatar.png";
import UserLayout from "../../../layout/UserLayout";

/**
 * Must have only the template and the view title
 */

export default function Dashboard() {
  return (
    <UserLayout view={{title: "Dashboard"}}>
      <div className="profile-view">
        <div className="user-card">
          <img src={profileDummyAvatar} />
          <div>
            <h2>Nome do Usuário</h2>
            <div className="card-text">
              <p>Role</p>
              <span>somemail@example.com</span>
            </div>
            <div className="card-text">
              <p>Editar perfil</p>
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </div>
        <div className="user-info">
          <div>
            <h3>Col</h3>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
          </div>
          <div>
            <h3>Col</h3>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
          </div>
          <div>
            <h3>Col</h3>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
            <p>
              <span className="key">Key:</span>
              <span>Value Lorem ipsum some</span>
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
