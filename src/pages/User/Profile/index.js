/**
 * If NOT admin, return UserDashboard else return AdminDashboard
 */

import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import profileDummyAvatar from "../../../assets/images/r3d3_profile_avatar.png";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Client from "../../../classes/Client";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [neighborhoodAddress, setNeighborhoodAddress] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [countryAddress, setCountryAddress] = useState("");
  const [zipcode, setZipCode] = useState("");

  useEffect(() => {
    if(userData.user !== undefined) {
      let data = userData.user;
      let address = userData.address;
      let document = userData.document;

      setUserName(data.name);
      setUserRole(data.role);
      setUserEmail(data.email);
      setUserPhone(data.phone);
      setCreatedAt(data.createdAt);
      setStreetAddress(address.street);
      setNeighborhoodAddress(address.neighborhood);
      setCityAddress(address.city);
      setStateAddress(address.state);
      setCountryAddress(address.country);
      setZipCode(address.zipcode);
      setDocType(document.type);
      setDocNumber(document.documentNumber);
    }
  }, [userData])

  return (
    <div className="user-dashboard-wrapper">
      <Row className="user-card">
        <Col className="col-xl-2 p-0 text-leaft">
          <img src={profileDummyAvatar} alt="" />
        </Col>
        <Col>
          <h2 className="mt-4">{userName}</h2>
          <div className="card-text d-flex">
            <p className="user-role">{userRole}</p>
            <span className="mt-1 fs-medium">{userEmail}</span>
          </div>
          <div className="card-text d-flex">
            <p className="edit-profile">Editar perfil</p>
            <FontAwesomeIcon icon={faPen} size={"sm"} className="edit-icon" />
          </div>
        </Col>
      </Row>
      <Row className="user-info">
        <Col className="col-3">
          <h3 className="mb-3">Identidade</h3>
          <p className="mb-0">
            <span className="key">Nome:</span>
            <span>{userName}</span>
          </p>
          <p className="mb-0">
            <span className="key">Doc:</span>
            <span>{docType.toUpperCase()}</span>
          </p>
          <p className="mb-0">
            <span className="key">Nº:</span>
            <span>{docNumber}</span>
          </p>
          <p className="mb-0">
            <span className="key">Data Cad:</span>
            <span>{createdAt}</span>
          </p>
        </Col>
        <Col className="col-3">
          <h3 className="mb-3">Endereço</h3>
          <p className="mb-0">
            <span className="key">Rua:</span>
            <span>{streetAddress}</span>
          </p>
          <p className="mb-0">
            <span className="key">Bairro:</span>
            <span>{neighborhoodAddress}</span>
          </p>
          <p className="mb-0">
            <span className="key">Cidade:</span>
            <span>{cityAddress}</span>
          </p>
          <p className="mb-0">
            <span className="key">Estado:</span>
            <span>{stateAddress}</span>
          </p>
          <p className="mb-0">
            <span className="key">País:</span>
            <span>{countryAddress}</span>
          </p>
          <p className="mb-0">
            <span className="key">CEP:</span>
            <span>{zipcode}</span>
          </p>
        </Col>
        <Col className="col-3">
          <h3 className="mb-3">Contato</h3>
          <p className="mb-0">
            <span className="key">E-mail Principal:</span>
            <span>{userEmail}</span>
          </p>
          <p className="mb-0">
            <span className="key">Email Secundário:</span>
            <span>joaodasilva@outlook.com</span>
          </p>
          <p className="mb-0">
            <span className="key">Celular:</span>
            <span>{userPhone}</span>
          </p>
        </Col>
      </Row>
    </div>
  );
}
