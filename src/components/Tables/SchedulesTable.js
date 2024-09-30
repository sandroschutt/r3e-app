import { Button, Row } from "react-bootstrap";
import { ViewScheduleModal } from "../Modals/Schedule/ViewScheduleModal";
import { EditScheduleModal } from "../Modals/Schedule/EditScheduleModal";
import { DeleteScheduleModal } from "../Modals/Schedule/DeleteScheduleModal";

export default function SchedulesTable(props) {
  const schedules = props.schedules;

  function formatPaymentStatus(paymentStatus) {
    return paymentStatus.replace("-", " ");
  }

  if (schedules !== "") {
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>Cliente</th>
              <th>Coletor</th>
              <th>Dispositivo</th>
              <th>Pagamento</th>
              <th>Status</th>
              <th>Status Pgt</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => {
              return (
                <tr
                  id={schedule.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{schedule.id}</td>
                  <td>{schedule.client.name}</td>
                  <td>{schedule.vendor.name}</td>
                  <td>{`${schedule.device.brand.name} ${schedule.device.model.name}`}</td>
                  <td>
                    <a href="#">{`#${schedule.paymentId}`}</a>
                  </td>
                  <td>{schedule.accepted ? "sim" : "não"}</td>
                  <td>{formatPaymentStatus(schedule.status)}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <ViewScheduleModal schedule={schedule} />
                    <EditScheduleModal schedule={schedule} />
                    <DeleteScheduleModal id={schedule.id} />
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
