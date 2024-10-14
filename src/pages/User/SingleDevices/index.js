import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useParams } from "react-router-dom";
import Device from "../../../classes/Device";
import SingleDeviceClient from "../../../components/Device/SingleDeviceClient"; 
import SingleDeviceCard from "../../../components/Device/SingleDeviceCard"; 
import { Row } from "react-bootstrap";

export default function SingleDevices() {
  const { userData } = useUserDataContext();
  const [device, setDevice] = useState("");
  const params = useParams();

  useEffect(() => {
    if (device === "") {
      Device.getOne(params.id, setDevice);
    }
  }, [device, params.id]);

  function defineTemplate(device) {
    if (userData.role !== "Admin" && device.returnProccess !== undefined) {
      return (
        <SingleDeviceClient description={device.returnProccess.description} />
      );
    }
  }
  return (
    <Row>
      <h1 className="pb-5">{"Dispositivo"}</h1>
      <div className="single-device">
        <SingleDeviceCard role={userData.role} device={device} />
        {defineTemplate(device)}
      </div>
    </Row>
  );
}
