import { Col, Row } from "react-bootstrap";
import { useUserAuthContext } from "../../../context/UserAuthentication";
import { useEffect, useState } from "react";
import ValidateInputs from "../../../validations/Inputs";
import { handleInput } from "./handles";

export default function Address(props) {
  const { userData } = useUserAuthContext();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (zipcode === "" && userData.cep !== undefined) {
      setZipcode(userData.cep);
    }

    if (address === "" && zipcode !== "" && zipcode.length >= 8) {
      updateAddressValues();
    }

    if (zipcode.length < 8) {
      setAddress("");
    }

    async function updateAddressValues() {
      await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        .then((data) => data.json())
        .then((data) => setAddress(data));
    }

    if (address !== "") {
      setStreet(address.logradouro);
      setState(address.uf);
      setCity(address.localidade);
    }
  }, [userData, address, zipcode]);

  function handleZipcode(event = String) {
    let value = event.target.value;
    if (value.length <= 8) {
      setZipcode(value);
    }
  }

  function handleUserAddress(event) {
    if (event.target.value === "" || ValidateInputs.text(event)) {
        props.setAddress([]);
    }

    try {
      if (
        ValidateInputs.formData([zipcode, street, state, city]).valid
      ) {
        props.setAddress([zipcode, street, state, city]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Col>
      <h4 className="px-2">Endereço</h4>
      <Row>
        <Col sm={12} lg={6}>
          <label htmlFor="zipcode">Cep: *</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={zipcode}
            onChange={(event) => handleZipcode(event)}
            onBlur={(event) => handleUserAddress(event)}
            maxLength={9}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <label htmlFor="street">Rua: *</label>
          <input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={(event) => handleInput(event, setStreet)}
            onBlur={(event) => handleUserAddress(event)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <label htmlFor="state">Estado: *</label>
          <input
            type="text"
            value={state}
            onChange={(event) => handleInput(event, setState)}
            onBlur={(event) => handleUserAddress(event)}
            maxLength={2}
          />
        </Col>
        <Col>
          <label htmlFor="city">Cidade: *</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(event) => handleInput(event, setCity)}
            onBlur={(event) => handleUserAddress(event)}
          />
        </Col>
      </Row>
    </Col>
  );
}
