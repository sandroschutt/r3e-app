import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Payments from "../../classes/Payments";
import { EditPaymentModal } from "../Modals/Payments/EditPaymentModal";
import { DeletePaymentModal } from "../Modals/Payments/DeletePaymentModal";
import { useNavigate } from "react-router-dom";
import { validateDate } from "../../validations/validateDate.js";
import { CreatePaymentModal } from "../Modals/Payments/CreatePaymentModal.js";
import { useUserDataContext } from "../../context/UserDataContext/index.js";
import Admin from "../../classes/Admin.js";

export default function PaymentsTable() {
  const { userData } = useUserDataContext();

  const [payments, setPayments] = useState("");
  const [schedules, setSchedules] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (payments === "") Payments.getAll(setPayments);
    if (schedules === "" && userData.role === "Admin")
      Admin.getAllSchedules(setSchedules);
  }, [payments, schedules]);

  if (payments !== "")
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <CreatePaymentModal userRole={userData.role} schedules={schedules}/>
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
            {payments.map((payment, index) => {
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
                      onClick={() =>
                        navigate(
                          `/${window.location.pathname.split("/")[1]}/pickups/${
                            payment.schedule.id
                          }`
                        )
                      }
                    >
                      {payment.schedule.id}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={() =>
                        navigate(
                          `/${window.location.pathname.split("/")[1]}/users/${
                            payment.schedule.client.id
                          }`
                        )
                      }
                    >
                      {payment.schedule.client.name}
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={() =>
                        navigate(
                          `/${window.location.pathname.split("/")[1]}/users/${
                            payment.schedule.vendor.id
                          }`
                        )
                      }
                    >
                      {payment.schedule.client.name}
                    </a>
                  </td>
                  <td>{`R$${payment.price}`}</td>
                  <td>{payment.method.replace("-", " ")}</td>
                  <td>{payment.status}</td>
                  <td>{validateDate(payment.createdAt)}</td>
                  <td className="d-flex justify-content-center gap-3 align-items-center p-3">
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
