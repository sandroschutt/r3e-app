import Device from "../../../classes/Device";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useParams } from "react-router-dom";
import Admin from "../../../classes/Admin";
import ModelsTable from "../../../components/Tables/Devices/ModelsTable";

export default function DeviceModels() {
  const { userData } = useUserDataContext();
  const [devices, setDevices] = useState("");
  const params = useParams();

  useEffect(() => {
    if (userData.role !== undefined && devices === "") {
      if (userData.role === "Admin") {
        if (params.id !== undefined) {
          let userId = params.id;
          Admin.getSingleUserDevices(userId, setDevices);
        } else Device.getAll(setDevices);
      } else Device.getUserDevices(userData.user.id, userData.role, setDevices);
    }
  }, [userData, devices, params]);


  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Modelos de Dispositivos"} />
      </Col>
      <Col>
        <FilterPublicDevices />
        <ModelsTable />
      </Col>
    </Row>
  );
}
