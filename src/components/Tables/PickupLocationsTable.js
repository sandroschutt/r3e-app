import { Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validatePhones } from "../../validations/validatePhones.js";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ViewPickupLocationModal } from "../Modals/PickupLocations/ViewPickupLocationModal.js";
import { EditPickupLocationModal } from "../Modals/PickupLocations/EditPickupLocationModal.js";
import { useEffect, useState } from "react";
import PickupLocation from "../../classes/PickupLocation.js";
import { DeletePickupLocationModal } from "../Modals/PickupLocations/DeletePickupLocationModal.js";

export default function PickupLocationsTable() {
  const [locations, setLocations] = useState("");

  useEffect(() => {
    if (locations === "") PickupLocation.getAll(setLocations);
  }, [locations]);

  if (locations !== "")
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <Button variant={"success"} className="col-2 my-2">
          Novo Local de Coleta +
        </Button>
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
            {locations.map((location, index) => {
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
                  <td>{location.user.name}</td>
                  <td>{location.business}</td>
                  <td>{validatePhones(location.phone)}</td>
                  <td>{location.email}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <ViewPickupLocationModal location={location} />
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
