import "./style.scss";
import dummyDeviceImg from "./dummy-single-device-mobile.jpg";
import dummyMapImg from "./map.jpg";

export default function DeviceSingle() {
  return (
    <div className="single-device">
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
        </div>
        <p className="single-device--badge">C</p>
      </div>
      <div className="single-device--description">
        <h4>Descrição</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="single-device--map">
        <h4>Localização e distância</h4>
        <img src={dummyMapImg} />
      </div>
    </div>
  );
}
