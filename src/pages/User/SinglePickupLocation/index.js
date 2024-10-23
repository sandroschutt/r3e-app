import "./style.scss";
import axios from "axios";
import Api from "../../../classes/Api";
import PickupLocation from "../../../classes/PickupLocation";
import UserHeader from "../../../components/UserHeader";
import dummyPickupLocationImage from "../../../assets/pickup-locations/pickup-locations.jpg";
import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currentUserRoleProfilesRoute } from "../../../helpers/navigationHelpers";
import { useUserDataContext } from "../../../context/UserDataContext";
import { EditPickupLocationModal } from "../../../components/Modals/PickupLocations/EditPickupLocationModal";
import { DeletePickupLocationModal } from "../../../components/Modals/PickupLocations/DeletePickupLocationModal";
import { SingleViewMap } from "../../../components/Maps";
import { validatePhones } from "../../../validations/validatePhones";

export default function SinglePickupLocation() {
  const { userData } = useUserDataContext();
  const params = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (location === "") {
      PickupLocation.getOne(params.id, setLocation);
    }

    if (location !== "" && address === "") {
      axios
        .get(`https://viacep.com.br/ws/${location.cep}/json/`)
        .then((response) => {
          setAddress(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location, address]);

  function handleLocationAddressInfo() {
    if (location !== "" && address.cep !== undefined)
      return (
        <>
          <p>
            <strong className="me-2">Rua:</strong>
            {`${address.logradouro}, ${location.number}`}
          </p>
          <p>
            <strong className="me-2">Cidade:</strong>
            {address.localidade}
          </p>
          <p>
            <strong className="me-2">Bairro:</strong>
            {address.bairro}
          </p>
          <p>
            <strong className="me-2">CEP:</strong>
            {location.cep}
          </p>
        </>
      );

    return (
      <div className="alert alert-warning" role="alert">
        {`Não foi possível encontrar os dados para o CEP ${location.cep} informado. Certifique-se
        de que o CEP do local de coleta é válido e tente novamente.`}
      </div>
    );
  }

  if (location !== "") {
    return (
      <>
        <Row>
          <UserHeader pageTitle={location.name} />
        </Row>
        <Row>
          <Col className="col-6">
            <Card>
              <Card.Img
                variant="top"
                src={
                  location.image !== null
                    ? Api.endpoint(`uploads/pickup-location/${location.image}`)
                    : dummyPickupLocationImage
                }
              />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">{location.name}</p>
                    <div className="d-flex gap-3">
                      <EditPickupLocationModal location={location} />
                      <DeletePickupLocationModal id={location.id} />
                    </div>
                  </div>
                </Card.Title>
                <p className="my-4">{location.description}</p>
                <div>
                  <p className="d-flex gap-2">
                    <strong>Ramo:</strong>
                    {location.business}
                  </p>
                  <p className="d-flex gap-2">
                    <strong>Filiação:</strong>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/app/users/${location.userId}`);
                      }}
                    >
                      {location.user.name}
                    </a>
                  </p>
                  <p className="d-flex gap-2">
                    <strong>E-mail:</strong>
                    {location.email}
                  </p>
                  <p className="d-flex gap-2">
                    <strong>Phone:</strong>
                    {validatePhones(location.phone)}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-6">
            <Card>
              <Card.Header>
                <p className="h4">Localização</p>
              </Card.Header>
              <Card.Body>
                <div>
                  <SingleViewMap />
                </div>
                <div className="mt-5">{handleLocationAddressInfo()}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
