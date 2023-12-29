import "./style.css";
import mascot from "./r3d3_green_outline.png";
import { Row } from "react-bootstrap";
import { useUserAuthContext } from "../../context/UserAuthentication";

export default function RegisterSuccess() {
  const {userData} = useUserAuthContext();
  console.log(userData)
  return (
    <div className="register-success">
      <Row className="d-flex justify-content-center">
        <h1 className="text-center my-5">Registro concluído!</h1>
        <img src={mascot} alt="" />
        <p className="text-center">
          Terminamos seu cadastro! Agora você pode doar aquele eletrônico que
          fica entulhando sua casa. Você pode acessar sua conta clicando aqui.
        </p>
      </Row>
    </div>
  );
}
