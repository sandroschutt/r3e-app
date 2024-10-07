import { Accordion, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * A responsive dropdown list
 *
 * @prop {Array} schedules An array containing JSON objects
 */
export function PaymentsList(props) {
  const navigate = useNavigate();

  if (props.payments !== "")
    return (
      <Accordion defaultActiveKey="0">
        {props.payments.map((payment, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <div className="d-flex w-100 justify-content-between">
                  <div className="col col-6">
                    <p className="h5">{`#${payment.id} - ${payment.schedule.device.brand.name} ${payment.schedule.device.model.name}`}</p>
                  </div>
                  <div className="col-col-6 d-flex gap-3 align-items-center pe-3">
                    <p className="mb-0">
                      <strong>Prazo: </strong>
                      {"01/01/1999"}
                    </p>
                    <p className="mb-0 h4">
                      <Badge bg="secondary">{payment.status}</Badge>
                    </p>
                    <p className="mb-0 h4">
                      <Badge bg="primary">{`R$${payment.price}`}</Badge>
                    </p>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex gap-3 pb-4">
                  <div>
                    <p className="mb-2">
                      <strong>Cliente:</strong>{" "}
                      <a
                        href="#"
                        onClick={() =>
                          navigate(
                            `/user/profile/${payment.schedule.client.id}`
                          )
                        }
                      >
                        {payment.schedule.client.name}
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Coletor:</strong>{" "}
                      <a
                        href="#"
                        onClick={() =>
                          navigate(
                            `/user/profile/${payment.schedule.vendor.id}`
                          )
                        }
                      >
                        {payment.schedule.vendor.name}
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Coleta:</strong>{" "}
                      <a
                        href="#"
                        onClick={() =>
                          navigate(`/user/pickups/${payment.schedule.id}`)
                        }
                      >{`#${payment.schedule.id}`}</a>
                    </p>
                    <p className="mb-2">
                      <strong>Status:</strong> {payment.status}
                    </p>
                    <p className="mb-2">
                      <strong>Método de pagamento:</strong> {payment.method}
                    </p>
                    <p className="mb-2">
                      <strong>Valor:</strong> {`R$${parseFloat(payment.price)}`}
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
}
