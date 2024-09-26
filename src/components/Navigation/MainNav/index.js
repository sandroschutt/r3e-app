import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faTableColumns,
  faLocationDot,
  faTablet,
  faTruck,
  faRecycle,
  faPowerOff,
  faGear,
  faCode,
  faWrench,
  faUserGroup,
  faGraduationCap,
  faSeedling,
  faLaptopFile,
} from "@fortawesome/free-solid-svg-icons";

export default function MainNav() {
  const { userData} = useUserDataContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userOptions, setUserOptions] = useState([
    ["Home", "", faTableColumns],
    ["Mapa", "map", faLocationDot],
    ["Dispositivos", "devices", faTablet],
    ["Coletas", "pickups", faTruck],
    ["Pontos de Coleta", "pickup-locations", faRecycle],
    ["Configurações", "settings", faGear],
  ]);

  let view = window.location.pathname.split("/");
  view = view[view.length - 1];

  useEffect(() => {
    if (userData.id !== undefined) {
      setUserName(userData.name);
      setUserRole(userData.role);

      if (userRole.toLowerCase() === "technician") {
        setUserOptions([
          ["Home", "", faTableColumns],
          ["Lista de dispositivos", "devices", faTablet],
          ["Logout", "logout", faPowerOff],
        ]);
      }

      if (userRole.toLowerCase() === "admin") {
        setUserOptions([
          ...userOptions,
          ["Modelos", "device-models", faLaptopFile],
          ["Oficina", "workshop", faWrench],
          ["Usuários", "users", faUserGroup],
          ["Estudantes", "students", faGraduationCap],
          ["Tratativas de Retorno", "recycling-settings", faSeedling],
          ["Integrações", "integrations", faCode],
          ["Logout", "logout", faPowerOff],
        ]);
      }

      if (userRole.toLowerCase() === "empresa") {
        setUserOptions([
          ...userOptions,
          ["Integrações", "integrations", faCode],
          ["Logout", "logout", faPowerOff],
        ]);
      }
    }
  }, [userData, userRole]);

  if(userRole !== "") {
    return (
      <nav id="main-nav" className="sticky-top">
        <Row className="nav-container flex-column justify-content-start gap-1">
          <Col
            className={`profile col-1 d-flex flex-row w-100 p-3 column-gap-3 align-items-center`}
            style={{
              backgroundColor: view === "profile" ? "var(--palette-green)" : "",
            }}
            onClick={() => {
              navigate(`profile`);
            }}
          >
            <FontAwesomeIcon
              className={`icon ${view === "profile" ? "text-white" : ""}`}
              style={{ height: "32px" }}
              icon={faCircleUser}
            />
            <div className={"info"}>
              <h6 className="text-light">{userName}</h6>
              <p className={view === "profile" ? "text-white" : ""}>{userRole}</p>
            </div>
          </Col>

          <Col className="col-10 w-100 p-0">
            <ul className="options ps-0">
              {userOptions.map((option, index) => {
                let optionObj = createOptionObject(
                  option[0],
                  option[1],
                  option[2]
                );
                return (
                  <li
                    className="row column-gap-2 px-3 py-2 align-items-center"
                    key={index}
                    onClick={() => {
                      navigate(optionObj.link, { relative: "path" });
                    }}
                  >
                    <Col className="col-1 p-0 ">{optionObj.icon}</Col>
                    <Col>
                      <p className={`nav-link p-0 text`}>{optionObj.label}</p>
                    </Col>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </nav>
    );
  }
}

function createOptionObject(label = String, link = String, icon = Object) {
  let optionObj = {
    label: label,
    link: link,
    icon: (
      <FontAwesomeIcon
        className="icon"
        style={{ height: "16px" }}
        icon={icon}
      />
    ),
  };

  return optionObj;
}
