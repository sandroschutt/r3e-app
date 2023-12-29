import { Col, Row } from "react-bootstrap";
import { useUserAuthContext } from "../../../context/UserAuthentication";
import { useEffect, useState } from "react";
import ValidateInputs from "../../../validations/Inputs";
import { handleInput } from "./handles";

export default function Info(props) {
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

  //   criar validações para rg e cpf e números
  function handleUserInfo(event) {
    if (
      (event.target.value === "" && event.target.name === "phone") ||
      (event.target.value === "" && event.target.name === "docValue")
    ) {
      defineInfo([]);
    }

    try {
      ValidateInputs.text(event);
      let isValidInfo = ValidateInputs.formData([
        name,
        email,
        phone,
        docType,
        docValue,
      ]);

      if (isValidInfo.valid) {
        defineInfo([name, email, phone, docType, docValue]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function defineInfo(info) {
    props.setInfo(info);
  }

  return (
    <Col>
      <h4 className="px-2">Suas informações</h4>
      <div className="d-block px-2">
        <label htmlFor="name">Nome: *</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => handleInput(event, setName)}
          onBlur={(event) => handleUserInfo(event)}
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
            onBlur={(event) => handleUserInfo(event)}
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
            onBlur={(event) => handleUserInfo(event, setPhone)}
            maxLength={11}
            required
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <label htmlFor="doctype">Documento: *</label>
          <select value={docType} onChange={(event) => handleDocType(event)}>
            <option value="rg" key="rg">
              --RG
            </option>
            <option value="cpf" key="cpf">
              --CPF
            </option>
          </select>
        </Col>
        <Col>
          <label htmlFor="docValue">Nº Documento: *</label>
          <input
            type="text"
            name="docValue"
            id="docValue"
            value={docValue}
            onChange={(event) => handleInput(event, setDocValue)}
            onBlur={(event) => handleUserInfo(event, setDocValue)}
            maxLength={docLength}
            required
          />
        </Col>
      </Row>
    </Col>
  );
}
