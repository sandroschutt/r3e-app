import { useState } from "react";
import User from "../../../classes/User";
import { Button, Form, Modal } from "react-bootstrap";

export function CreateUserModal() {
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
    image: "",
    document: {
      type: "",
      documentNumber: "",
    },
    address: {
      zipcode: "",
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      number: ""
    },
  };

  function handleFormSubmit(data) {
    if (
      data.info.name === "" ||
      data.info.email === "" ||
      data.info.phone === "" ||
      data.document.documentNumber === "" ||
      data.address.zipcode === "" ||
      data.address.street === "" ||
      data.address.neighborhood === "" ||
      data.address.city === "" ||
      data.address.state === "" ||
      data.image === ""
    ) {
      alert(
        "Para criar um novo usuário é necessário preencher completamente o formulário."
      );
      return;
    }

    const formdata = new FormData();
    formdata.append("info", JSON.stringify(data.info));
    formdata.append("address", JSON.stringify(data.address));
    formdata.append("document", JSON.stringify(data.document));
    formdata.append("image", data.image);

    user.create(formdata);
  }

  return (
    <>
      <Button className="btn-success text-right mb-2" onClick={handleShow}>
        Novo usuário +
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-success text-light" closeButton>
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
                type="email"
                placeholder="usuario@email.com:"
                onChange={(event) =>
                  (data.info.secondaryEmail = event.target.value)
                }
              />
              <Form.Label htmlFor="profilePicture">Foto de perfil:</Form.Label>
              <Form.Control
                className="mb-3"
                name="profilePicture"
                type="file"
                accept="img/png, img/jpeg, img/jpg"
                onChange={(event) => (data.image = event.target.files[0])}
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
                onChange={(event) => (data.info.role = event.target.value)}
              >
                <option>-- Selecione</option>
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
              onChange={(event) => (data.document.type = event.target.value)}
              required
            >
              <option>-- Selecione</option>
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
              placeholder="999"
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
              placeholder="Rua Exemplo:"
              onChange={(event) => (data.address.street = event.target.value)}
            />
            <Form.Label htmlFor="neighborhood">Bairro:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="neighborhood"
              id="neighborhood"
              placeholder="Jardim Exemplo:"
              onChange={(event) => (data.address.neighborhood = event.target.value)}
            />
            <Form.Label htmlFor="addressNumber">Nº:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="addressNumber"
              placeholder="999"
              onChange={(event) => (data.address.number = event.target.value)}
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
