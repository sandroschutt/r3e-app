import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Payments from "../../classes/Payments";
import { EditPaymentModal } from "../Modals/Payments/EditPaymentModal";
import { DeletePaymentModal } from "../Modals/Payments/DeletePaymentModal";

export default function PaymentsTable() {
  const [payments, setPayments] = useState("");

  useEffect(() => {
    if (payments === "") Payments.getAll(setPayments);
  }, [payments]);

  const data = {
    clientId: "",
    vendorId: "",
    price: "",
    method: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  };

  if (payments !== "")
    return (
      <Row className="admin-devices-table w-100 ps-0">
        <button className="btn btn-success col-2 my-2">Novo Pagamento +</button>
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>#</th>
              <th>Doador</th>
              <th>Empresa</th>
              <th>Preço</th>
              <th>Método</th>
              <th>Status</th>
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
                  <td>{payment.client.name}</td>
                  <td>{payment.vendor.name}</td>
                  <td>{`R$${payment.price}`}</td>
                  <td>{payment.method.replace("-", " ")}</td>
                  <td>{payment.status}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <FontAwesomeIcon icon={faEye} />
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
