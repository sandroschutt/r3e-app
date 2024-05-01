import "./style.scss";
import DeviceList from "../../../components/Device/DeviceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function PickupLocations() {
  let dummyDevices = Array();

  for (let i = 0; i <= 29; i++) {
    dummyDevices.push(null);
  }

  return (
    <div id="pickup-locations-view">
      <header>
        <h1>Pontos de Coleta</h1>
      </header>

      <div className="pickup-location--list-view">
        <div className="list-view">
          <DeviceList data={dummyDevices} view={"pickup-locations"} />
        </div>
        <div className="item-view">
          <div className="item-header">
            <h3>Coperita</h3>
          </div>
          <div className="item-body">
            <div>
              <p>
                <strong>Descrição:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </p>

              <p>
                <strong>Endereço:</strong> Lorem ipsum dolor sit amet, 300,
                Lorem Ipsum, Lorem Ipsum - LP, Lorem
              </p>

              <p>
                <strong>CEP:</strong> 99999-999
              </p>
            </div>

            <div className="actions">
              <button>
                <FontAwesomeIcon icon={faPenToSquare} />
                <span>Editar</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faPowerOff} />
                <span>Desativar</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faTrashCan} />
                <span>Excluir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
