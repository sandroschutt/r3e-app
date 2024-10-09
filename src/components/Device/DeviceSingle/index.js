import "./style.scss";
import SingleDeviceCard from "../SingleDeviceCard";
import SingleDeviceClient from "../SingleDeviceClient";
import SingleDeviceTechnician from "../SingleDeviceTechnician";
import { useEffect, useState } from "react";
import Device from "../../../classes/Device";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useParams } from "react-router-dom";

export default function DeviceSingle(props) {
  const { userData } = useUserDataContext();
  const [device, setDevice] = useState("");
  const params = useParams();

  useEffect(() => {
    if(device === "") {
      Device.getOne(params.id, setDevice);
    }
  }, [device, params.id])

  function defineTemplate(device) {
    if (userData.role === "Client" && device.returnProccess !== undefined) {
      return <SingleDeviceClient description={device.returnProccess.description} />;
    }

    if ((userData.role === "Technician" || userData.role === "Admin") && device.returnProccess !== undefined) {
      return <SingleDeviceTechnician device={device} userRole={userData.role}/>;
    }
  }

  return (
    <div className="single-device">
      <SingleDeviceCard role={userData.role} device={device}/>
      { defineTemplate(device) }
    </div>
  );
}
