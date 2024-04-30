import "./style.scss";
// import { useState } from "react";
import DummyProfileImage from "../../../../assets/images/r3d3_profile_avatar.png";

export default function BasicInfoForm() {
  // const [profileImage, setProfileImage] = useState("");

  return (
    <div className="profile--basic-info--form">
      <div className="profile--picture">
        <div className="profile--picture--wrapper">
          <img src={DummyProfileImage} alt="" />
        </div>
        <div className="profile--picture--actions">
          <p>Alterar</p>
          <p>Remover</p>
        </div>
      </div>

      <form>
        <p>
          <label htmlFor="user-name">Nome de usuário:</label>
          <input type="text" name="user-name" placeholder="Current User" />
        </p>
        <p>
          <label htmlFor="user-role">Função:</label>
          <input type="text" name="user-role" placeholder="CLIENT" disabled />
        </p>
      </form>
    </div>
  );
}
