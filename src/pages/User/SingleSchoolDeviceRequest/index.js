import { useUserDataContext } from "../../../context/UserDataContext";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";
import { useNavigate, useParams } from "react-router-dom";
import UserHeader from "../../../components/UserHeader";
import { validatePhones } from "../../../validations/validatePhones";
import { validateDate } from "../../../validations/validateDate.js";
import Api from "../../../classes/Api.js";
import computerPlaceholder from "../../../assets/images/computer-placeholder.avif";
import { EditSchoolDeviceRequestModal } from "../../../components/Modals/Schedule/EditSchoolDeviceRequestModal.js";

export default function SingleSchoolDeviceRequest() {
  const { userData } = useUserDataContext();
  const [singleDeviceRequest, setSingleDeviceRequest] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  console.log(singleDeviceRequest)

  useEffect(() => {
    if (
      userData !== "" &&
      userData.role !== "Admin" &&
      userData.role !== "Escola"
    )
      navigate(`/app/404`);

    if (singleDeviceRequest === "")
      SchoolDeviceRequets.getOne(params.id, setSingleDeviceRequest);
  }, [singleDeviceRequest]);

  function handleAdminActions() {
    if (
      userData.role === "Admin" &&
      singleDeviceRequest.status !== "aceito" &&
      singleDeviceRequest.status !== "negado"
    )
      return (
        <div className="d-flex gap-3">
          <Button
            variant="danger"
            onClick={() => SchoolDeviceRequets.reprove(singleDeviceRequest.id)}
          >
            Reprovar
          </Button>
          <Button
            variant="primary"
            onClick={() => SchoolDeviceRequets.approve(singleDeviceRequest.id)}
          >
            Contemplar
          </Button>
        </div>
      );
  }

  function handleDeviceImage(device) {
    if (device.photo === null) {
      return computerPlaceholder;
    }

    return Api.endpoint(`uploads/device/${device.photo}`);
  }

  function handleDeviceRequestStatus() {
    if (
      userData.role === "Admin" &&
      singleDeviceRequest.status === "em análise"
    )
      return <EditSchoolDeviceRequestModal schoolRequest={singleDeviceRequest}/>;

    const acceptedMsg = `O pedido de coleta foi aceito pelo administrador. Você pode retirar o dispositivo na oficina do R3E ou aguardar a entrega caso tenha optado por receber o dispositivo. Esperamos que o estudante ${singleDeviceRequest.student.name} aproveite seu novo computador para estudos!`;
    const deniedMsg = `O pedido de coleta foi negado pelo administrador. Isso pode ter acontecido por conta das condições socioeconômicas do estudante, desempenho, ou porque o sistema identificou um estudante mais necessitado. Isso não impede que você requisite um novo dispositivo para o estudante ${singleDeviceRequest.student.name}.`;

    if(singleDeviceRequest.status !== "em análise") return (
      <Alert
        variant={singleDeviceRequest.status === "aceito" ? "success" : "danger"}
      >
        <p className="mb-0 p-4">
          {singleDeviceRequest.status === "aceito" ? acceptedMsg : deniedMsg}
        </p>
      </Alert>
    );
  }

  function handleAdminEditRequest() {
    if (userData.role === "Admin")
      return <EditSchoolDeviceRequestModal schoolRequest={singleDeviceRequest}/>
  }

  if (singleDeviceRequest !== "")
    return (
      <>
        <Row>
          <UserHeader pageTitle={`Pedido de Doação #${params.id}`} />
        </Row>
        <Row className="single-school-device-request">
          <Col className="col-12 d-flex gap-3 mb-3">
            <Card className="px-4 col col-2">
              <Card.Body>
                <p className="mb-2">
                  <strong>Status:</strong>
                </p>
                <p className="h4 text-info">{singleDeviceRequest.status}</p>
              </Card.Body>
            </Card>
            <Card className="px-4 col col-2">
              <Card.Body>
                <p className="mb-2">
                  <strong>Retirada:</strong>
                </p>
                <p className="h4 text-info">
                  {singleDeviceRequest.colect !== null && singleDeviceRequest.colect !== false
                    ? "sim"
                    : "não"}
                </p>
              </Card.Body>
            </Card>
            <Card className="px-4 col col-2">
              <Card.Body>
                <p className="mb-2">
                  <strong>Data de criação:</strong>
                </p>
                <p className="h4 text-info">
                  {validateDate(singleDeviceRequest.createdAt)}
                </p>
              </Card.Body>
            </Card>
            <Card className="px-4 col col-2">
              <Card.Body>
                <p className="mb-2">
                  <strong>Data da coleta:</strong>
                </p>
                <p className="h4 text-info">
                  {singleDeviceRequest.dateColect === null
                    ? "não definida"
                    : validateDate(singleDeviceRequest.dateColect)}
                </p>
              </Card.Body>
            </Card>
            <Card className="px-4 col col-2">
              <Card.Body>
                <p className="mb-2">
                  <strong>Data coletado:</strong>
                </p>
                <p className="h4 text-info">
                  {singleDeviceRequest.dateColected !== null
                    ? validateDate(singleDeviceRequest.dateColected)
                    : "não definida"}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column gap-3">
            <Card>
              <Card.Header className="h5">Estudante</Card.Header>
              <Card.Body className="p-4">
                <Card.Title>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(
                        `/app/students/${singleDeviceRequest.studentId}`
                      );
                    }}
                  >
                    {singleDeviceRequest.student.name}
                  </a>
                </Card.Title>
                <ul className="ps-0" style={{ listStyle: "none" }}>
                  <li className="mb-2">
                    <strong>Idade: </strong>
                    {singleDeviceRequest.student.age}
                  </li>
                  <li className="mb-2">
                    <strong>Grau: </strong>
                    {singleDeviceRequest.student.grade}
                  </li>
                  <li className="mb-2">
                    <strong>CR: </strong>
                    {`${singleDeviceRequest.student.performanceIndex}`}
                  </li>
                  <li className="mb-2">
                    <strong>Frequência: </strong>
                    {`${singleDeviceRequest.student.frequency}%`}
                  </li>
                  <li className="mb-2">
                    <strong>Família: </strong>
                    {singleDeviceRequest.student.familyMembers}
                  </li>
                  <li className="mb-2">
                    <strong>Renda familiar: </strong>
                    {`R$${parseFloat(
                      singleDeviceRequest.student.familyIncome
                    )}`}
                  </li>
                  <li className="mb-2">
                    <strong>E-mail: </strong>
                    {singleDeviceRequest.student.email}
                  </li>
                  <li className="mb-2">
                    <strong>Telefone: </strong>
                    {validatePhones(singleDeviceRequest.student.phone)}
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Escola</Card.Header>
              <Card.Body className="p-4">
                <Card.Title>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/app/users/${singleDeviceRequest.schoolId}`);
                    }}
                  >
                    {singleDeviceRequest.school.name}
                  </a>
                </Card.Title>
                <ul className="ps-0" style={{ listStyle: "none" }}>
                  <li className="mb-2">
                    {`${singleDeviceRequest.school.address.street}, ${singleDeviceRequest.school.address.number}, ${singleDeviceRequest.school.address.neighborhood}, ${singleDeviceRequest.school.address.city} - ${singleDeviceRequest.school.address.state}`}
                  </li>
                  <li className="mb-4">
                    {singleDeviceRequest.school.address.zipcode}
                  </li>
                  <li className="mb-2">
                    <strong>E-mail: </strong>
                    {singleDeviceRequest.school.email}
                  </li>
                  <li className="mb-2">
                    <strong>Telefone: </strong>
                    {validatePhones(singleDeviceRequest.school.phone)}
                  </li>
                </ul>
              </Card.Body>
            </Card>
            {handleDeviceRequestStatus()}
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">Dispositivo</Card.Header>
              <Card.Body className="p-4">
                <Card.Title>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/app/devices/${singleDeviceRequest.deviceId}`);
                    }}
                  >{`${singleDeviceRequest.device.brand.name} ${singleDeviceRequest.device.model.name}`}</a>
                </Card.Title>
                <div className="d-flex gap-3">
                  <p className="mb-0">
                    <strong>Tipo:</strong> {singleDeviceRequest.device.type}
                  </p>
                  <p className="mb-0">
                    <strong>Ano:</strong>{" "}
                    {singleDeviceRequest.device.model.year}
                  </p>
                  <p className="mb-0">
                    <strong>Estado:</strong> {singleDeviceRequest.device.state}
                  </p>
                  <p className="mb-0">
                    <strong>Finalidade:</strong>{" "}
                    {singleDeviceRequest.device.returnProccess.finality}
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src={handleDeviceImage(singleDeviceRequest.device)}
                    className="my-5"
                    style={{ width: "80%" }}
                  />
                </div>
                <Card.Text className="mb-3">
                  {singleDeviceRequest.device.returnProccess.description}
                </Card.Text>
                {handleAdminActions()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
}
