import { useUserDataContext } from "../../../context/UserDataContext/index.js";
import Payments from "../../../classes/Payments.js";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import UserHeader from "../../../components/UserHeader/index.js";
import { validateDate } from "../../../validations/validateDate.js";
import { ApprovePaymentModal } from "../../../components/Modals/Payments/ApprovePaymentModal.js";
import { SendProofModal } from "../../../components/Modals/Payments/SendProofModal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import {
  currentUserRolePickupsRoute,
  currentUserRoleProfilesRoute,
} from "../../../helpers/navigationHelpers.js";

export default function SinglePayment() {
  const { userData } = useUserDataContext();
  const [payment, setPayment] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (payment === "") Payments.getOne(params.id, setPayment);
  }, [payment]);

  function handlePaymentOptions(payment) {
    if (userData.role === "Empresa" || userData.role === "Ong")
      return (
        <div className="d-flex gap-3">
          <ApprovePaymentModal payment={payment} userRole={userData.role} />
        </div>
      );

    if (userData.role === "Cliente" && payment.status === "pago") {
      return (
        <div className="d-flex gap-3">
          <ApprovePaymentModal payment={payment} userRole={userData.role} />
        </div>
      );
    }

    if (userData.role === "Cliente") {
      return (
        <div className="d-flex gap-3">
          <button className="btn btn-outline-success d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={faKey} />
            Copiar chave PIX
          </button>
          <SendProofModal payment={payment} />
          <ApprovePaymentModal payment={payment} userRole={userData.role} />
          <button className="btn btn-outline-danger">Cancelar</button>
        </div>
      );
    }
  }

  if (payment !== "")
    return (
      <Row className="flex-column">
        <Col>
          <UserHeader pageTitle={`Pagamento #${payment.id}`} />
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <div className="p-5">
                <p>
                  <strong>Beneficiário:</strong>{" "}
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(
                        currentUserRoleProfilesRoute(
                          userData.role,
                          payment.schedule.client.id
                        )
                      );
                    }}
                  >
                    {payment.schedule.client.name}
                  </a>
                </p>
                <p>
                  <strong>Beneficiado:</strong>{" "}
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(
                        currentUserRoleProfilesRoute(
                          userData.role,
                          payment.schedule.vendor.id
                        )
                      );
                    }}
                  >
                    {payment.schedule.vendor.name}
                  </a>
                </p>
                <div className="p-4" style={{ border: "1px dashed lightgrey" }}>
                  <p
                    className="d-flex justify-content-between mb-2 pb-2"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <strong>Serviço:</strong>{" "}
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(
                          currentUserRolePickupsRoute(
                            userData.role,
                            payment.schedule.client.id
                          )
                        );
                      }}
                    >{`Coleta #${payment.schedule.id}: ${payment.schedule.device.brand.name} ${payment.schedule.device.model.name}`}</a>
                  </p>
                  <p
                    className="d-flex justify-content-between mb-2 pb-2"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <strong>Status:</strong>{" "}
                    {payment.status}
                  </p>
                  <p
                    className="d-flex justify-content-between mb-2 pb-2"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <strong>Método de pagamento:</strong>{" "}
                    {payment.method.toUpperCase()}
                  </p>
                  <p
                    className="d-flex justify-content-between mb-2 pb-2"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <strong>Chave PIX:</strong> {"vendor@key.com"}
                  </p>
                  <p
                    className="d-flex justify-content-between mb-2 pb-2"
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <strong>Valor:</strong> {`R$${payment.price}`}
                  </p>
                  <p className="d-flex justify-content-between mb-2 pb-2">
                    <strong>Vencimento:</strong> {validateDate(payment.term)}
                  </p>
                </div>
                <div className="mt-5">{handlePaymentOptions(payment)}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}
