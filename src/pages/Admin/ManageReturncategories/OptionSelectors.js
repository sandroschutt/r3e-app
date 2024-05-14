import { Col, Form, Row } from "react-bootstrap";

export function DefaultSelectors(props) {
    const defaultOptions = [
        {
            label: "Finalidade",
            values: [
                "reciclagem",
                "desmonte",
                "recondicionamento",
                "reuso"
            ]
        },
        {
            label: "Processo",
            values: [
                "desmonte e reaproveitamento de materiais",
                "desmonte e reaproveitamento de componentes",
                "desmonte e reaproveitamento de peças", "instalação de peças de terceiros",
                "contemplar estudante com dispositivo"
            ]
        },
        {
            label: "Destino",
            values: [
                "empresa especializada",
                "oficina R3E",
                "estudantes"
            ]
        },
        {
            label: "Potencial tóxico",
            values: [
                "sim",
                "não"
            ]
        },
        {
            label: "Reparos",
            values: [
                "sim",
                "não"
            ]
        }
    ];

    return (
        <Row className="manage-return-categories--category--options ps-0">
            {
                defaultOptions.map(option => {
                    return (
                        <div className="ps-0">
                            <label className="main-label mb-2">{`${option.label}:`}</label>
                            <Form.Select className="mb-3">
                                {option.values.map(value => {
                                    return <option key={value} value={value}>{value}</option>
                                })}
                            </Form.Select>
                        </div>
                    )
                })
            }
            {props.children}
        </Row>
    )
}
