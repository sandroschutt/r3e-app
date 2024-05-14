import "./style.scss";
import { DefaultSelectors } from "./OptionSelectors";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function ManageReturncategories() {
    return (
        <Row>
            <Row className="mb-5 ps-0 justify-content-between">
                <Col><h1>Trativas de Retorno</h1></Col>
                <Col className="col-2">
                    <Button variant="success" onClick={() => {alert("Open new return category modal")}}>{"+ Adicionar nova"}</Button>
                </Col>
            </Row>
            <Row className="manage-return-categories--view w-50 flex-column gap-5">
                <Col className="manage-return-categories--category">
                    <h5>{"REEE (D):"}</h5>
                    <DefaultSelectors />
                </Col>

                <Col className="manage-return-categories--category">
                    <h5>{"Reaproveitamento de componentes (C):"}</h5>
                    <DefaultSelectors />
                </Col>

                <Col className="manage-return-categories--category">
                    <h5>{"Reaproveitamento de peças (B):"}</h5>
                    <DefaultSelectors />
                </Col>

                <Col className="manage-return-categories--category">
                    <h5>{"Recondicionamento (A):"}</h5>
                    <DefaultSelectors>
                        <div className="ps-0">
                            <label className="main-label">{"Destino 2:"}</label>
                            <Form.Select className="ms-0">
                                <option>estudantes</option>
                                <option>empresa especializada</option>
                                <option>ONG</option>
                            </Form.Select>
                        </div>
                    </DefaultSelectors>
                </Col>

                <Col className="manage-return-categories--category">
                    <h5>{"Reutilização (S):"}</h5>
                    <DefaultSelectors />
                </Col>

                <Col className="manage-return-categories--actions d-flex gap-2">
                    <Button variant="success" onClick={() => { alert("Save changes") }}>{"Salvar"}</Button>
                    <Button variant="dark" onClick={() => { alert("Cancel changes") }}>{"Cancelar"}</Button>
                </Col>
            </Row>
        </Row>
    )
}