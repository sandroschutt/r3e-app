import "./style.css";
import { useEffect, useState } from "react";
import { useUserAuthContext } from "../../../context/UserAuthentication";
import { useNavigate } from "react-router-dom";
import ValidateInputs from "../../../validations/Inputs";
import { checkAuthorizedEmail } from "../../../validations/clientAuthorization";

export default function ConfirmationForm() {
  const { userData, updateUserData } = useUserAuthContext();
  const [code, setCode] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [validateCode, setValidateCode] = useState("");
  const [resend, setResend] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkCode() {
      try {
        let codeCheck = await fetch(
          `http://localhost:9000/auth/confirmation?email=${userData.email}&code=${code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (codeCheck) {
          updateUserData({ ...userData, code: true });
          navigate("/auth/address");
        } else {
          alert("Seu código de confirmação está incorreto. Tente novamente.");
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function resendCode() {
      try {
        await fetch(
          `http://localhost:9000/auth/email?email=${encodeURIComponent(
            userData.email
          )}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        alert(
          "Enviamos um novo código para o e-mail informado. Não se esqueça de conferir a pasta de Lixo Eletrônico"
        );
      } catch (error) {
        console.log(error);
      }
    }

    if (!authorized) {
      checkAuthorizedEmail(userData, setAuthorized, navigate);
    }

    if (validateCode === true) {
      checkCode();
      setValidateCode(false);
    }

    if (resend === true) {
      resendCode();
      setResend(false);
    }
  }, [
    userData,
    updateUserData,
    authorized,
    code,
    validateCode,
    resend,
    navigate,
  ]);

  function handleCodeInput(event) {
    let codeValue = event.target.value;

    if (codeValue.length <= 6) {
      setCode(codeValue);
    }
  }

  function handleSubmit() {
    let isValidCode = ValidateInputs.registrationCode(code);

    if (isValidCode.valid) {
      setValidateCode(true);
    } else {
      setValidationMessage(isValidCode.message);
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
          <p className="validation-message" style={{ marginBottom: "16px" }}>
            {validationMessage}
          </p>
          <button type="button" onClick={() => handleSubmit()}>
            Próximo
          </button>
          <p className="text-center text-success mt-4 mb-0">
            Não recebeu o código?
            <br />
            <p
              className="resend-code text-primary"
              onClick={() => setResend(true)}
            >
              Clique aqui.
            </p>
          </p>
        </div>
      </form>
    </div>
  );
}
