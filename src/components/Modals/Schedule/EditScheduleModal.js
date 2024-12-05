import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import User from "../../../classes/User";
import { validateInputDateValue } from "../../../validations/validateDate";

export function EditScheduleModal(props) {
  const schedule = props.schedule;
  const [userCanEdit, setUserCanEdit] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.userRole === "Admin" && userCanEdit === false) {
      setUserCanEdit(true);
    } else setUserCanEdit("");
  }, [userCanEdit]);

  function handleEditSchedule() {
    const data = {
      accepted: schedule.asccepted,
      status: schedule.status,
      dateColect: schedule.dateColect,
      cancelReason: schedule.cancelReason,
      obs: schedule.obs,
    };

    const user = new User();
    user.updateSchedule(schedule.id, data);
  }

  function handleCancelReasonSelect(scheduleStatus) {
    if (scheduleStatus === "cancelado" || scheduleStatus === 6)
      return (
        <>
          <label className="mb-2" htmlFor="status">
            Motivo do cancelamento:
          </label>
          <select
            className="mb-4 form-control"
            name="status"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          >
            <option>-- Selecione</option>
            <option key="1" value="1">
              Prazo de pagamento expirado
            </option>
            <option key="2" value="2">
              Prazo de coleta expirado
            </option>
            <option key="3" value="3">
              Desistência da empresa
            </option>
            <option key="4" value="4">
              Desistência do doador(a)
            </option>
            <option key="5" value="5">
              Outro
            </option>
          </select>
        </>
      );
  }

  function handleDefaultDate(date) {
    console.log(date)
    let formatedDate = new Date(date);
    return formatedDate;
  }

  function handleEditableFields(userCanEdit, schedule) {
    if(userCanEdit) return (
      <>
        <label className="mb-2" htmlFor="accepted">
          Aceita:
        </label>
        <select
          className="mb-4 form-control"
          name="accepted"
          onChange={(event) => {
            schedule.accepted = event.target.value;
          }}
          defaultValue={schedule.accepted}
        >
          <option>-- selecione</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
      </>
    );
  }

  if (schedule !== "")
    return (
      <>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="bg-success text-white" closeButton>
            <Modal.Title>{`Editando Coleta #${schedule.id}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-5">
                { handleEditableFields(userCanEdit, schedule) }

                <label className="mb-2" htmlFor="status">
                  Status:
                </label>
                <select
                  className="mb-4 form-control"
                  name="status"
                  onChange={(event) => {
                    schedule.status = event.target.value;
                  }}
                  defaultValue={schedule.status}
                >
                  <option>-- Selecione</option>
                  <option key="1" value="não aceito">
                    Não aceito
                  </option>
                  <option key="2" value="pagamento-pendente">
                    Pagamento pendente
                  </option>
                  <option key="3" value="pago">
                    Pago
                  </option>
                  <option key="4" value="aguardando-coleta">
                    Aguardando coleta
                  </option>
                  <option key="5" value="coletado">
                    Coletado
                  </option>
                  <option key="6" value="cancelado">
                    Cancelado
                  </option>
                </select>

                <label className="mb-2" htmlFor="status">
                  Data da coleta:
                </label>
                <input
                  type="date"
                  name="dateColect"
                  className="form-control mb-4"
                  onChange={(event) => {
                    schedule.dateColect = event.target.value;
                  }}
                  defaultValue={validateInputDateValue(schedule.dateColect)}
                />

                {handleCancelReasonSelect(schedule.status)}

                <label className="mb-2" htmlFor="status">
                  Observações:
                </label>
                <textarea
                  className="form-control mb-4"
                  name="obs"
                  onChange={(event) => {
                    schedule.obs = event.target.value;
                  }}
                  rows={5}
                  defaultValue={schedule.obs}
                />
              </div>
              <div>
                <button
                  className="btn btn-secondary me-3"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleEditSchedule()}
                >
                  Atualizar
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
}
