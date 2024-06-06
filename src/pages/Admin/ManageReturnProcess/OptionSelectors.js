import { Form, Row } from "react-bootstrap";

export function DefaultSelectors(props) {
    const defaultOptions = [
        {
            label: "Finalidade",
            values: [
                "reciclagem",
                "desmonte",
                "peças",
                "recondicionamento",
                "reuso"
            ]
        },
        {
            label: "Processo",
            values: [
                "desmonte e reaproveitamento de materiais",
                "desmonte e reaproveitamento de componentes",
                "desmonte e reaproveitamento de peças",
                "instalação de peças de terceiros",
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
        }
    ];

    let rp = props.returnProcess;
    rp = [rp.finality, rp.process, rp.destination, rp.description];

    return (
        <Row className="manage-return-categories--category--options ps-0">
            {
                defaultOptions.map((option, index) => {
                    return (
                        <div className="ps-0" key={index}>
                            <label className="main-label mb-2">{`${option.label}:`}</label>
                            <Form.Select className="mb-3" defaultValue={rp[index]} onChange={(event) => console.log(event.target.value)}>
                                {option.values.map((value, index) => {
                                    return <option key={value} value={value}>{value}</option>
                                })}
                            </Form.Select>
                        </div>
                    )
                })
            }
            <div className="ps-0">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <label className="main-label mb-2">Descrição:</label>
                    <Form.Control as="textarea" rows={8} defaultValue={rp[3]} />
                </Form.Group>
            </div>
            {props.children}
        </Row>
    )
}
