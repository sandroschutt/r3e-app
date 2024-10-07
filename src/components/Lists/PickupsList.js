import { Accordion } from "react-bootstrap";
import dummyDeviceImage from "../../assets/images/motog2 1.jpg";
import { EditScheduleModal } from "../Modals/Schedule/EditScheduleModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

/**
 * A responsive dropdown list
 *
 * @prop {Array} schedules An array containing JSON objects
 */
export function PickupsList(props) {
  const navigate = useNavigate();

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
                  <div>
                    <img
                      src={dummyDeviceImage}
                      height={148}
                      className="rounded"
                    />
                  </div>
                  <div>
                    <p className="mb-1">
                      <strong>Cliente:</strong> {schedule.client.name}
                    </p>
                    <p className="mb-1">
                      <strong>Coletor:</strong> {schedule.vendor.name}
                    </p>
                    <p className="mb-1">
                      <strong>Pagamento:</strong>{" "}
                      <a href="#" onClick={() => navigate(`/user/payments?s=${schedule.id}`) }>{`#${schedule.paymentId}`}</a>
                    </p>
                    <p className="mb-1">
                      <strong>Status:</strong> {schedule.status}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => {
                      navigate(`/user/pickups/${schedule.id}`);
                    }}
                  />
                  <EditScheduleModal
                    schedule={schedule}
                    userRole={props.userRole}
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={() => {
                      alert("Cancelamento ainda não implementado")
                    }}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
}
