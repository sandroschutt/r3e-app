import { Accordion, Button } from "react-bootstrap";
import dummyDeviceImage from "../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { EditDeviceModal } from "../Modals/Device/EditDeviceModal";
import { DeleteDeviceModal } from "../Modals/Device/DeleteDeviceModal";
import { useNavigate } from "react-router-dom";
import { CreateScheduleModal } from "../Modals/Schedule/CreateScheduleModal";
import { useUserDataContext } from "../../context/UserDataContext";
import SchoolDeviceRequets from "../../classes/SchoolDeviceRequests";

export function DeviceAccordionItems(props) {
  const { userData } = useUserDataContext();
  const device = props.device;
  const navigate = useNavigate();

  function handleSchoolDeviceRequestButton(schoolId, deviceId, userRole) {
    if (userData.role === "Escola")
      return (
        <Button
          variant="success"
          onClick={() => {
            SchoolDeviceRequets.create({
              schoolId: schoolId,
              deviceId: deviceId,
            }, userRole);
          }}
        >
          Requisitar
        </Button>
      );
  }

  return (
    <Accordion.Item eventKey={props.index}>
      <Accordion.Header>
        <p className="h6">{`${device.brand.name} ${device.model.name}`}</p>
      </Accordion.Header>
      <Accordion.Body>
        <div className="d-flex gap-3 pb-4">
          <div>
            <img src={dummyDeviceImage} height={148} className="rounded" />
          </div>
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
        <div className="d-flex justify-between">
          <div className="col col-6">
            {handleSchoolDeviceRequestButton(userData.id, device.id, userData.role)}
            <CreateScheduleModal device={device} />
          </div>
          <div className="d-flex col col-6 justify-content-end gap-3 align-items-center">
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => {
                navigate(`/user/devices/${device.id}`);
              }}
            />
            <EditDeviceModal
              device={device}
              brands={props.brands}
              models={props.models}
            />
            <DeleteDeviceModal deviceId={device.id} />
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
