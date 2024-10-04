import "./style.scss";
import Device from "../../../classes/Device";
import { PublicDevicesList } from "../../../components/Lists";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { AdminDevicesTable } from "../../../components/Tables";
import { useParams } from "react-router-dom";
import Admin from "../../../classes/Admin";
import {
  getSearchQueryParams,
  searchInObject,
  SearchResults,
} from "../../../components/forms/SearchForm";

export default function PublicDevices() {
  const { userData } = useUserDataContext();
  const [devices, setDevices] = useState("");
  const params = useParams();

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (userData.role !== undefined && devices === "") {
      if (userData.role === "Admin") Device.getAll(setDevices);
      if (userData.role === "Cliente")
        Device.getUserDevices(userData.id, setDevices);
      if(userData.role === "Empresa" || userData.role === "Ong") Device.getPublicDevices(setDevices)
    }

    if (devices !== "" && search !== null && searched === false) {
      const filteredDevices = devices.filter((device) =>
        searchInObject(device, search)
      );
      setDevices(filteredDevices);
      setSearched(true);
    }
  }, [userData, devices, params, search, searched]);

  function listRender(devices) {
    if (devices !== "" && userData.role !== "Admin") {
      return <PublicDevicesList devices={devices} />;
    } else if (devices !== "" && userData.role === "Admin") {
      return <AdminDevicesTable devices={devices} />;
    } else {
      return <p>Aguardando dados...</p>;
    }
  }

  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Dispositivos"} />
        <SearchResults search={search} />
      </Col>
      <Col>{listRender(devices)}</Col>
    </Row>
  );
}
