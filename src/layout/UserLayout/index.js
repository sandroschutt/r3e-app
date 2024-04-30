import "./style.scss";
import MainNav from "../../components/Navigation/MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function UserLayout(props) {
  return (
    <main>
      <MainNav />
      <FontAwesomeIcon className="notifications" icon={faBell} />
      <div className="content">
        {props.children}
      </div>
    </main>
  );
}
