import { Button, Form, Row } from "react-bootstrap";
import ReturnProcess from "../../../classes/ReturnProcess";

export function SingleReturnProcess(props) {
  const returnProcessId = props.returnProcess.id;
  const editReturnProcess = {};

  const defaultOptions = [
    {
      label: {
        display: "Finalidade",
        key: "finality"
      },
      values: ["reciclagem", "desmonte", "peças", "recondicionamento", "reuso"],
    },
    {
      label: {
        display: "Processo",
        key: "process"
      },
      values: [
        "desmonte e reaproveitamento de materiais",
        "desmonte e reaproveitamento de componentes",
        "desmonte e reaproveitamento de peças",
        "instalação de peças de terceiros",
        "contemplar estudante com dispositivo",
      ],
    },
    {
      label: {
        display: "Destino",
        key: "destination"
      },
      values: ["empresa especializada", "oficina R3E", "estudantes"],
    },
  ];

  let returnProcess = props.returnProcess;
  returnProcess = [returnProcess.finality, returnProcess.process, returnProcess.destination, returnProcess.description];

  function handleFormSubmit(event) {
    event.preventDefault();
    ReturnProcess.update(returnProcessId, editReturnProcess);
  }

  return (
    <Form onSubmit={(event) => handleFormSubmit(event)}>
      <Row className="manage-return-categories--category--options ps-0">
        {defaultOptions.map((option, index) => {
          return (
            <div className="ps-0" key={index}>
              <Form.Label className="main-label mb-2">{`${option.label.display}:`}</Form.Label>
              <Form.Select
                className="mb-3"
                defaultValue={returnProcess[index]}
                onChange={(event) => {
                  editReturnProcess[option.label.key] = event.target.value;
                }}
              >
                {option.values.map((value) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          );
        })}
        <div className="ps-0">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <label className="main-label mb-2">Descrição:</label>
            <Form.Control as="textarea" rows={8} defaultValue={returnProcess[3]} onBlur={(event) => {
              editReturnProcess.description = event.target.value;
            }} />
            <Button variant={"dark"} type="submit" className="my-3 me-3">Atualizar</Button>
            <Button variant={"danger"} type="button" className="my-3" onClick={() => alert("DELETE request")}>Deletar</Button>
          </Form.Group>
        </div>
      </Row>
    </Form>
  );
}
