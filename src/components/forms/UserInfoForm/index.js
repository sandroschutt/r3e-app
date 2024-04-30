import "./style.css";
import Info from "./Info";
import Address from "./Address";
import ValidateInputs from "../../../validations/Inputs";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserAuthContext } from "../../../context/UserAuthenticationContext";
import { getFormValues, handleSubmissionEvaluation } from "./handles";
import { checkAuthorizedCode } from "../../../validations/clientAuthorization";
import { useNavigate } from "react-router-dom";

export default function UserInfoForm() {
  const { userData, updateUserData } = useUserAuthContext();
  const [authorized, setAuthorized] = useState(false);
  const [reqBody, setReqBody] = useState({});
  const [info, setInfo] = useState([]);
  const [address, setAddress] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const [termsAgreement, setTermsAgreement] = useState(false);

  useEffect(() => {
    if (!authorized) {
      checkAuthorizedCode(userData, setAuthorized, navigate);
    }

    async function createUser(reqBody) {
      try {
        fetch("http://localhost:9000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON response
          })
          .then((result) => {
            updateUserData({...userData, registered: true})
            navigate("/auth/registration-success")
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        setReqBody({});
      } catch (error) {
        console.log(error)
      }
    }

    if (reqBody.userInfo !== undefined) {
      createUser(reqBody);
    }
  }, [userData, updateUserData, authorized, reqBody, navigate]);

  function handleTermsAndConditions() {
    getFormValues(setInfo, setAddress);
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

    if (
      info[0] !== undefined &&
      info[0] !== "" &&
      address[0] !== undefined &&
      address[0] !== ""
    ) {
      if (isValidInfo.valid && isValidAddress.valid) {
        const userInfo = {
          name: info[0],
          email: info[1],
          phone: info[2],
          role: 2,
          accept_policy: termsAgreement,
        };

        const userAddress = {
          zipcode: address[0],
          street: address[1],
          state: address[2],
          city: address[3],
        };

        const userDocument = {
          documentNumber: info[3],
          type: info[4],
        };

        setReqBody({
          userInfo: userInfo,
          userAddress: userAddress,
          userDocument: userDocument,
        });
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
