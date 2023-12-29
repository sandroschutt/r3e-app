import "./style.css";
import { useState } from "react";
import { useUserAuthContext } from "../../../context/UserAuthentication";
import { useNavigate } from "react-router-dom";
import ValidateInputs from "../../../validations/Inputs";

export default function ConfirmationForm() {
  const { userData } = useUserAuthContext();
  const [code, setCode] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  function handleCodeInput(event) {
    let codeValue = event.target.value;

    if (codeValue.length <= 6) {
      setCode(codeValue);
    }
  }

  function handleSubmit() {
    let isValidCode = ValidateInputs.registrationCode(code);
    
    if (isValidCode.valid) {
      // is valid && matches database stored value
      // API must return a boolean on request
      navigate("/auth/address")
    } else {
      setValidationMessage(isValidCode.message)
    }
  }

  return (
    <div className="d-flex">
      <form id="confirmationForm">
        <h4>Confirmação</h4>
        <p>
          Enviamos uma mensagem com o código de confirmação para{" "}
          <b>{userData.email}</b>. Caso não encontre o e-mail na caixa de
          entrada, procure na caixa de spam.
        </p>
        <div className="d-block m-4">
          <label htmlFor="confirmation">Código de confirmação:</label>
          <input
            type="text"
            pattern="\d"
            name="confirmation"
            id="confirmation"
            value={code}
            onChange={(event) => handleCodeInput(event)}
          />
          <p className="validation-message" style={{marginBottom: "16px"}}>{validationMessage}</p>
          <button type="button" onClick={() => handleSubmit()}>
            Próximo
          </button>
          <p className="text-center text-success mt-4 mb-0">
            Não recebeu o código?
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
