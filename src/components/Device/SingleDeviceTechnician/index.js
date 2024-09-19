import "./style.scss";
import {
  DeviceEvaluation,
  DeviceSpecifications,
  DeviceTests,
} from "./DeviceOptions";
import { Button, Form } from "react-bootstrap";

export default function SingleDeviceTechnician() {
  return (
    <section id="device-evaluation">
      <Form>
        <Form.Group className="d-flex flex-row gap-5">
            <DeviceSpecifications />
            <DeviceTests />
            <DeviceEvaluation />
        </Form.Group>
        <Form.Group className="mb-5">
          <Button variant={"success"}>Atualizar dispositivo</Button>
        </Form.Group>
      </Form>
    </section>
  );
}
