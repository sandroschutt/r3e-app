import { Row } from "react-bootstrap";
import { validatePhones } from "../../validations/validatePhones.js";
import { EditPickupLocationModal } from "../Modals/PickupLocations/EditPickupLocationModal.js";
import { DeletePickupLocationModal } from "../Modals/PickupLocations/DeletePickupLocationModal.js";
import { CreatePickupLocationModal } from "../Modals/PickupLocations/CreatePickupLocationModal.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function PickupLocationsTable(props) {
  const navigate = useNavigate();

  if (props.locations !== "")
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <CreatePickupLocationModal />
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>Nome</th>
              <th>Empresa</th>
              <th>Estabelecimento</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.locations.map((location, index) => {
              return (
                <tr
                  id={location.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{location.id}</td>
                  <td>{location.name}</td>
                  <td><a href="#" onClick={(event) => {
                    event.preventDefault();
                    navigate(`/app/users/${location.userId}`);
                  }}>{location.user.name}</a></td>
                  <td>{location.business}</td>
                  <td>{validatePhones(location.phone)}</td>
                  <td>{location.email}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <FontAwesomeIcon icon={faEye} onClick={(event) => {
                      event.preventDefault();
                      navigate(`/app/pickup-locations/${location.id}`);
                    }}/>
                    <EditPickupLocationModal location={location} />
                    <DeletePickupLocationModal id={location.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
}
