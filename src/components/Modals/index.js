import Modal from "react-bootstrap/Modal";
import "./style.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NotificationList } from "../Lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useUserDataContext } from "../../context/UserDataContext";
import ReturnProcess from "../../classes/ReturnProcess";
import User from "../../classes/User";
import Student from "../../classes/Student";
import { Admin } from "../../classes/Admin";
import {
  handlePostDeviceFormSubmit,
  handleSelectPlaceholder,
  handleStateOptions,
} from "./helpers";
import Device from "../../classes/Device";
import Brands from "../../classes/Brands";
import Models from "../../classes/Models";

export function NewUserModal() {
  const user = new User();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    info: {
      name: "",
      email: "",
      secondaryEmail: "",
      phone: "",
      role: "",
    },
    document: {
      type: "",
      documentNumber: "",
    },
    address: {
      zipcode: "",
      street: "",
      city: "",
      state: "",
    },
  };

  function handleFormSubmit(data) {
    if (
      data.info.name === "" ||
      data.info.email === "" ||
      data.info.phone === "" ||
      data.document.docNumber === "" ||
      data.address.zipcode === "" ||
      data.address.street === "" ||
      data.address.city === "" ||
      data.address.state === ""
    ) {
      alert(
        "Para criar um novo usuário é necessário preencher completamente o formulário."
      );
      console.log(data);
      return;
    }

    user.create(data);
  }

  return (
    <>
      <Button className="btn-success text-right mb-2" onClick={handleShow}>
        Novo usuário +
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Novo usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="new-user-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleFormSubmit(data);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Nome:</Form.Label>
              <Form.Control
                className="mb-3"
                name="name"
                type="text"
                placeholder="Nome do Novo Usuário"
                onChange={(event) => (data.info.name = event.target.value)}
                autoFocus
              />
              <Form.Label htmlFor="email">E-mail:</Form.Label>
              <Form.Control
                className="mb-3"
                name="email"
                type="email"
                placeholder="E-mail:"
                onChange={(event) => (data.info.email = event.target.value)}
              />
              <Form.Label htmlFor="secondaryEmail">
                E-mail alternativo:
              </Form.Label>
              <Form.Control
                className="mb-3"
                name="secondaryEmail"
                type="secondaryEmail"
                placeholder="usuario@email.com:"
                onChange={(event) =>
                  (data.info.secondaryEmail = event.target.value)
                }
              />
              <Form.Label htmlFor="phone">Celular:</Form.Label>
              <Form.Control
                className="mb-3"
                name="phone"
                type="text"
                placeholder="Celular:"
                onChange={(event) => (data.info.phone = event.target.value)}
              />
              <Form.Label htmlFor="role">Função:</Form.Label>
              <Form.Select
                name="role"
                defaultValue={"2"}
                onChange={(event) => (data.info.role = event.target.value)}
              >
                <option value="2">Cliente</option>
                <option value="3">Empresa</option>
                <option value="4">ONG</option>
                <option value="5">Escola</option>
              </Form.Select>
            </Form.Group>
            <h5>Documento</h5>
            <hr />
            <Form.Label htmlFor="doctype">Tipo:</Form.Label>
            <Form.Select
              name="doctype"
              className="mb-3"
              defaultValue={"rg"}
              onChange={(event) => (data.document.type = event.target.value)}
              required
            >
              <option value="rg" key="rg">
                --RG
              </option>
              <option value="cpf" key="cpf">
                --CPF
              </option>
              <option value="cpf" key="cnpj">
                --CNPJ
              </option>
            </Form.Select>
            <Form.Label htmlFor="docnumber">Número:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="docnumber"
              id="docNumber"
              placeholder="Nº:"
              onChange={(event) =>
                (data.document.documentNumber = event.target.value)
              }
              required
            />
            <h5>Endereço</h5>
            <hr />
            <Form.Label htmlFor="zipcode">CEP:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="zipcode"
              id="zipcode"
              onChange={(event) => (data.address.zipcode = event.target.value)}
              maxLength={9}
              placeholder="99999-999"
            />
            <Form.Label htmlFor="street">Rua:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="street"
              id="street"
              placeholder="Rua Exemplo, 999:"
              onChange={(event) => (data.address.street = event.target.value)}
            />
            <Form.Label htmlFor="city">Cidade:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="city"
              id="city"
              placeholder="Itapetininga"
              onChange={(event) => (data.address.city = event.target.value)}
            />
            <Form.Label htmlFor="role">Estado:</Form.Label>
            <Form.Control
              className="mb-5"
              type="text"
              name="state"
              placeholder="SP"
              onChange={(event) => (data.address.state = event.target.value)}
              maxLength={2}
            />
            <Form.Group>
              <Button className="me-3" variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Registrar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function AddNewStudentModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // API calls
  const [schools, setSchools] = useState([{ option: "Escola", value: "0" }]);

  // basic info
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [frequency, setFrequency] = useState("");
  const [cr, setCr] = useState("");

  // demographics
  const [familyIncome, setFamilyIncome] = useState("");

  // contact
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (schools.length <= 1) {
      Admin.getAllByRole(5, setSchools);
    }
  }, []);

  function handleFormSubmit() {
    let formData = {
      info: {
        name: name,
        age: age,
        schoolId: school,
        grade: grade,
        frequency: frequency,
        performanceIndex: cr,
      },
      demographics: {
        familyIncome: familyIncome,
      },
      contact: {
        email: email,
        phone: phone,
      },
    };

    Student.create(formData);
  }

  if (schools !== "")
    return (
      <>
        <Button className="btn-success" onClick={handleShow}>
          Novo Estudante +
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Novo estudante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                handleFormSubmit();
              }}
            >
              <Form.Group className="mb-5">
                <h5>Informações gerais</h5>
                <Form.Label htmlFor="name">Nome: *</Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="name"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nome Completo"
                  required
                />
                <Form.Label htmlFor="age">Idade: *</Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="age"
                  type="number"
                  onChange={(event) => setAge(event.target.value)}
                  placeholder="15"
                  min={9}
                  max={99}
                  required
                />
                <Form.Label htmlFor="school">Escola: *</Form.Label>
                <Form.Select
                  className="mb-3"
                  name="school"
                  onChange={(event) => setSchool(event.target.value)}
                  required
                >
                  <option>-- Selecione</option>
                  {schools.map((schoolUnit, index) => {
                    return (
                      <option key={index} value={schoolUnit.id}>
                        {schoolUnit.name}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Label htmlFor="grade">Grau de ensino: *</Form.Label>
                <Form.Select
                  className="mb-3"
                  name="grade"
                  onChange={(event) => setGrade(event.target.value)}
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
                </Form.Select>
                <Form.Label htmlFor="frquency">Frequência (%): *</Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="frequency"
                  type="number"
                  onChange={(event) => setFrequency(event.target.value)}
                  placeholder="75"
                  min={1}
                  max={100}
                  required
                />
                <Form.Label htmlFor="cr">
                  Coeficiente de rendimento: *
                </Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="cr"
                  type="number"
                  onChange={(event) => setCr(event.target.value)}
                  placeholder="CR:"
                  min={1}
                  max={10}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <h5>Demografia</h5>
                <Form.Label htmlFor="family-income">
                  Renda Familiar (R$): *
                </Form.Label>
                <Form.Select
                  className="mb-3"
                  name="family-income"
                  onChange={(event) => setFamilyIncome(event.target.value)}
                  required
                >
                  <option>-- Selecione</option>
                  <option value="1000">Até R$1000</option>
                  <option value="2000">Até R$2000</option>
                  <option value="3000">Até R$3000</option>
                  <option value="4000">Até R$4000</option>
                  <option value="5000">Até R$5000</option>
                  <option value="6000">Até R$6000</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-5">
                <h5>Contato</h5>
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="email"
                  type="text"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="estudante@email.com"
                  required
                />
                <Form.Label htmlFor="phone">Número de telefone: </Form.Label>
                <Form.Control
                  className="mb-3"
                  className="mb-3"
                  name="phone"
                  type="text"
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="(DDD) 99999 9999"
                  maxLength={20}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button className="btn-secondary me-3" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button className="btn-primary" type="submit">
                  Registrar
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export function ManageDeviceModal(props) {
  const [show, setShow] = useState(false);
  const { userData } = useUserDataContext();
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [deviceState, setDeviceState] = useState("");

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [defaultValues, setDefaultValues] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.device !== undefined) {
      setType(props.device.type);
      setBrand(props.device.brandId);
      setModel(props.device.modelId);
      setDeviceState(props.device.state);
      setDefaultValues(true);
    }

    if (brands[0] === undefined) {
      Brands.getAll(setBrands);
    }

    if (models[0] === undefined) {
      Models.getAll(setModels);
    }
  }, [defaultValues, brands, models, props.device]);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (props.type === "add") {
      handlePostDeviceFormSubmit(userData.id, userData.role, {
        userId: userData.id,
        type: type,
        brandId: brand,
        modelId: model,
        state: deviceState,
        photo1: 1,
      });

      return;
    }

    Device.update(userData.id, userData.role, props.device.id, {
      userId: props.device.userId,
      type: type,
      brandId: brand,
      modelId: model,
      state: deviceState,
    });

    return;
  }

  function handleButtonStyle() {
    if (props.type === "add") {
      return (
        <Button
          variant="success"
          className="my-3"
          style={{ width: "12%" }}
          onClick={handleShow}
        >
          Novo Dispositivo +
        </Button>
      );
    }

    return (
      <FontAwesomeIcon className="action" icon={faEdit} onClick={handleShow} />
    );
  }

  return (
    <>
      {handleButtonStyle()}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.type === "add"
              ? "Novo Dispositivo"
              : `Editando: ${props.device.model.name}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="new-device"
            onSubmit={(event) => {
              handleFormSubmit(event);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="type">Tipo:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="type"
                defaultValue={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
                autoFocus
              >
                {handleSelectPlaceholder(props.type === "edit")}
                <option key={Math.random()} value="smartphone">
                  Smartphone
                </option>
                <option key={Math.random()} value="PC">
                  PC
                </option>
                <option key={Math.random()} value="notebook">
                  Notebook
                </option>
                <option key={Math.random()} value="chromebook">
                  Chromebook
                </option>
                <option key={Math.random()} value="perifericos">
                  Periféricos
                </option>
                <option key={Math.random()} value="outros">
                  Outros
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="brand">Marca:</Form.Label>
              <Form.Select
                aria-label="Seleciona a marca do dispositivo"
                name="brand"
                onChange={(event) => setBrand(event.target.value)}
                defaultValue={brand}
              >
                {handleSelectPlaceholder(props.type === "edit")}
                {brands.map((brand, index) => {
                  return (
                    <option key={index + 1} value={brand.id}>
                      {brand.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="model">Modelo:</Form.Label>
              <Form.Select
                aria-label="Seleciona a marca do dispositivo"
                name="brand"
                defaultValue={model}
                onChange={(event) => {
                  let modelData = JSON.parse(event.target.value);
                  setModel(modelData.id);
                }}
              >
                {handleSelectPlaceholder(props.type === "edit")}
                {models.map((model, index) => {
                  return (
                    <option key={index} value={model.id}>
                      {model.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="state">Estado:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="state"
                onChange={(event) => {
                  setDeviceState(event.target.value);
                }}
                defaultValue={deviceState}
              >
                {handleSelectPlaceholder(props.type === "edit")}
                {handleStateOptions(window.location.pathname)}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function DeleteDeviceModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDeleteDevice(deviceId) {
    Device.delete(deviceId);
  }

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Excluir este dispositivo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ao excluir um dispositivo, ele é permanentemente removido do sistema.
          Tem certeza que deseja continuar?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={() => {
              handleDeleteDevice(props.deviceId);
            }}
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AdminAddReturnProcessModal() {
  const [show, setShow] = useState(false);
  const [finality, setFinality] = useState(1);
  const [process, setProcess] = useState(1);
  const [destination, setDestination] = useState(1);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleFormData() {
    if (description === "") {
      alert("Existem valores ausentes no formulário!");
      return;
    }

    let formData = {
      description: description,
      finality: finality,
      process: process,
      destination: destination,
    };

    ReturnProcess.create(formData);
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        {"+ Adicionar nova"}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar nova</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Finalidade:</label>
              <Form.Select
                name="finality"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setFinality(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  reciclagem
                </option>
                <option key={2} value={2}>
                  desmonte
                </option>
                <option key={3} value={3}>
                  peças
                </option>
                <option key={4} value={4}>
                  recondicionamento
                </option>
                <option key={5} value={5}>
                  reuso
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Processo:</label>
              <Form.Select
                name="process"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setProcess(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  desmonte e reaproveitamento de materiais
                </option>
                <option key={2} value={2}>
                  desmonte e reaproveitamento de componentes
                </option>
                <option key={3} value={3}>
                  desmonte e reaproveitamento de peças
                </option>
                <option key={4} value={4}>
                  instalação de peças de terceiros
                </option>
                <option key={5} value={5}>
                  contemplar estudante com dispositivo
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Destino:</label>
              <Form.Select
                name="destination"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setDestination(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  empresa especializada
                </option>
                <option key={2} value={2}>
                  oficina R3E
                </option>
                <option key={3} value={3}>
                  estudantes
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <label className="main-label mb-2">Descrição:</label>
              <Form.Control
                className="mb-3"
                name="description"
                as="textarea"
                rows={8}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={() => handleFormData()}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function NotificationsModal() {
  let dummyNotifications = [];

  for (let i = 0; i <= 10; i++) {
    dummyNotifications.push(null);
  }

  return (
    <div
      className="custom-modal"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <NotificationList data={dummyNotifications} />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export function SinglePickupContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <strong>Contato</strong>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Assunto da mensagem"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control className="mb-3" as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function SinglePickupCancelationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <strong>Cancelar</strong>
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>
            Aguardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
