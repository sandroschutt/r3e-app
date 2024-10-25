import "./style.scss";
import { SingleReturnProcess } from "./OptionSelectors";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReturnProcess from "../../../classes/ReturnProcess";
import { AdminAddReturnProcessModal } from "../../../components/Modals";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export default function ManageReturnProcess() {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const [returnProcesses, setReturnProcesses] = useState("");

  if (
    userData.capabilities !== undefined &&
    !userData.capabilities.manageReturnProccess
  ) {
    navigate(`/app/404`);
  }

  useEffect(() => {
    if (returnProcesses === "") {
      ReturnProcess.getAll(setReturnProcesses);
    }
  }, [returnProcesses]);

  if (returnProcesses !== "") {
    return (
      <Row>
        <Row className="mb-5 ps-0 justify-content-between">
          <Col>
            <h1>Trativas de Retorno</h1>
          </Col>
          <Col className="col-2">
            <AdminAddReturnProcessModal />
          </Col>
        </Row>
        <Row className="manage-return-categories--view w-100 gap-5">
          {returnProcesses.map((returnProcess, index) => {
            return (
              <Col
                key={index}
                className="manage-return-categories--category col-5 col-xs-12 p-5 border"
              >
                <h2>
                  {returnProcess.finality.charAt(0).toUpperCase() +
                    returnProcess.finality.slice(1) +
                    ":"}
                </h2>
                <hr className="mt-5 mb-3" />
                <SingleReturnProcess returnProcess={returnProcess} />
              </Col>
            );
          })}
        </Row>
      </Row>
    );
  }
}
