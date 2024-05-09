import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLink,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function MainNav() {
  const [navWidth, setNavWidth] = useState("nav-width-open");
  const [profileIconWidth, setProfileIconWidth] = useState("48px");
  const [showHideItem, setShowHideItem] = useState("");
  const menuOptions = [];

  for (let i = 0; i <= 9; i++) {
    menuOptions.push(null)
  }

  function hideNavigation() {
    if (navWidth === "nav-width-open") {
      setNavWidth("nav-width-closed");
      setProfileIconWidth("32px");
      setShowHideItem("hidden");
    } else {
      setNavWidth("nav-width-open");
      setProfileIconWidth("64px");
      setShowHideItem("");
    }
  }

  return (
    <nav id="main-nav">
      <Row className="nav-container flex-column position-fixed">
        <Col className="profile col-4 d-flex flex-row w-100 px-1 pe-5 pt-4 pb-0 column-gap-2 align-items-center">
          <FontAwesomeIcon
            className="icon"
            style={{ height: profileIconWidth }}
            icon={faCircleUser}
          />
          <div className={"info " + showHideItem}>
            <h4>Nome de usuário</h4>
            <p>Role</p>
          </div>
        </Col>

        <Col className="col-11 p-1 justify-end">
          <ul className="h-100">
            {menuOptions.map((option) => {
              return (
                <li className="row column-gap-2 p-1">
                  <Col className="col-1 p-0"><FontAwesomeIcon icon={faLink} /></Col>
                  <Col><a className={"nav-link p-0" + showHideItem} href="/user">Item 1</a></Col>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col className="p-1">
          <ul className="p-0">
            <li className="hide position-absolute bottom-0 row column-gap-2 p-1">
              <Col className="col-1 p-0"><FontAwesomeIcon className="hide-icon" icon={faChevronLeft} /></Col>
              <Col className="p-0">
                <p
                  className={"nav-link " + showHideItem}
                  onClick={() => {
                    hideNavigation();
                  }}
                >
                  <span>Collapse</span>
                </p>
              </Col>
            </li>
          </ul>
        </Col>
      </Row>
    </nav>
  );
}


// {
//   icon: <Icon />
//   label: "label"
// }