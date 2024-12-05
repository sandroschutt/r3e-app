import { Accordion, Button } from "react-bootstrap";
import dummyDeviceImage from "../../assets/images/smartphone-placeholder.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { DeleteDeviceModal } from "../Modals/Device/DeleteDeviceModal";
import { useNavigate } from "react-router-dom";
import { CreateScheduleModal } from "../Modals/Schedule/CreateScheduleModal";
import { useUserDataContext } from "../../context/UserDataContext";
import Api from "../../classes/Api";
import { CreateSchoolDeviceRequestModal } from "../Modals/Schedule/CreateSchoolDeviceRequestModal";

export function DeviceAccordionItems(props) {
  const { userData } = useUserDataContext();
  const deviceImage = Api.endpoint(`uploads/device/${props.device.photo}`);
  const device = props.device;
  const navigate = useNavigate();

  function handleSchoolDeviceRequestButton() {
    if (userData.role === "Escola")
      return (
        <CreateSchoolDeviceRequestModal
          deviceId={device.id}
          schoolId={userData.id}
        />
      );
  }

  function handleDeviceImage() {
    if (props.device.photo !== null) {
      return <img src={deviceImage} height={148} className="rounded" />;
    } else
      return <img src={dummyDeviceImage} height={148} className="rounded" />;
  }

  function handleClientDeleteDevice() {
    if (userData.role === "Cliente")
      return <DeleteDeviceModal deviceId={device.id} role={userData.role} />;
  }

  function handleClientDeviceActions(role) {
    if (role === "Cliente" || role === "Escola")
      return (
        <div className="d-flex justify-between">
          <div className="col col-6">
            {handleSchoolDeviceRequestButton()}
            <CreateScheduleModal device={device} />
          </div>
          <div className="d-flex col col-6 justify-content-end gap-3 align-items-center">
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => {
                navigate(`/app/devices/${device.id}`);
              }}
            />
            { handleClientDeleteDevice() }
          </div>
        </div>
      );

    return (
      <div className="d-flex justify-content-end">
        <div className="justify-content-end align-items-center">
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => {
              navigate(`/app/devices/${device.id}`);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <Accordion.Item eventKey={props.index}>
      <Accordion.Header>
        <p className="h6">{`${device.brand.name} ${device.model.name}`}</p>
      </Accordion.Header>
      <Accordion.Body>
        <div className="d-flex gap-3 pb-4">
          <div>{handleDeviceImage()}</div>
          <div>
            <p className="mb-1">
              <strong>Marca:</strong> {device.brand.name}
            </p>
            <p className="mb-1">
              <strong>Ano:</strong> {device.model.year}
            </p>
            <p className="mb-1">
              <strong>Estado:</strong> {device.state}
            </p>
            <p className="mb-1">
              <strong>Proprietário:</strong> {device.user.name}
            </p>
            <p className="mb-1">
              <strong>Endereço:</strong>{" "}
              {`${device.user.address.street}, ${device.user.address.neighborhood}`}
            </p>
          </div>
        </div>
        {handleClientDeviceActions(userData.role)}
      </Accordion.Body>
    </Accordion.Item>
  );
}
