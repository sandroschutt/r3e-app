import "./style.scss";
import SingleDeviceCard from "../SingleDeviceCard";
import SingleDeviceClient from "../SingleDeviceClient";
import SingleDeviceTechnician from "../SingleDeviceTechnician";
import { useEffect, useState } from "react";
import Device from "../../../classes/Device";

export default function DeviceSingle(props) {
  const [device, setDevice] = useState("");
  let deviceId = window.location.pathname.split("/");
  deviceId = parseInt(deviceId[deviceId.length -1]);

  useEffect(() => {
    if(device === "") {
      Device.getDeviceById(deviceId, setDevice);
    }
  }, [device])

  function defineTemplate(device) {
    if (props.role === "client" && device.returnProccess !== undefined) {
      return <SingleDeviceClient description={device.returnProccess.description} />;
    }

    if (props.role === "technician" && device.returnProccess !== undefined) {
      return <SingleDeviceTechnician />;
    }
  }

  return (
    <div className="single-device">
      <SingleDeviceCard role={"client"} device={device}/>
      { defineTemplate(device) }
    </div>
  );
}
