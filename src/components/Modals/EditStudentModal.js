import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Admin } from "../../classes/Admin";
import Student from "../../classes/Student";
import { validatePhones } from "../../validations/validatePhones";

export function EditStudentModal(props) {
  const student = props.student;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // API calls
  const [schools, setSchools] = useState([{ option: "Escola", value: "0" }]);

  useEffect(() => {
    if (schools.length <= 1) {
      Admin.getAllByRole(5, setSchools);
    }
  }, []);

  function handleEditStudent() {
    alert("Data incoming!");
    console.log(student);

    Student.update(student.id, student);
  }

  if(schools !== "") return (
    <>
      <Button variant={"outline-success"} onClick={handleShow}>
        {"Editar"}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{`Editando: ${student.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-5">
              <h5>Informações gerais</h5>
              <label htmlFor="name">Nome: *</label>
              <input
                className="mb-3 form-control"
                name="name"
                type="text"
                onChange={(event) => {
                  student.name = event.target.value;
                }}
                placeholder={student.name}
                required
              />
              <label htmlFor="age">Idade: *</label>
              <input
                className="mb-3 form-control"
                name="age"
                type="number"
                onChange={(event) => {
                  student.age = event.target.value;
                }}
                placeholder={student.age}
                min={9}
                max={99}
                required
              />
              <label htmlFor="school">Escola: *</label>
              <select
                className="mb-3 form-control"
                name="school"
                onChange={(event) => {
                  student.schoolId = event.target.value;
                }}
                defaultValue={student.schoolId}
                required
              >
                <option>-- Selecione</option>
                {schools.map((schoolUnit, index) => {
                  return (
                    <option key={index} value={schoolUnit.id}>{schoolUnit.name}</option>
                  );
                })}
              </select>
              <label htmlFor="grade">Grau de ensino: *</label>
              <select
                className="mb-3 form-control"
                name="grade"
                onChange={(event) => {
                  student.grade = event.target.value;
                }}
                defaultValue={student.grade}
                required
              >
                <option>-- Selecione</option>
                <option key="1" value="1">
                  6ª Série Fundamental
                </option>
                <option key="2" value="2">
                  7ª Série Fundamental
                </option>
                <option key="3" value="3">
                  8ª Série Fundamental
                </option>
                <option key="4" value="4">
                  9ª Série Fundamental
                </option>
                <option key="5" value="5">
                  1ª Série Médio
                </option>
                <option key="6" value="6">
                  2ª Série Médio
                </option>
                <option key="7" value="7">
                  3ª Série Médio
                </option>
                <option key="8" value="8">
                  1º Ano Técnico
                </option>
                <option key="9" value="9">
                  2º Ano Técnico
                </option>
                <option key="10" value="10">
                  Superior
                </option>
              </select>
              <label htmlFor="frquency">Frequência (%): *</label>
              <input
                className="mb-3 form-control"
                name="frequency"
                type="number"
                onChange={(event) => {
                  student.frequency = event.target.value;
                }}
                placeholder={student.frequency + "%"}
                min={1}
                max={100}
                required
              />
              <label htmlFor="cr">Coeficiente de rendimento: *</label>
              <input
                className="mb-3 form-control"
                name="cr"
                type="number"
                onChange={(event) => {
                  student.performanceIndex = event.target.value;
                }}
                placeholder={student.performanceIndex}
                min={1}
                max={10}
                required
              />
            </div>
            <div className="mb-5">
              <h5>Demografia</h5>
              <label htmlFor="family-income">Renda Familiar (R$): *</label>
              <select
                className="mb-3 form-control"
                name="family-income"
                onChange={(event) => {
                  student.familyIncome = event.target.value;
                }}
                defaultValue={student.familyIncome}
                required
              >
                <option>-- Selecione</option>
                <option key="1000" value="1000">
                  Até R$1000
                </option>
                <option key="2000" value="2000">
                  Até R$2000
                </option>
                <option key="3000" value="3000">
                  Até R$3000
                </option>
                <option key="4000" value="4000">
                  Até R$4000
                </option>
                <option key="5000" value="5000">
                  Até R$5000
                </option>
                <option key="6000" value="6000">
                  Até R$6000
                </option>
              </select>
            </div>
            <div className="mb-5">
              <h5>Contato</h5>
              <label htmlFor="email">Email: </label>
              <input
                className="mb-3 form-control"
                name="email"
                type="text"
                onChange={(event) => {
                  student.email = event.target.value;
                }}
                placeholder={student.email}
                required
              />
              <label htmlFor="phone">Número de telefone: </label>
              <input
                className="mb-3 form-control"
                name="phone"
                type="text"
                onChange={(event) => {
                  student.phone = event.target.value;
                }}
                placeholder={validatePhones(student.phone)}
                maxLength={20}
                required
              />
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleEditStudent()}
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
