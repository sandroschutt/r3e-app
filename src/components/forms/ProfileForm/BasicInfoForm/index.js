import "./style.scss";
// import { useState } from "react";
import DummyProfileImage from "../../../../assets/images/r3d3_profile_avatar.png";
import { Row } from "react-bootstrap";

export default function BasicInfoForm() {
  // const [profileImage, setProfileImage] = useState("");

  return (
    <Row id="profile--basic-info--form" className="flex-column">
      <div className="profile--picture d-flex flex-column align-items-center">
        <div className="profile--picture--wrapper">
          <img src={DummyProfileImage} alt="" width="136" height="136"/>
        </div>
        <div className="profile--picture--actions d-flex">
          <p className="mx-1 custom-color">Alterar</p>
          <p className="mx-1 custom-color">Remover</p>
        </div>
      </div>

      <form className="px-0">
        <p>
          <label htmlFor="user-name" className="custom-color mt-0 mb-1">Nome de usuário:</label>
          <input type="text" name="user-name" className="custom-color mb-0 " placeholder="Current User" />
        </p>
        <p>
          <label htmlFor="user-role" className="custom-color mt-0 mb-1">Função:</label>
          <input type="text" name="user-role" className="custom-color mt-0 mb-0" placeholder="CLIENT" disabled />
        </p>
      </form>
    </Row>
  );
}
