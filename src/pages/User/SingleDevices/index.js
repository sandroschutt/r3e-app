import { Row } from "react-bootstrap";
import DeviceSingle from "../../../components/Device/DeviceSingle";

export default function SingleDevices() {
  return (
    <Row>
      <h1 className="pb-5">{"Devices / Type / Brand / Model"}</h1>
      <DeviceSingle role={"client"}/>
    </Row>
  );
}
