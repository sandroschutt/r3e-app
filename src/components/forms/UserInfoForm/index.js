import "./style.css";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useUserAuthContext } from "../../../context/UserAuthentication";
// import { useNavigate } from "react-router-dom";
import Info from "./Info";
import Address from "./Address";
import ValidateInputs from "../../../validations/Inputs";
import { getFormValues, handleSubmissionEvaluation } from "./handles";

export default function UserInfoForm() {
  const { updateUserData } = useUserAuthContext();
  const [info, setInfo] = useState([]);
  const [address, setAddress] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const navigate = useNavigate();

  const [termsAgreement, setTermsAgreement] = useState(false);

  function handleTermsAndConditions() {
    getFormValues(setInfo, setAddress);
    console.log(info, address);
    if (isButtonDisabled === true) {
      setTermsAgreement(true);
      setIsButtonDisabled(false);
      document.querySelector("#submit-button").style.opacity = "1";
    } else {
      setTermsAgreement(false);
      setIsButtonDisabled(true);
      document.querySelector("#submit-button").style.opacity = ".5";
    }
  }

  function handleSubmit() {
    let isValidInfo = ValidateInputs.formData([info]);
    let isValidAddress = ValidateInputs.formData([address]);

    handleSubmissionEvaluation();
    getFormValues(setInfo, setAddress);

    console.log(info, address);

    if (
      (info[0] !== undefined && info[0] !== "") &&
      (address[0] !== undefined && address[0] !== "")
    ) {
      if (isValidInfo.valid && isValidAddress.valid) {
        updateUserData([...info, ...address, termsAgreement]);
        // ESPERAR CONFIRMAÇÃO DO SERVIDOR ANTES DE REDIRECIONAR
        // navigate("/auth/registration-success");
      } else {
        alert(ValidateInputs.formData([...info, ...address]).message);
      }
    } else {
      alert(isValidInfo.message);
      ValidateInputs.allSubmitedInputs(document.querySelectorAll("input"));
    }
  }

  return (
    <div className="d-flex">
      <form id="userInfoForm">
        <Row>
          <Info />
          <Address />
        </Row>

        <Row className="d-flex justify-content-between px-2">
          <Col sm={12} lg={6}>
            <p className="text-start">
              <span>
                <input
                  type="checkbox"
                  className="mb-0"
                  style={{ width: "6%" }}
                  onChange={() => handleTermsAndConditions()}
                />
              </span>
              Confirmo que li e concordo com os{" "}
              <a href="/#">termos de serviço</a> e a
              <a href="/#">política de privacidade</a>.
            </p>
          </Col>
          <Col sm={12} lg={2}>
            <button
              type="button"
              id="submit-button"
              onClick={() => handleSubmit()}
              disabled={isButtonDisabled}
            >
              Finalizar
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
}
