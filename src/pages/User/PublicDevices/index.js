import "./style.scss";
import Device from "../../../classes/Device";
import { PublicDevicesList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { AdminDevicesTable } from "../../../components/Tables";
import { useParams } from "react-router-dom";
import { Admin } from "../../../classes/Admin";

export default function PublicDevices() {
  const { userData } = useUserDataContext();
  const [devices, setDevices] = useState("");
  const [bulkActionsItems, setBulkActionsItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (userData.role !== undefined && devices === "") {
      if (userData.role === "Admin") {
        if (params.id !== undefined) {
          let userId = params.id;
          Admin.getSingleUserDevices(userId, setDevices);
        } else Device.getAllDevices(setDevices);
      } else Device.getUserDevices(userData.user.id, userData.role, setDevices);
    }
  }, [userData, devices, params])

  function listRender(devices) {
    if (devices !== "" && userData.role !== "Admin") {
      return (
        <>
          <FilterPublicDevices />
          <PublicDevicesList devices={devices} />
        </>
      )
    } else if (devices !== "" && userData.role === "Admin") {
      return (
        <>
          <AdminBulkActions devices={devices} setDevices={setDevices} bulkActionsItems={bulkActionsItems} />
          <FilterPublicDevices />
          <AdminDevicesTable devices={devices} bulkActionsItems={bulkActionsItems} setBulkActionsItems={setBulkActionsItems} />
        </>
      )
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
        {
          listRender(devices)
        }
      </Col>
    </Row>
  );
}

function AdminBulkActions(props) {
  const [bulkAction, setBulkAction] = useState("");

  function handleBulkActionsSelection(action) {
    if (action === "deletar") {
      console.log(props.bulkActionsItems)
      Device.deleteDevices(props.bulkActionsItems, props.devices, props.setDevices);
    }

    if (action === "reservar") {
      console.log(props.bulkActionsItems)
      Device.reserveDevices(props.bulkActionsItems, props.devices, props.setDevices)
    }
  }

  return (
    <Form.Group className="d-flex mb-3 px-0 w-25" controlId="bulkActions">
      <Form.Select aria-label="Estado" onChange={(event) => { setBulkAction(event.target.value) }}>
        <option value={"escolher"} key={3}>{"-- ações em massa"}</option>
        <option value={"reservar"} key={1}>{"Reservar"}</option>
        <option value={"deletar"} key={2}>{"Deletar"}</option>
      </Form.Select>
      <Button className="ms-2" variant="secondary" onClick={() => { handleBulkActionsSelection(bulkAction) }}>Executar</Button>
    </Form.Group>
  )
}
