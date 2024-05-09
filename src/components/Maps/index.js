import "./style.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";

export function DefaultMap() {
    const position = [-23.5896, -48.0530];

    return (
        <div className="map-component default-map">
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
    )
}

export function SingleViewMap() {
    const position = [-23.5896, -48.0530];

    return (
        <div className="map-component single-view-map">
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
    )
}

export function ListViewMap() {
    const position = [-23.5896, -48.0530];

    return (
        <div className="map-component list-view-map">
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
    )
}