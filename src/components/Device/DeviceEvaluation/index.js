import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Device from "../../../classes/Device";

export function DeviceEvaluation(props) {
  const [returnProcessId, setReturnProcessId] = useState("");

  function handleFormSubmit() {
    Device.evaluate(props.id, { returnProccessId: returnProcessId });
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit();
      }}
    >
      <Form.Group>
        <Form.Select
          className="mb-3"
          name="device-conditions"
          onChange={(event) => setReturnProcessId(event.target.value)}
          defaultValue={props.default}
        >
          <option>-- Selecione</option>
          <option value={1}>Reciclagem</option>
          <option value={2}>Desmonte</option>
          <option value={3}>Retirada de peças</option>
          <option value={4}>Recondicionamento</option>
          <option value={5}>Reuso</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="success">
        Avaliar
      </Button>
    </Form>
  );
}
