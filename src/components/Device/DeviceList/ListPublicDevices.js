import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";

export default function ListPublicDevices() {
  return (
    <li>
      <img src={dummyDeviceImg} />
      <h6>Moto G2</h6>
      <div>
        <p>
          <strong>Marca:</strong><br/>
          <span>Motorola</span>
        </p>
        <p>
          <strong>Ano:</strong><br/>
          <span>2014</span>
        </p>
        <p>
          <strong>Proprietário:</strong><br/>
          <span>Nome Cliente</span>
        </p>
        <p>
          <strong>Estado:</strong><br/>
          <span>bom</span>
        </p>
        <p>
          <strong>Local:</strong><br/>
          <span>Rua Exemplo, 200, Bairro Exemplo</span>
        </p>
      </div>
    </li>
  );
}
