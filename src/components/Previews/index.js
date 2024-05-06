import "./style.scss";
import DummyAvatarImage from "../../assets/images/r3d3_profile_avatar.png";

export function AdminUsersPreview(props) {
  return (
    <div className="admin-users--preview">
      <div className="admin-users--preview--header">
        <img src={DummyAvatarImage} alt="" />
        <div>
          <h3>Nome de Usuário</h3>
          <p>
            <strong>Cliente</strong>email@usuario.com
          </p>
        </div>
      </div>
      <div className="admin-users-preview--children">{props.children}</div>
      <div className="admin-users--preview--actions">
        {props.actions.map((action) => {
          return (
            <button className="admin-users--preview--actions--item">
              {action}
            </button>
          );
        })}
      </div>
    </div>
  );
}
