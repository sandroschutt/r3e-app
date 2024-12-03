import { Accordion } from "react-bootstrap";
import dummyDeviceImage from "../../assets/images/smartphone-placeholder.avif";
import { EditScheduleModal } from "../Modals/Schedule/EditScheduleModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleXmark,
  faEye,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../context/UserDataContext";
import Pickup from "../../classes/Pickup";
import Api from "../../classes/Api";

/**
 * A responsive dropdown list
 *
 * @prop {Array} schedules An array containing JSON objects
 */
export function PickupsList(props) {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();

  function handleScheduleRoleActions(schedule) {
    if (
      userData.role === "Cliente" &&
      schedule.accepted === null &&
      schedule.status === "não aceito"
    ) {
      return (
        <div className="d-flex gap-3">
          <button
            type="button"
            className="d-flex align-items-center gap-2 btn btn-outline-success"
            onClick={() => Pickup.accept(schedule.id)}
          >
            <FontAwesomeIcon icon={faTruck} />
            Aceitar
          </button>
          <button
            type="button"
            className="d-flex align-items-center gap-2 btn btn-outline-danger"
            onClick={() => Pickup.deny(schedule.id)}
          >
            Rejeitar
          </button>
        </div>
      );
    }

    if (
      (userData.role === "Empresa" || userData.role === "Ong") &&
      schedule.status === "aguardando-coleta"
    ) {
      return (
        <button
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={() => Pickup.colect(schedule.id)}
        >
          <FontAwesomeIcon icon={faCheck} />
          Coletado
        </button>
      );
    }
  }

  function handleDeviceImage(photo) {
    if (photo === null) {
      return <img src={dummyDeviceImage} height={148} className="rounded" />;
    } else {
      let deviceImage = Api.endpoint(`uploads/device/${photo}`);
      return <img src={deviceImage} height={148} className="rounded" />;
    }
  }

  function handleVendorActions(schedule) {
    if (userData.role === "Empresa" || userData.role === "Ong")
      return (
        <>
          <EditScheduleModal schedule={schedule} userRole={props.userRole} />
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => {
              alert("Cancelamento ainda não implementado");
            }}
          />
        </>
      );
  }

  if (props.schedules !== "")
    return (
      <Accordion defaultActiveKey="0">
        {props.schedules.map((schedule, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <p className="h6">{`${schedule.device.model.name} ${schedule.device.model.name}`}</p>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex gap-3 pb-4">
                  <div>{handleDeviceImage(schedule.device.photo)}</div>
                  <div>
                    <p className="mb-1">
                      <strong>Cliente:</strong> {schedule.client.name}
                    </p>
                    <p className="mb-1">
                      <strong>Coletor:</strong> {schedule.vendor.name}
                    </p>
                    <p className="mb-1">
                      <strong>Pagamento:</strong>{" "}
                      <a
                        href={`/app/payments/${schedule.paymentId}`}
                      >{`#${schedule.paymentId}`}</a>
                    </p>
                    <p className="mb-1">
                      <strong>Status:</strong> {schedule.status}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="col col-6">
                    {handleScheduleRoleActions({
                      id: schedule.id,
                      accepted: schedule.accepted,
                      status: schedule.status,
                    })}
                  </div>
                  <div className="d-flex col col-6 justify-content-end gap-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => {
                        navigate(`/app/pickups/${schedule.id}`);
                      }}
                    />
                    {handleVendorActions(schedule)}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
}
