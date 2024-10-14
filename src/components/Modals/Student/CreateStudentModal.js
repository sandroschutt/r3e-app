import { useState } from "react";
import Student from "../../../classes/Student";
import { Modal } from "react-bootstrap";

export function CreateStudentModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newStudent = {
    info: {
      name: "",
      age: "",
      schoolId: "",
      grade: "",
      frequency: "",
      performanceIndex: "",
    },
    demographics: {
      familyIncome: "",
      familyMembers: "",
    },
    address: {
      zipcode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    contact: {
      email: "",
      phone: "",
    },
  };

  function handleFormSubmit() {
    if (props.user.role === "Escola") newStudent.info.schoolId = props.user.id;
    Student.create(newStudent);
  }

  function handleSchoolSelect(userRole, schools) {
    if (userRole === "Admin" && schools !== "")
      return (
        <>
          <label htmlFor="school">Escola: *</label>
          <select
            className="mb-3 form-control"
            name="school"
            onChange={(event) =>
              (newStudent.info.schoolId = event.target.value)
            }
            required
          >
            <option>-- Selecione</option>
            {props.schools.map((schoolUnit, index) => {
              return (
                <option key={index} value={schoolUnit.id}>
                  {schoolUnit.name}
                </option>
              );
            })}
          </select>
        </>
      );
  }

  return (
    <>
      <button type="button" className="btn btn-success" onClick={handleShow}>
        Novo Estudante +
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
          <Modal.Title>Novo estudante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleFormSubmit();
            }}
          >
            <div className="mb-5">
              <h5>Informações gerais</h5>
              <label htmlFor="name">Nome: *</label>
              <input
                className="mb-3 form-control"
                name="name"
                type="text"
                onChange={(event) =>
                  (newStudent.info.name = event.target.value)
                }
                placeholder="Nome Completo"
                required
              />
              <label htmlFor="age">Idade: *</label>
              <input
                className="mb-3 form-control"
                name="age"
                type="number"
                onChange={(event) => (newStudent.info.age = event.target.value)}
                placeholder="15"
                min={9}
                max={99}
                required
              />
              {handleSchoolSelect(props.user.role, props.schools)}
              <label htmlFor="grade">Grau de ensino: *</label>
              <select
                className="mb-3 form-control"
                name="grade"
                onChange={(event) =>
                  (newStudent.info.grade = event.target.value)
                }
                required
              >
                <option>-- Selecione</option>
                <option value="1">6ª Série Fundamental</option>
                <option value="2">7ª Série Fundamental</option>
                <option value="3">8ª Série Fundamental</option>
                <option value="4">9ª Série Fundamental</option>
                <option value="5">1ª Série Médio</option>
                <option value="6">2ª Série Médio</option>
                <option value="7">3ª Série Médio</option>
                <option value="8">1º Ano Técnico</option>
                <option value="9">2º Ano Técnico</option>
                <option value="10">Superior</option>
              </select>
              <label htmlFor="frquency">Frequência (%): *</label>
              <input
                className="mb-3 form-control"
                name="frequency"
                type="number"
                onChange={(event) =>
                  (newStudent.info.frequency = event.target.value)
                }
                placeholder="75"
                min={1}
                max={100}
                required
              />
              <label htmlFor="cr">Coeficiente de rendimento: *</label>
              <input
                className="mb-3 form-control"
                name="cr"
                type="number"
                onChange={(event) =>
                  (newStudent.info.performanceIndex = event.target.value)
                }
                placeholder="CR:"
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
                onChange={(event) =>
                  (newStudent.demographics.familyIncome = event.target.value)
                }
                required
              >
                <option>-- Selecione</option>
                <option value="1000">Até R$1000</option>
                <option value="2000">Até R$2000</option>
                <option value="3000">Até R$3000</option>
                <option value="4000">Até R$4000</option>
                <option value="5000">Até R$5000</option>
                <option value="6000">Até R$6000</option>
              </select>
              <label htmlFor="cr">Familiares: *</label>
              <input
                className="mb-3 form-control"
                name="familyMembers"
                type="number"
                onChange={(event) =>
                  (newStudent.demographics.familyMembers = event.target.value)
                }
                placeholder={2}
                min={1}
                max={20}
                required
              />
            </div>
            <div className="mb-5">
              <h5>Endereço</h5>
              <label htmlFor="zipcode">CEP: </label>
              <input
                className="mb-3 form-control"
                name="zipcode"
                type="text"
                onChange={(event) => {
                  newStudent.address.zipcode = event.target.value;
                }}
                placeholder={"99999-999"}
                required
              />
              <label htmlFor="street">Rua: </label>
              <input
                className="mb-3 form-control"
                name="street"
                type="text"
                onChange={(event) => {
                  newStudent.address.street = event.target.value;
                }}
                placeholder={"Rua Exemplo"}
                required
              />
              <label htmlFor="number">Nº: </label>
              <input
                className="mb-3 form-control"
                name="number"
                type="number"
                onChange={(event) => {
                  newStudent.address.number = event.target.value;
                }}
                placeholder={"999"}
                maxLength={5}
                required
              />
              <label htmlFor="neighborhood">Bairro: </label>
              <input
                className="mb-3 form-control"
                name="neighborhood"
                type="text"
                onChange={(event) => {
                  newStudent.address.neighborhood = event.target.value;
                }}
                placeholder={"Jardim Imaginário"}
                required
              />
              <label htmlFor="city">Cidade: </label>
              <input
                className="mb-3 form-control"
                name="city"
                type="text"
                onChange={(event) => {
                  newStudent.address.city = event.target.value;
                }}
                placeholder={"Paradise City"}
                required
              />
              <label htmlFor="state">Estado: </label>
              <input
                className="mb-3 form-control"
                name="state"
                type="text"
                onChange={(event) => {
                  newStudent.address.state = event.target.value;
                }}
                placeholder={"SP"}
                maxLength={5}
                required
              />
            </div>
            <div className="mb-5">
              <h5>Contato</h5>
              <label htmlFor="email">Email: </label>
              <input
                className="mb-3 form-control"
                name="email"
                type="text"
                onChange={(event) =>
                  (newStudent.contact.email = event.target.value)
                }
                placeholder="estudante@email.com"
                required
              />
              <label htmlFor="phone">Número de telefone: </label>
              <input
                className="mb-3 form-control"
                name="phone"
                type="text"
                onChange={(event) =>
                  (newStudent.contact.phone = event.target.value)
                }
                placeholder="(DDD) 99999 9999"
                maxLength={20}
                required
              />
            </div>
            <div>
              <button className="btn btn-secondary me-3" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
