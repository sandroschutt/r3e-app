import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLink,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MainNav() {
  const [navWidth, setNavWidth] = useState("nav-width-open");
  const [profileIconWidth, setProfileIconWidth] = useState("64px");
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
    <nav id="main-nav" className={navWidth}>
      <div className="profile">
        <FontAwesomeIcon
          className="icon"
          style={{ height: profileIconWidth }}
          icon={faCircleUser}
        />
        <div className={"info " + showHideItem}>
          <h4>Nome de usuário</h4>
          <p>Role</p>
        </div>
      </div>
      <ul>
        {menuOptions.map((option) => {
          return (
            <li>
              <FontAwesomeIcon icon={faLink} />
              <a className={"nav-link " + showHideItem}>Item 1</a>
            </li>
          )
        })}
        <li className="hide">
          <FontAwesomeIcon className="hide-icon" icon={faChevronLeft} />
          {/* Isso não deve ser um link */}
          <a
            className={"nav-link " + showHideItem}
            onClick={() => {
              hideNavigation();
            }}
          >
            <span>Collapse</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}


// {
//   icon: <Icon />
//   label: "label"
// }