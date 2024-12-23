import { useUserAuthContext } from "../../../context/UserAuthenticationContext";
import { useNavigate } from "react-router-dom";
import { createRef, useEffect, useState } from "react";
import { checkAuthorizedCode } from "../../../validations/clientAuthorization";
import InputMask from "react-input-mask";
import "./style.css";

export default function ZipcodeForm() {
  const { userData, updateUserData } = useUserAuthContext();
  const [zipcode, setZipcode] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const inputRef = createRef(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(!authorized) {
  //     checkAuthorizedCode(userData, setAuthorized, navigate);
  //   }
  // }, [userData, updateUserData, authorized, setAuthorized, navigate]);

  function handleUserZipcode(event) {
    let zipcodeValue = event.target.value;
    setZipcode(zipcodeValue);
  }

  function handleUserAddress() {
    try {
      let data = { ...userData, cep: zipcode };
      updateUserData(data);
      navigate("/auth/user-information");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="d-flex">
      <form id="zipcodeForm">
        <h4>CEP</h4>
        <p>Informe seu CEP para encontrarmos seu endereço automaticamente.</p>
        <div className="d-block m-4">
          <InputMask
            ref={inputRef}
            mask="99999-999"
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={(event) => handleUserZipcode(event)}
          />
          <button type="button" onClick={() => handleUserAddress()}>
            Próximo
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth/user-information")}
            className="later"
          >
            Deixa para depois
          </button>
          <p className="text-center text-success mt-4 mb-0">
            Não sabe seu CEP?
            <br />
            <a href="/auth/login" className="text-primary">
              Clique aqui.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
