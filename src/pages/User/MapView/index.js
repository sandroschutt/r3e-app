import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import { Row } from "react-bootstrap";
import { DefaultMap } from "../../../components/Maps";


export default function MapView() {
    return (
        <Row id="map-view" className="flex-column">
            <UserHeader pageTitle={"Dispositivos"} />
            <DefaultMap />
        </Row>
    )
}