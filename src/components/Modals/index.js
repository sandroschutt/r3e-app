import Modal from "react-bootstrap/Modal";
import "./style.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NotificationList } from "../Lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Device from "../../classes/Device";
import { useUserDataContext } from "../../context/UserDataContext";
import { FormGroup } from "react-bootstrap";
import { SelectBrands } from "../forms/Select/SelectBrands";
import { SelectModels } from "../forms/Select/SelectModels";
import ReturnProcess from "../../classes/ReturnProcess";
import User from "../../classes/User";

export function AddNewUserModal() {
  const user = new User();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // User info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("2");

  // User document
  const [docType, setDocType] = useState("rg");
  const [docNumber, setDocNumber] = useState("");

  // User address
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function handleFormSubmit() {
    let formData = {
      info: {
        name: name,
        email: email,
        phone: phone,
        role: role,
      },
      document: {
        type: docType,
        documentNumber: docNumber,
      },
      address: {
        zipcode: zipcode,
        street: street,
        city: city,
        state: state,
      },
    };

    if (
      formData.info.name === "" ||
      formData.info.email === "" ||
      formData.info.phone === "" ||
      formData.document.docNumber === "" ||
      formData.address.zipcode === "" ||
      formData.address.street === "" ||
      formData.address.city === "" ||
      formData.address.state === ""
    ) {
      alert(
        "Para criar um novo usuário é necessário preencher completamente o formulário."
      );
      console.log(formData);
      return;
    }

    user.create(formData);
  }

  return (
    <>
      <Button className="btn-success" onClick={handleShow}>
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
              handleFormSubmit();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                name="name"
                type="text"
                placeholder="Nome:"
                onChange={(event) => setName(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="email"
                type="email"
                placeholder="E-mail:"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="phone"
                type="text"
                placeholder="Celular:"
                onChange={(event) => setPhone(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label htmlFor="role">Função:</Form.Label>
              <Form.Select
                name="role"
                defaultValue={"2"}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="2">
                  Cliente
                </option>
                <option value="3">Empresa</option>
                <option value="4">ONG</option>
                <option value="5">Escola</option>
              </Form.Select>
            </Form.Group>
            <h5>Documento</h5>
            <hr />
            <Form.Select
              name="doctype"
              className="mb-3"
              defaultValue={"rg"}
              onChange={(event) => setDocType(event.target.value)}
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
            <Form.Control
              type="text"
              name="docnumber"
              id="docNumber"
              className="mb-5"
              placeholder="Nº:"
              onChange={(event) => setDocNumber(event.target.value)}
              required
            />
            <h5>Endereço</h5>
            <hr />
            <Form.Control
              type="text"
              name="zipcode"
              id="zipcode"
              className="mb-3"
              onChange={(event) => setZipcode(event.target.value)}
              maxLength={9}
              placeholder="CEP:"
            />
            <Form.Control
              type="text"
              name="street"
              id="street"
              className="mb-3"
              placeholder="Rua e número:"
              onChange={(event) => setStreet(event.target.value)}
            />
            <Form.Control
              type="text"
              name="city"
              id="city"
              className="mb-3"
              placeholder="Cidade:"
              onChange={(event) => setCity(event.target.value)}
            />
            <Form.Control
              type="text"
              name="state"
              className="mb-3"
              placeholder="Estado:"
              onChange={(event) => setState(event.target.value)}
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

export function AddNewDeviceModal() {
  const [show, setShow] = useState(false);
  const { userData } = useUserDataContext();
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [state, setState] = useState("");
  const [year, setYear] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * Defines which state options to show to the user based on the current view.
   *
   * @param pathname The current pathname where the select option input is being loaded
   * @return The options list based on the current view
   */
  function handleStateOptions(pathname = String) {
    const stateOptions = [
      { option: "Bom", value: 2 },
      { option: "Regular", value: 3 },
      { option: "Ruim", value: 4 },
    ];

    if (pathname !== "/admin/workshop") {
      stateOptions.unshift({ option: "Muito Bom", value: 1 });
      stateOptions.push({ option: "Inutilizável", value: 5 });
    }

    return stateOptions.map((state) => {
      return (
        <option key={Math.random()} value={state.value}>
          {state.option}
        </option>
      );
    });
  }

  function handleFormData(userId = null) {
    if (userId === "" || userId === null) return;

    let data = {
      userId: userId,
      type: type,
      brandId: brand,
      modelId: model,
      state: state,
      year: year,
      photo1: 1,
    };

    Device.post(data, userData.role.toLowerCase());
  }

  return (
    <>
      <Button
        variant="success"
        className="my-3"
        style={{ width: "12%" }}
        onClick={handleShow}
      >
        Novo Dispositivo +
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Novo Dispositivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="new-device"
            onSubmit={(event) => {
              event.preventDefault();
              handleFormData(userData.id);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                name="type"
                onChange={(event) => {
                  setType(event.target.value);
                }}
                autoFocus
              >
                <option>Tipo</option>
                <option key={Math.random()} value="1">
                  Smartphone
                </option>
                <option key={Math.random()} value="2">
                  PC
                </option>
                <option key={Math.random()} value="3">
                  Notebook
                </option>
                <option key={Math.random()} value="4">
                  Chromebook
                </option>
                <option key={Math.random()} value="5">
                  Periféricos
                </option>
                <option key={Math.random()} value="6">
                  Outros
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <SelectBrands setBrand={setBrand} />
            </Form.Group>
            <Form.Group className="mb-3">
              <SelectModels setModel={setModel} setYear={setYear} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                name="state"
                onChange={(event) => {
                  setState(event.target.value);
                }}
                autoFocus
              >
                <option>Estado</option>
                {handleStateOptions(window.location.pathname)}
              </Form.Select>
            </Form.Group>
            <FormGroup>
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
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function AdminQuickEditDeviceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon className="action" icon={faEdit} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editando</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Modelo:" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Marca:" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Ano:" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Estado:" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AdminDeleteDeviceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Excluir este dispositivo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ao excluir um dispositivo, ele é permanentemente excluído do banco de
          dados.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Excluir
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
              <Form.Control as="textarea" rows={3} />
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
