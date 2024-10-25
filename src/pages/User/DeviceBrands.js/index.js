import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import BrandsTable from "../../../components/Tables/Devices/BrandsTable";
import { useEffect, useState } from "react";
import Brands from "../../../classes/Brands";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export default function DeviceBrands() {
  const {userData} = useUserDataContext();
  const navigate = useNavigate();
  const [brands, setBrands] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);

    if (brands !== "" && search !== null && searched === false) {
      const filteredBrands = brands.filter((brand) => searchInObject(brand, search));
      setBrands(filteredBrands);
      setSearched(true);
    }
  }, [brands, search, searched]);

  if(userData.capabilities !== undefined && !userData.capabilities.manageBrands) navigate(`/app/404`);

  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Marcas de Dispositivos"} />
        <SearchResults search={search} />
      </Col>
      <Col>
        <BrandsTable brands={brands}/>
      </Col>
    </Row>
  );
}
