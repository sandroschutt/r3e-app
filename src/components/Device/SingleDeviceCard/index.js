import "./style.scss";
import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faTruck,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons";

export default function SingleDeviceCard() {
  return (
    <div className="single-device--card">
      <img src={dummyDeviceImg} />
      <div className="single-device--data">
        <h2>Motorola Moto G2</h2>
        <p>
          <span>
            <strong>Marca:</strong>
          </span>{" "}
          <span>Motorola</span>
        </p>
        <p>
          <span>
            <strong>Ano:</strong>
          </span>{" "}
          <span>2015</span>
        </p>
        <p>
          <span>
            <strong>Estado:</strong>
          </span>{" "}
          <span>bom</span>
        </p>
        <p>
          <span>
            <strong>Uso:</strong>
          </span>{" "}
          <span>7 anos</span>
        </p>
        <p>
          <span>
            <strong>Estado:</strong>
          </span>{" "}
          <span>usável</span>
        </p>

        <p>
          <span>
            <strong>Proprietário:</strong>
          </span>
          <span>Nome do Proprietário(a)</span>
        </p>

        <p>
          <span>
            <strong>Endereço:</strong>
          </span>
          <span>Rua Exemplo, 200, Bairro Exemplo</span>
        </p>

        <div className="single-device--actions">
          <p>
            <FontAwesomeIcon icon={faTruck} />
            <span>Icon text</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faMessage} />
            <span>Icon text</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
            <span>Icon text</span>
          </p>
        </div>
      </div>
      <p className="single-device--badge">C</p>
    </div>
  );
}
