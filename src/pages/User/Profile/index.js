/**
 * If NOT admin, return UserDashboard else return AdminDashboard
*/

import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import profileDummyAvatar from "../../../assets/images/r3d3_profile_avatar.png";
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
    const { userData, updateUserData } = useUserDataContext();

    return (
        <div className="user-dashboard-wrapper">
            <Row className="user-card">
                <Col className="col-xl-2 p-0 text-leaft">
                    <img src={profileDummyAvatar} alt="" />
                </Col>
                <Col>
                    <h2 className="mt-4">Nome do Usuário</h2>
                    <div className="card-text d-flex">
                        <p className="user-role">Role</p>
                        <span className="mt-1 fs-medium">somemail@example.com</span>
                    </div>
                    <div className="card-text d-flex">
                        <p className="edit-profile">Editar perfil</p>
                        <FontAwesomeIcon icon={faPen} size={'sm'} className="edit-icon"/>
                    </div>
                </Col>
            </Row>
            <Row className="user-info">
                <Col className="col-4">
                    <h3 className="mb-3">Identidade</h3>
                    <p className="mb-0">
                        <span className="key">Nome:</span>
                        <span>João da Silva</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Função:</span>
                        <span>Motorista de caminhão</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Área:</span>
                        <span>Logistica</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Idade:</span>
                        <span>38 anos</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Doc:</span>
                        <span>CPF</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Nº:</span>
                        <span>618.214.490-45</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Data Cad:</span>
                        <span>18/05/2024</span>
                    </p>
                </Col>
                <Col className="col-4">
                    <h3 className="mb-3">Endereço</h3>
                    <p className="mb-0">
                        <span className="key">Rua:</span>
                        <span>Rua Existente</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Bairro:</span>
                        <span>Jardim Flórida</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Cidade:</span>
                        <span>Embu das Artes</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Estado:</span>
                        <span>São Paulo</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">País:</span>
                        <span>Brasil</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">CEP:</span>
                        <span>06810-100</span>
                    </p>
                </Col>
                <Col className="col-4">
                    <h3 className="mb-3">Contato</h3>
                    <p className="mb-0">
                        <span className="key">E-mail Principal:</span>
                        <span>joaoSilva@email.com</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Email Secundário:</span>
                        <span>joaodasilva@outlook.com</span>
                    </p>
                    <p className="mb-0">
                        <span className="key">Celular:</span>
                        <span>(15) 99770-7070</span>
                    </p>
                </Col>
            </Row>
        </div>
    );
}