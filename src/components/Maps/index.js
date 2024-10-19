import "./style.scss";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../../assets/images/location-dot-solid.svg";
import { Alert } from "react-bootstrap";

export function DefaultMap() {
  const position = [-23.5896, -48.053];
  const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });

  return (
    <div className="map-component default-map">
      <MapContainer
        className="map-container"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export function SingleViewMap() {
  const position = [-23.5896, -48.053];
  const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });

  return (
    <div className="map-component single-view-map">
      <MapContainer
        className="map-container"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export function ListViewMap(props) {
  const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });

  if (props.geolocation === null) {
    return (
      <Alert variant={"danger"}>
        <p>
          Nenhum dado de geolocalização encontrado para o endereço do cliente.
          Tente atualizar as informações de endereço baseado nos dados do{" "}
          <a href="https://www.openstreetmap.org/" target="_blank">Open Street Maps</a>, que
          fornece os dados de geolocalização para o R3E.
        </p>
      </Alert>
    );
  }

  if (props.geolocation) {
    return (
      <div className="map-component list-view-map">
        <MapContainer
          className="map-container"
          center={props.geolocation}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          <Marker position={props.geolocation} icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } else return <Alert variant={"warning"}>Aguardando dados do mapa...</Alert>;
}
