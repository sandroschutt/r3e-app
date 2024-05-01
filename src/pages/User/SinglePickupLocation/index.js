import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DummyPickupLocationMap from "../../../assets/images/dummy-single-pickup-location-map.jpg";

export default function SinglePickupLocation() {
  return (
    <>
      <h1>{"Pontos de Coleta / Cooperita"}</h1>
      <div className="single-pickup-location">
        <div className="single-pickup-location--card">
          <div className="card-header">
            <h2>Cooperita</h2>
          </div>

          <div className="card-body">
            <p>
              <strong>Endereço:</strong> Lorem ipsum dolor sit amet, 300, Lorem
              Ipsum, Lorem Ipsum - LP, Lorem
            </p>
            <p>
              <strong>CEP:</strong> 99999-999
            </p>
            <p>
              <strong>Resíduos:</strong> plástico, vidro, papel,
              eletroeletrônicos
            </p>
            <p>
              <strong>Filiação:</strong> Cooperita
            </p>
            <p>
              <strong>CNPJ:</strong> 9999999999
            </p>
          </div>
        </div>
        <div className="single-pickup-location--description">
          <h4>Descrição</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="single-pickup-location--map">
          <h4>Localização e Distância</h4>
          <img src={DummyPickupLocationMap} alt="" />
        </div>
      </div>
    </>
  );
}
