import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { EditPaymentModal } from "../Modals/Payments/EditPaymentModal";
import { DeletePaymentModal } from "../Modals/Payments/DeletePaymentModal";
import { useNavigate } from "react-router-dom";
import { validateDate } from "../../validations/validateDate.js";
import { CreatePaymentModal } from "../Modals/Payments/CreatePaymentModal.js";
import { useUserDataContext } from "../../context/UserDataContext/index.js";
import Admin from "../../classes/Admin.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function PaymentsTable(props) {
  const { userData } = useUserDataContext();

  const [schedules, setSchedules] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (schedules === "" && userData.role === "Admin")
      Admin.getAllSchedules(setSchedules);
  }, [schedules]);

  if (props.payments !== "")
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <div className="d-flex justify-content-end px-0">
          <CreatePaymentModal userRole={userData.role} schedules={schedules} />
        </div>
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>Coleta</th>
              <th>Doador</th>
              <th>Empresa</th>
              <th>Preço</th>
              <th>Método</th>
              <th>Status</th>
              <th>Criado em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.payments.map((payment, index) => {
              return (
                <tr
                  id={payment.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{payment.id}</td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/app/pickups/${payment.schedule.id}`);
                      }}
                    >
                      {payment.schedule.id}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/app/users/${payment.schedule.client.id}`);
                      }}
                    >
                      {payment.schedule.client.name}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/app/users/${payment.schedule.vendor.id}`);
                      }}
                    >
                      {payment.schedule.vendor.name}
                    </a>
                  </td>
                  <td>{`R$${payment.price}`}</td>
                  <td>{payment.method.replace("-", " ")}</td>
                  <td>{payment.status}</td>
                  <td>{validateDate(payment.createdAt)}</td>
                  <td className="d-flex justify-content-center gap-3 align-items-center p-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/app/payments/${payment.id}`);
                      }}
                    />
                    <EditPaymentModal payment={payment} />
                    <DeletePaymentModal id={payment.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
}
