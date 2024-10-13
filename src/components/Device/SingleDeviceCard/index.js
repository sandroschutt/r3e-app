import "./style.scss";
import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { EditDeviceModal } from "../../Modals/Device/EditDeviceModal";
import { DeleteDeviceModal } from "../../Modals/Device/DeleteDeviceModal";
import { useEffect, useState } from "react";
import Brands from "../../../classes/Brands";
import Models from "../../../classes/Models";
import { CreateScheduleModal } from "../../Modals/Schedule/CreateScheduleModal";
import { useUserDataContext } from "../../../context/UserDataContext";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";

export default function SingleDeviceCard(props) {
  const { userData } = useUserDataContext();
  const [brands, setBrands] = useState("");
  const [models, setModels] = useState("");

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);
    if (models === "") Models.getAll(setModels);
  }, []);

  function renderButtons(role, device) {
    if (userData.role === "Escola")
      return (
        <Button
          variant="outline-success"
          className="d-flex gap-2 align-items-center"
          onClick={() => {
            SchoolDeviceRequets.create(
              {
                schoolId: userData.id,
                deviceId: props.device.id,
              },
              userData.role
            );
          }}
        >
          <FontAwesomeIcon icon={faTruck} />
          Requisitar
        </Button>
      );

    if (role !== "Client" && role !== "Escola") {
      return (
        <div className="d-flex align-items-center gap-3">
          <CreateScheduleModal device={device} />
        </div>
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
          <EditDeviceModal device={device} models={models} brands={brands} />
          <DeleteDeviceModal deviceId={device.id} />
        </div>
      </Row>
    );
  } else return <p>Aguardando dispositivo...</p>;
}
