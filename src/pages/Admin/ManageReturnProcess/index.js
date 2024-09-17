import "./style.scss";
import { DefaultSelectors } from "./OptionSelectors";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReturnProcess from "../../../classes/ReturnProcess";
import { AdminAddReturnProcessModal } from "../../../components/Modals";

export default function ManageReturnProcess() {
    const [returnProcesses, setReturnProcesses] = useState("");

    useEffect(() => {
        if (returnProcesses === "") {
            ReturnProcess.getAllProcesses(setReturnProcesses);
        }
    }, [returnProcesses])

    if (returnProcesses !== "") {
        return (
            <Row>
                <Row className="mb-5 ps-0 justify-content-between">
                    <Col><h1>Trativas de Retorno</h1></Col>
                    <Col className="col-2">
                        <AdminAddReturnProcessModal />
                    </Col>
                </Row>
                <Row className="manage-return-categories--view w-50 flex-column gap-5">
                    {
                        returnProcesses.map((rp, index) => {
                            return (
                                <Col key={index} className="manage-return-categories--category">
                                    <h5>{rp.finality.charAt(0).toUpperCase() + rp.finality.slice(1) + ":"}</h5>
                                    <DefaultSelectors returnProcess={rp} />
                                </Col>
                            )
                        })
                    }
                    <Col className="manage-return-categories--actions d-flex gap-2">
                        <Button variant="success" onClick={() => { alert("Save changes") }}>{"Salvar"}</Button>
                        <Button variant="dark" onClick={() => { alert("Cancel changes") }}>{"Cancelar"}</Button>
                    </Col>
                </Row>
            </Row>
        )
    }
}