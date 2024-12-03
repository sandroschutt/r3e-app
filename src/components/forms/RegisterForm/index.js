import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ValidateInputs from "../../../validations/Inputs";
import { useUserAuthContext } from "../../../context/UserAuthenticationContext";
import { useNavigate } from "react-router-dom";
import Api from "../../../classes/Api";

export default function RegisterForm() {
  const { userData, updateUserData } = useUserAuthContext();
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function handleApiCall() {
  //     axios
  //       .get(Api.endpoint(`auth/email?email=${encodeURIComponent(email)}`))
  //       .then((response) => {
  //         if (response.status !== 200)
  //           throw new Error("Failed to initiate verification email");
  //         console.log("Verification email initiated successfully");
  //         navigate("/auth/address");
  //       })
  //       .catch((error) => {
  //         setValidationMessage(`O email ${email} já está cadastrado`);
  //         console.log(error);
  //       });
  //   }

  //   if (userData.email !== "" && userData.email !== undefined) {
  //     handleApiCall();
  //   }
  // }, [email, userData, updateUserData, navigate]);

  function handleSubmit() {
    let isValidEmail = ValidateInputs.registrationEmail([
      email,
      emailConfirmation,
    ]);

    if (isValidEmail.valid === true) {
      updateUserData({ email: email });
      navigate("/auth/address");
    } else {
      setValidationMessage(isValidEmail.message);
    }
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleEmailConfirmation(event) {
    setEmailConfirmation(event.target.value);
  }

  return (
    <div className="d-flex">
      <form id="registerForm">
        <h4>Cadastro</h4>

        <div className="d-block m-4">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="seu@email.com"
            onChange={(event) => handleEmail(event)}
          />
          <label htmlFor="password">Confirme seu e-mail:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={emailConfirmation}
            onChange={(event) => handleEmailConfirmation(event)}
          />
          <p className="validation-message">{validationMessage}</p>
          <button
            type="button"
            id="submitButton"
            onClick={() => handleSubmit()}
          >
            Próximo
          </button>
          <p className="text-center text-success mt-4 mb-0">
            Já tem uma conta?
            <a href="/auth/login" className="text-primary">
              Clique aqui.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
