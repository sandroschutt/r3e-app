import "./style.scss";
import FilterUserPickups from "../../../components/Device/DeviceList/FilterUserPickups";
import DeviceList from "../../../components/Device/DeviceList";
import DummyDeviceImage from "../../../assets/images/motog2 1.jpg";
import DummyDeviceMap from "../../../assets/images/pickups-dummy-map.png";

export default function Pickups() {
  let dummyDevices = Array();

  for (let i = 0; i <= 29; i++) {
    dummyDevices.push(null);
  }

  return (
    <div id="pickups-view">
      <header>
        <h1>Coletas</h1>
        <input type="text" placeholder="Pesquise algo..." />
      </header>

      <div className="pagination">
        <ul>
          <FilterUserPickups />
        </ul>
        <p className="page-index">{"Página 1 - 100"}</p>
      </div>

      <div className="pickpus--list-view">
        <div className="deive-list">
          <DeviceList data={dummyDevices} view={"pickups"} />
        </div>
        <div className="pickups--view-item">
          <div className="item-header">
            <img src={DummyDeviceImage} alt="" />
            <div className="text">
              <div className="main">
                <h5>{"Motorola Moto G2 2014"}</h5>
              </div>
              <p className="details">
                <span>Ver</span>
                <span>Contato</span>
                <span>Cancelar</span>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Proprietário:</strong> Cliente Teste
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Endereço:</strong> Rua Teste Batista Siqueira
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Data:</strong> 31/12/1999
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Coleta:</strong> 01/01/2000
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="item-body">
            <img src={DummyDeviceMap} />
          </div>
        </div>
      </div>
    </div>
  );
}
