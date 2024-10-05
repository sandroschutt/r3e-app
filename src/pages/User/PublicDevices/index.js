import "./style.scss";
import Device from "../../../classes/Device";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import { AdminDevicesTable } from "../../../components/Tables";
import { useParams } from "react-router-dom";
import {
  getSearchQueryParams,
  searchInObject,
  SearchResults,
} from "../../../components/forms/SearchForm";
import { DevicesList } from "../../../components/Lists/DevicesList";
import Brands from "../../../classes/Brands";
import Models from "../../../classes/Models";

export default function PublicDevices() {
  const { userData } = useUserDataContext();
  const [devices, setDevices] = useState("");
  const params = useParams();

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  const [models, setModels] = useState("");
  const [brands, setBrands] = useState("");

  useEffect(() => {
    if (userData.role !== undefined && devices === "") {
      if (userData.role === "Admin") Device.getAll(setDevices);
      if (userData.role === "Cliente")
        Device.getUserDevices(userData.id, setDevices);
      if (userData.role === "Empresa" || userData.role === "Ong")
        Device.getPublicDevices(setDevices);
      if (userData.role === "Escola" || userData.role === "Ong")
        Device.getStudentEligibleDevices(setDevices);
    }

    if (devices !== "" && search !== null && searched === false) {
      const filteredDevices = devices.filter((device) =>
        searchInObject(device, search)
      );
      setDevices(filteredDevices);
      setSearched(true);
    }

    if (brands === "") Brands.getAll(setBrands);
    if (models === "") Models.getAll(setModels);
  }, [userData, devices, brands, models, params, search, searched]);

  function listRender(devices) {
    if (devices !== "" && userData.role === "Admin")
      return <AdminDevicesTable devices={devices} />;
    if (
      devices !== "" &&
      userData.role !== "Admin" &&
      userData.role !== "Escola"
    )
      return <DevicesList items={devices} brands={brands} models={models} />;
    if (devices !== "" && userData.role === "Escola")
      return <DevicesList items={devices} brands={brands} models={models} />;
    return <p>Aguardando dados...</p>;
  }

  if (devices !== "")
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
