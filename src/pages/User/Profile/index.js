import "./style.scss";
import BasicInfoForm from "../../../components/forms/ProfileForm/BasicInfoForm";
import UserInfoForm from "../../../components/forms/ProfileForm/UserInfoForm";
import { Col, Row } from "react-bootstrap";

export default function Profile() {
    return (
        <Row className="flex-column h-100 row-gap-3 ps-0 pe-0 justify-content-between">
            <Col className="col-1 w-100">
                <h1>Editar Perfil</h1>
            </Col>
            <Col className="col-10 w-100">
                <Row className="column-gap-0 justify-content-start">
                    <Col className="col-3 ps-0"><BasicInfoForm /></Col>
                    <Col className="col-9 pe-0"><UserInfoForm className="my-0" /></Col>
                </Row>
            </Col>
            <Col className="col-1 w-100">
                <button className="btn btn-success mx-1">Salvar</button>
                <button className="btn btn-success mx-1">Cancelar</button>
            </Col>
        </Row>
    )
}