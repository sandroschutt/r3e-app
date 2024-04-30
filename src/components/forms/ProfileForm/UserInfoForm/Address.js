import { Col, Row } from "react-bootstrap";
// import { useUserAuthContext } from "../../../context/UserAuthenticationContext";
import { useEffect, useState } from "react";
import { handleInput } from "./handles";
import ValidateInputs from "../../../../validations/Inputs";

export default function Address() {
  // const { userData } = useUserAuthContext();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // useEffect(() => {
  //   if (zipcode === "" && userData.cep !== undefined) {
  //     setZipcode(userData.cep);
  //   }

  //   if (address === "" && zipcode !== "" && zipcode.length >= 8) {
  //     updateAddressValues();
  //   }

  //   if (zipcode.length < 8) {
  //     setAddress("");
  //   }

  //   async function updateAddressValues() {
  //     await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
  //       .then((data) => data.json())
  //       .then((data) => setAddress(data));
  //   }

  //   if (address !== "") {
  //     setStreet(address.logradouro);
  //     setState(address.uf);
  //     setCity(address.localidade);
  //   }
  // }, [userData, address, zipcode]);

  function handleZipcode(event = String) {
    let value = event.target.value;
    if (value.length <= 8) {
      setZipcode(value);
    }
  }

  return (
    <Col id="userAddress">
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
            onBlur={(event) => ValidateInputs.text(event)}
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
            onBlur={(event) => ValidateInputs.text(event)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <label htmlFor="state">Estado: *</label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(event) => handleInput(event, setState)}
            onBlur={(event) => ValidateInputs.text(event)}
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
            onBlur={(event) => ValidateInputs.text(event)}
          />
        </Col>
      </Row>
    </Col>
  );
}
