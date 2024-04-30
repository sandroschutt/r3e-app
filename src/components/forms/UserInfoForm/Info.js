import { Col, Row } from "react-bootstrap";
import { useUserAuthContext } from "../../../context/UserAuthenticationContext";
import { useEffect, useState } from "react";
import { handleInput } from "./handles";
import ValidateInputs from "../../../validations/Inputs";

export default function Info() {
  const { userData } = useUserAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [docType, setDocType] = useState("rg");
  const [docValue, setDocValue] = useState("");
  const [docLength, setDocLenght] = useState(9);

  useEffect(() => {
    if (userData.email !== undefined) {
      setEmail(userData.email);
    }
  }, [userData, email]);

  function handleDocType(event = String) {
    let value = event.target.value;
    setDocType(value);

    if (value === "rg") {
      setDocLenght(9);
    } else {
      setDocLenght(12);
    }
  }

  return (
    <Col id="userInfo">
      <h4 className="px-2">Suas informações</h4>
      <div className="d-block px-2">
        <label htmlFor="name">Nome: *</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => handleInput(event, setName)}
          onBlur={(event) => ValidateInputs.text(event)}
        />
      </div>

      <Row>
        <Col>
          <label htmlFor="email">E-mail: *</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => handleInput(event, setEmail)}
            onBlur={(event) => ValidateInputs.text(event)}

          />
        </Col>
        <Col>
          <label htmlFor="phone">Celular: *</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) => handleInput(event, setPhone)}
            onBlur={(event) => ValidateInputs.text(event)}
            maxLength={11}
            required
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <label htmlFor="doctype">Documento: *</label>
          <select value={docType} name="doctype" onChange={(event) => handleDocType(event)}>
            <option value="rg" key="rg">
              --RG
            </option>
            <option value="cpf" key="cpf">
              --CPF
            </option>
          </select>
        </Col>
        <Col>
          <label htmlFor="docvalue">Nº Documento: *</label>
          <input
            type="text"
            name="docvalue"
            id="docValue"
            value={docValue}
            onChange={(event) => handleInput(event, setDocValue)}
            onBlur={(event) => ValidateInputs.text(event)}
            maxLength={docLength}
            required
          />
        </Col>
      </Row>
    </Col>
  );
}
