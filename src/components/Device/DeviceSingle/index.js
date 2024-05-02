import "./style.scss";
import SingleDeviceCard from "../SingleDeviceCard";
import SingleDeviceClient from "../SingleDeviceClient";
import SingleDeviceTechnician from "../SingleDeviceTechnician";

export default function DeviceSingle(props) {
  function defineTemplate() {
    if (props.role === "client") {
      return <SingleDeviceClient />;
    }

    if (props.role === "technician") {
      return <SingleDeviceTechnician />;
    }
  }

  return (
    <div className="single-device">
      <SingleDeviceCard />
      { defineTemplate() }
    </div>
  );
}
