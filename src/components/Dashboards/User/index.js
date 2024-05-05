import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import profileDummyAvatar from "../../../assets/images/r3d3_profile_avatar.png";

export default function UserDashboard() {
  return (
    <div className="user-dashboard-wrapper">
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
  );
}
