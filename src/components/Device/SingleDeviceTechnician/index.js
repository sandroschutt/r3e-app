import "./style.scss";
import {
  DeviceEvaluation,
  DeviceSpecifications,
  DeviceTests,
} from "./DeviceOptions";
import { Button, Form } from "react-bootstrap";
import Workshop from "../../../classes/Workshop";

export default function SingleDeviceTechnician(props) {
  const device = props.device;
  const specs = {};
  const tests = {};

  function handleFormData(event) {
    event.preventDefault();
    alert("For data coming in!");
    console.log({deviceId: device.id, specs: specs, tests: tests})
    Workshop.create({deviceId: device.id, specs: specs, tests: tests}, props.userRole);
  }

  return (
    <section id="device-evaluation">
      <button className="me-3 mb-3" type="button" onClick={() => console.log(specs)}>
        Log Specs
      </button>
      <button className="me-3 mb-3" type="button" onClick={() => console.log(tests)}>
        Log Tests
      </button>
      <Form id="device-evaluation-form" onSubmit={(event) => { handleFormData(event) }}>
        <Form.Group className="d-flex flex-row gap-5">
            <DeviceSpecifications specs={specs}/>
            <DeviceTests tests={tests} />
        </Form.Group>
        <Form.Group className="mb-5">
          <Button type="submit" variant={"success"}>Salvar avaliação</Button>
        </Form.Group>
      </Form>
    </section>
  );
}
