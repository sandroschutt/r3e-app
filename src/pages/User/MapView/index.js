import "./style.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchForm from "../../../components/forms/SearchForm"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/leaflet.css";

export default function MapView() {
    const position = [-23.5896, -48.0530];

    return (
        <div id="map-view">
            <SearchForm />
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
        </div>
    )
}