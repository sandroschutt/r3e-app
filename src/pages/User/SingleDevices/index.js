import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useParams } from "react-router-dom";
import Device from "../../../classes/Device";
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

  return (
    <Row>
      <h1 className="pb-5">{"Dispositivo"}</h1>
      <div className="single-device">
        <SingleDeviceCard device={device} />
      </div>
    </Row>
  );
}
