import "./style.scss";
import Device from "../../../classes/Device";
import { PublicDevicesList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";

export default function PublicDevices() {
  const {userData, updateUserData} = useUserDataContext();
  const [devices, setDevices] = useState("")

  useEffect(() => {
    if(userData.user !== undefined && devices === "") {
      Device.getUserDevices(userData.user.id, userData.user.role, setDevices);
    }
  }, [userData, devices])

  function listRender(devices) {
    if(devices !== "") {
      console.log(devices)
      return <PublicDevicesList data={devices} />
    } else return <p>Aguardando dados...</p>
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
