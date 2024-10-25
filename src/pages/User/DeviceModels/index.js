import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModelsTable from "../../../components/Tables/Devices/ModelsTable";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import DeviceModel from "../../../classes/DeviceModel";
import Brands from "../../../classes/Brands";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export default function DeviceModels() {
  const {userData} = useUserDataContext();
  const navigate = useNavigate();
  const [models, setModels] = useState("");
  const [brands, setBrands] = useState([]);

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (models === "") DeviceModel.getAll(setModels);
    if (brands[0] === undefined) Brands.getAll(setBrands);

    if (models !== "" && search !== null && searched === false) {
      const filteredModels = models.filter((model) =>
        searchInObject(model, search)
      );
      setModels(filteredModels);
      setSearched(true);
    }
  }, [models, brands, search, searched]);

  if(userData.capabilities !== undefined && !userData.capabilities.manageDeviceModels) navigate(`/app/404`);

  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Modelos de Dispositivos"} />
        <SearchResults search={search} />
      </Col>
      <Col>
        <ModelsTable models={models} brands={brands} />
      </Col>
    </Row>
  );
}
