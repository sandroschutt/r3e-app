import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { Row } from "react-bootstrap";


export default function MapView() {
    const position = [-23.5896, -48.0530];

    return (
        <Row id="map-view" className="flex-column">
            <UserHeader pageTitle={"Dispositivos"} />
            <div className="map-component">
                <MapContainer className="map-container" center={position} zoom={13} scrollWheelZoom={true} zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="bottomright" />
                    <Marker position={position} >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Row>
    )
}