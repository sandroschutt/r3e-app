import "./style.scss";
import Device from "../../../classes/Device";
import { PublicDevicesList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { AdminDevicesTable } from "../../../components/Tables";
import { useParams } from "react-router-dom";
import Admin from "../../../classes/Admin";

export default function PublicDevices() {
  const {userData} = useUserDataContext();
  const [devices, setDevices] = useState("")
  const params = useParams();

  useEffect(() => {
    if(userData.role !== undefined && devices === "") {
      if (userData.role === "Admin") {
        if(params.id !== undefined) {
          let userId = params.id;
          Admin.getSingleUserDevices(userId, setDevices);
        } else Device.getAll(setDevices);
      } else Device.getUserDevices(userData.user.id, userData.role, setDevices);
    }
  }, [userData, devices, params])

  function listRender(devices) {
    if(devices !== "" && userData.role !== "Admin") {
      return <PublicDevicesList devices={devices}/>
    } else if(devices !== "" && userData.role === "Admin") {
      return <AdminDevicesTable devices={devices} />
    } else {
      return <p>Aguardando dados...</p>;
    }
  }
  
  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Dispositivos"} />
      </Col>
      <Col>
        <FilterPublicDevices />
        {
          listRender(devices)
        }
      </Col>
    </Row>
  );
}
