import "./style.css";
import { Col, Row } from "react-bootstrap";
import ColumnOne from "./ColumnOne.js";
import ColumnTwo from "./ColumnTwo.js";
import { useNavigate } from "react-router-dom";
import { handleSubmit } from "./handles.js";
import { useEffect, useState } from "react";
import { useUserAuthContext } from "../../../context/UserAuthentication/index.js";

export default function DonationForm() {
  const { updateUserData } = useUserAuthContext();
  const navigate = useNavigate();
  const [columnOneValues, setColumnOneValues] = useState("");
  const [columnTwoValues, setColumnTwoValues] = useState("");
  const [liftValues, setLiftValues] = useState(false);

  useEffect(() => {
    if(columnOneValues !== "" && columnTwoValues !== "") {
      updateUserData([...columnOneValues, ...columnTwoValues]);
      setColumnOneValues("");
      setColumnTwoValues("");
    }
  }, [columnOneValues, columnTwoValues, updateUserData]);

  return (
    <form id="donation">
      <Row>
        <h4 className="px-2">Doação de dispositivo</h4>
        <Col sm={6} id="mascot" className="my-3"></Col>
        <Col sm={6} className="d-flex my-3">
          <Col sm={6} className="columnOne">
            <ColumnOne
              setValues={setColumnOneValues}
              liftValues={liftValues}
              setLiftValues={setLiftValues}
            />
          </Col>
          <Col sm={6} className="columnTwo">
            <ColumnTwo
              setValues={setColumnTwoValues}
              liftValues={liftValues}
              setLiftValues={setLiftValues}
            />
            <button
              type="button"
              className=""
              onClick={() =>
                handleSubmit(
                  navigate,
                  setLiftValues,
                  columnOneValues,
                  columnTwoValues
                )
              }
            >
              Próximo
            </button>
          </Col>
        </Col>
      </Row>
    </form>
  );
}
