import "./style.css";
import mascot from "./r3d3_green_outline.png";
import { Row } from "react-bootstrap";
import { useUserAuthContext } from "../../context/UserAuthenticationContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterSuccess() {
  const {userData} = useUserAuthContext();
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!registered && userData.registered === true) {
      setRegistered(true)
    } else if(registered) {
      setTimeout(() => {
        navigate("/auth/login")
      }, 5000)
    } else {
      navigate("/404")
    }
  },[registered, userData, navigate])

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
