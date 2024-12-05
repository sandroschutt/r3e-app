import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validatePhones } from "../../validations/validatePhones";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditPickupLocationModal } from "../Modals/PickupLocations/EditPickupLocationModal";
import { DeletePickupLocationModal } from "../Modals/PickupLocations/DeletePickupLocationModal";
import { CreatePickupLocationModal } from "../Modals/PickupLocations/CreatePickupLocationModal";

/**
 * A responsive dropdown list
 *
 * @prop {Array} locations An array containing JSON objects
 */
export function PickupLocationsList(props) {
  const navigate = useNavigate();

  if (props.locations !== "")
    return (
      <>
        <CreatePickupLocationModal />
        <Accordion defaultActiveKey="0">
          {props.locations.map((location, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <div>
                    <div className="col col-6">
                      <p className="h5">{`#${location.id} - ${location.name}`}</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex gap-3 pb-4">
                    <div style={{fontSize: "1.1em"}} >
                      <p className="mb-2">
                        <strong>Estabelecimento:</strong> {location.business}
                      </p>
                      <p className="mb-2">
                        <strong>Phone:</strong> {validatePhones(location.phone)}
                      </p>
                      <p className="mb-2">
                        <strong>E-mail:</strong> {`${location.email}`}
                      </p>
                      <p className="mb-2">
                        <strong>CEP:</strong> {location.cep}
                      </p>
                      <p className="mb-2">
                        <strong>Número:</strong> {location.number}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => {
                        navigate(`/app/pickup-locations/${location.id}`);
                      }}
                    />
                    <EditPickupLocationModal location={location} />
                    <DeletePickupLocationModal id={location.id} />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </>
    );
}
