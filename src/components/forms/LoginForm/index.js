import "./style.css";
import ValidateInputs from "../../../validations/Inputs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handlePasswordVisibility() {
    if (passwordVisibility === false) {
      setPasswordVisibility(true);
    } else setPasswordVisibility(false);
  }

  function handleSubmit() {
    // validate all fields
    // send request to API login route
    // wait for response before any action
    console.log(ValidateInputs.password(password));
  }

  return (
    <div className="d-flex">
      <form id="loginForm">
        <h4>Login</h4>

        <div className="d-block m-4">
          <label htmlFor="username">Nome de usuário ou e-mail:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="seu@email.com"
            onChange={(event) => handleUsername(event)}
            onBlur={(event) => ValidateInputs.email(event)}
          />
          <label htmlFor="password">Senha:</label>
          <div className="password-input-container">
            <input
              type={passwordVisibility ? "text" : "password"}
              name="password"
              id="password"
              className="mb-0"
              value={password}
              onChange={(event) => handlePassword(event)}
              onBlur={(event) => ValidateInputs.text(event)}
            />
            <div id="icon">
              <FontAwesomeIcon
                icon={passwordVisibility ? faEyeSlash : faEye}
                onClick={() => handlePasswordVisibility()}
              />
            </div>
          </div>
          <button
            type="button"
            style={{ opacity: username !== "" && password !== "" ? "1" : ".5" }}
            onClick={() => handleSubmit()}
            disabled={username !== "" && password !== "" ? false : true}
          >
            Entrar
          </button>
          <p className="text-center text-success mt-4 mb-0">
            Ainda não tem uma conta?{" "}
            <a href="/auth/register" className="text-primary">
              Clique aqui.
            </a>
          </p>
          <p className="text-center text-primary">
            <a href="/#">Esqueceu a senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
