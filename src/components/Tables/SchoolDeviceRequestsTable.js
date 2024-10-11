import { Row } from "react-bootstrap";
import { ViewScheduleModal } from "../Modals/Schedule/ViewScheduleModal";
import { EditScheduleModal } from "../Modals/Schedule/EditScheduleModal";
import { DeleteScheduleModal } from "../Modals/Schedule/DeleteScheduleModal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { validateDate } from "../../validations/validateDate";

export default function SchoolDeviceRequestsTable(props) {
  const navigate = useNavigate();

  function currentUserRoleProfilesRoute(userRole, id) {
    return userRole === "Admin" ? `/admin/users/${id}` : `/user/profile/${id}`;
  }

  function currentUserRoleStudentsRoute(userRole) {
    return userRole === "Admin" ? `/admin/students` : `/user/students`;
  }

  function currentUserRoleDevicesRoute(userRole, id) {
    return userRole === "Admin" ? `/admin/devices/${id}` : `/user/devices/${id}`;
  }

  function handleAdminActions(userRole) {
    if(userRole === "Admin") return <FontAwesomeIcon icon={faTrash} onClick={() => alert('delete')} />;
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
                    <a href="#" onClick={(event) => {
                      event.preventDefault();
                      navigate(currentUserRoleDevicesRoute(props.userRole, request.deviceId));
                    }}>{`${request.device.brand.name} ${request.device.model.name}`}</a>
                  </td>
                  <td>{request.status}</td>
                  <td>{request.accepted ? "sim" : "não"}</td>
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
                  <td className="d-flex justify-content-start gap-2 align-items-center p-3">
                    <FontAwesomeIcon icon={faEye} onClick={() => alert('Open single view')}/>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={() => alert('Cancel action')} />
                    { handleAdminActions(props.userRole) }
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
