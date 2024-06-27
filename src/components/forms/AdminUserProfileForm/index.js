import { Button, Col, Row } from "react-bootstrap";
import "./style.scss";
import Form from 'react-bootstrap/Form';
import { brazilianStatesList } from "../json/brazilianStatesList.js";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { validatePhones } from "../../../validations/validatePhones.js";

export default function AdminUserProfileForm(props) {
    const userData = props.userData;

    if (userData !== "") {
        return (
            <Form className="user-profile--form px-0">
                <Row className="profile-header p-3 justify-content-between align-items-center">
                    <Col className="profile-picture col-2"><div className="bg-light" style={{ backgroundImage: `url(${r3eMascot})` }}></div></Col>
                    <Col className="profile-info col-8"><h3>{userData.name}</h3></Col>
                    <Col className="profile-main-action col-2">
                        <Button variant="success">Atualizar</Button>
                    </Col>
                </Row>
                <div className="user-profile--form-section p-5">
                    <h5>Contato</h5>
                    <hr className="mb-4 text-secondary" />
                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" value={userData.name} placeholder="User name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type="email" value={userData.email} placeholder="usuario@email.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-none" controlId="userSecondaryEmail">
                        <Form.Label>E-mail secundário:</Form.Label>
                        <Form.Control type="email" placeholder="usuario@secondaryemail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPhone">
                        <Form.Label>Celular:</Form.Label>
                        <Form.Control type="text" value={validatePhones(userData.phone)} placeholder="(99) 99999-9999" />
                    </Form.Group>
                </div>

                <div className="user-profile--form-section p-5">
                    <h5>Endereço</h5>
                    <hr className="mb-4 text-secondary" />
                    <Form.Group className="mb-3" controlId="userZipcode">
                        <Form.Label>CEP:</Form.Label>
                        <Form.Control type="text" value={userData.address.zipcode} placeholder="00000-000" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userStreet">
                        <Form.Label>Rua:</Form.Label>
                        <Form.Control type="text" value={userData.address.street} placeholder="Rua Exemplo da Silva Sauro, 999" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userCity">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control type="text" value={userData.address.city} placeholder="Cafundó do Judas" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userState">
                        <Form.Label>Estado:</Form.Label>
                        <Form.Select aria-label="Estado" defaultValue={userData.address.state} onChange={(event) => console.log(event.target.value)}>
                            {
                                brazilianStatesList.map((state, index) => {
                                    return <option value={state.uf} key={index}>{state.label}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </div>

                <div className="user-profile--form-section p-5">
                    <h5>Documento</h5>
                    <hr className="mb-4 text-secondary" />
                    <Form.Group className="mb-3" controlId="userDocumentType">
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Select aria-label="Estado" defaultValue={userData.document.type} onChange={(event) => console.log(event.target.value)}>
                            <option value="rg">RG</option>
                            <option value="cpf">CPF</option>
                            <option value="cnpj">CNPJ</option>
                            <option value="outros">Outro</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userDocumentNumber">
                        <Form.Label>Número do documento:</Form.Label>
                        <Form.Control type="text" value={userData.document.documentNumber} placeholder="000.000.000-1" />
                    </Form.Group>
                </div>
            </Form>
        );
    }
}