import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModelsTable from "../../../components/Tables/Devices/ModelsTable";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import DeviceModel from "../../../classes/DeviceModel";
import Brands from "../../../classes/Brands";

export default function DeviceModels() {
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
