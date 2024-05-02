import "./style.scss";
import { DeviceEvaluation, DeviceSpecifications, DeviceTests } from "./DeviceOptions";

export default function SingleDeviceTechnician() {
  return (
    <section id="device-evaluation">
      <form>
        <DeviceSpecifications />
        <DeviceTests />
        <DeviceEvaluation />
      </form>
    </section>
  );
}
