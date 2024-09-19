import "./style.scss";
import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { ManageDeviceModal } from "../../Modals";

export default function SingleDeviceCard(props) {
  function renderButtons(role, device) {
    if (role !== "Client") {
      return (
        <>
          <Button
            className="me-2"
            variant="outline-success"
            onClick={() => {
              alert(
                "Send API request to create new pickup and redirect user there after creation"
              );
            }}
          >
            <FontAwesomeIcon icon={faTruck} />
            <span className="ms-1">Coletar</span>
          </Button>
          <Button
            className="me-2"
            variant="outline-success"
            onClick={() => {
              alert(
                "Opens modal with a user's contact info and optional message form"
              );
            }}
          >
            <FontAwesomeIcon icon={faMessage} />
            <span className="ms-1">Contato</span>
          </Button>
        </>
      );
    }
  }

  if (props.device !== "") {
    const device = props.device;

    return (
      <Row className="single-device--card">
        <Col className="col-3 ps-0">
          <img src={dummyDeviceImg} alt="" />
        </Col>
        <Col className="col-5">
          <div className="single-device--data">
            <h2>{`${device.brand.name} ${device.model.name} ${device.model.year}`}</h2>
            <p>
              <span>
                <strong>Marca:</strong>
              </span>{" "}
              <span>{device.brand.name}</span>
            </p>
            <p>
              <span>
                <strong>Ano:</strong>
              </span>{" "}
              <span>{device.model.year}</span>
            </p>
            <p>
              <span>
                <strong>Estado:</strong>
              </span>{" "}
              <span>{device.state}</span>
            </p>
            <p>
              <span>
                <strong>Uso:</strong>
              </span>{" "}
              <span>7 anos</span>
            </p>
            <p>
              <span>
                <strong>Tratativa:</strong>
              </span>{" "}
              <span>{device.returnProccess.name}</span>
            </p>

            <p>
              <span>
                <strong>Proprietário:</strong>
              </span>
              <span>{device.user.name}</span>
            </p>

            <div className="single-device--actions d-flex">
              {renderButtons(props.role, device)}
            </div>
          </div>
        </Col>
        <div className="single-device--edit d-flex align-items-top text-center">
            <ManageDeviceModal type={"edit"} device={device} />
        </div>
      </Row>
    );
  } else return <p>Aguardando dispositivo...</p>
}
