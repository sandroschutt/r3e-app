import "./style.scss";

export function UserList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>User Name</h5>
              <p>
                <strong>Data:</strong>
                <span>31/12/1999</span>
                <strong>Função:</strong>
                <span>cliente</span>
              </p>
              <p>
                <strong>Status:</strong>
                <span>ativo</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function PickupsList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>Motorola Moto G2</h5>
              <p>
                <strong>Data:</strong>
                <span>31/12/1999</span>
                <strong>Cliente:</strong>
                <span>Cliente Teste</span>
              </p>
              <p>
                <strong>Empresa:</strong>
                <span>Empresa Teste</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function DeviceList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>Motorla Moto G2</h5>
              <p>
                <strong>Cliente:</strong>
                <span>Cliente Teste</span>
                <strong>Entrada:</strong>
                <span>31/12/1999</span>
              </p>
              <p>
                <strong>Estado:</strong>
                <span>bom</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getListData() {
  let listData = Array();

  for (let i = 0; i <= 19; i++) {
    listData.push(null);
  }

  return listData;
}
