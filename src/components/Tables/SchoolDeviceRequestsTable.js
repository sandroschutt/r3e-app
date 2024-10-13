import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { validateDate } from "../../validations/validateDate";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import SchoolDeviceRequets from "../../classes/SchoolDeviceRequests";
import { currentUserRoleProfilesRoute, currentUserRoleStudentsRoute, currentUserRoleDevicesRoute } from "../../helpers/navigationHelpers.js";

export default function SchoolDeviceRequestsTable(props) {
  const navigate = useNavigate();

  function handleAdminActions(userRole, id) {
    if (userRole === "Admin") {
      return (
        <>
        <FontAwesomeIcon
          icon={faThumbsUp}
          onClick={() => SchoolDeviceRequets.approve(id)}
        />
        <FontAwesomeIcon
          icon={faThumbsDown}
          onClick={() => SchoolDeviceRequets.reprove(id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => SchoolDeviceRequets.delete(id)}
        />
      </>
      )
    }
  }

  if (props.requestes !== "") {
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>Escola</th>
              <th>Estudante</th>
              <th>Dispositivo</th>
              <th>Status</th>
              <th>Retirada</th>
              <th>Data de criação</th>
              <th>Data da coleta</th>
              <th>Data coletado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.requests.map((request, index) => {
              return (
                <tr
                  id={request.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{request.id}</td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(
                          currentUserRoleProfilesRoute(
                            props.userRole,
                            request.schoolId
                          )
                        );
                      }}
                    >
                      {request.school.name}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(currentUserRoleStudentsRoute(props.userRole));
                      }}
                    >
                      {request.student.name}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(
                          currentUserRoleDevicesRoute(
                            props.userRole,
                            request.deviceId
                          )
                        );
                      }}
                    >{`${request.device.brand.name} ${request.device.model.name}`}</a>
                  </td>
                  <td>{request.status}</td>
                  <td>{request.accepted ? "sim" : "não"}</td>
                  <td>
                    {validateDate(request.createdAt)}
                  </td>
                  <td>
                    {request.dateColect !== null
                      ? validateDate(request.dateColect)
                      : "não definida"}
                  </td>
                  <td>
                    {request.dateColect !== null
                      ? validateDate(request.dateColected)
                      : "não definida"}
                  </td>
                  <td className="d-flex justify-content-center gap-3 align-items-center p-3" style={{fontSize: "1.2em"}}>
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => navigate(`${request.id}`)}
                    />
                    {handleAdminActions(props.userRole, request.id)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
  }
}
