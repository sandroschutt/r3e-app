import "./style.scss";
import Info from "./Info";
import Address from "./Address";
import { Col, Row } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function UserInfoForm() {
  // const [reqBody, setReqBody] = useState({});
  // const [info, setInfo] = useState([]);
  // const [address, setAddress] = useState([]);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const navigate = useNavigate();

  return (
    <Col className="d-flex">
      <form id="userInfoForm">
        <Row>
          <Info />
          <Address />
        </Row>
      </form>
    </Col>
  );
}
