import "./style.scss";
import dummyDeviceImg from "./motog2 1.jpg";

export default function DeviceList(props) {
  return (
    <div className="public-devices">
      <div className="pagination">
        <ul className="filters">
          <li>Todos</li>
          <li>Smartphones</li>
          <li>Tablets</li>
          <li>Notebooks</li>
          <li>Computadores</li>
          <li style={{ border: "none" }}>Periféricos</li>
        </ul>
        <p className="page-index">{"Página 1 - 100"}</p>
      </div>
      <div className="device-list">
        <ul>
          {props.data.map((item) => {
            return (
              <li>
                <img src={dummyDeviceImg} />
                <h6>Motorla Moto G2 2014</h6>
                <div>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                  <p>
                    <strong>Key:</strong>
                    <span>value</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
