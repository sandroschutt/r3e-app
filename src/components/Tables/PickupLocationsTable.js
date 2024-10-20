import { Row } from "react-bootstrap";
import { validatePhones } from "../../validations/validatePhones.js";
import { ViewPickupLocationModal } from "../Modals/PickupLocations/ViewPickupLocationModal.js";
import { EditPickupLocationModal } from "../Modals/PickupLocations/EditPickupLocationModal.js";
import { useEffect, useState } from "react";
import PickupLocation from "../../classes/PickupLocation.js";
import { DeletePickupLocationModal } from "../Modals/PickupLocations/DeletePickupLocationModal.js";
import { CreatePickupLocationModal } from "../Modals/PickupLocations/CreatePickupLocationModal.js";
import { useNavigate } from "react-router-dom";

export default function PickupLocationsTable(props) {
  const navigate = useNavigate();

  function currentUserRoleProfilesRoute(userRole, id) {
    return userRole === "Admin" ? `/admin/users/${id}` : `/user/profile/${id}`;
  }

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
                  <td><a href="#" onClick={() => navigate(currentUserRoleProfilesRoute(props.userRole, location.id))}>{location.user.name}</a></td>
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
