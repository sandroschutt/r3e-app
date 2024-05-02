export function DeviceSpecifications() {
  return (
    <div>
      <h4>Especificações</h4>
      <p>
        <label className="main-label">Processador:</label>
        <select name="manufacturer">
          <option>Intel</option>
          <option>AMD</option>
          <option>Qualcom</option>
          <option>MediaTek</option>
          <option>Apple</option>
        </select>

        <select name="family">
          <option>Atom</option>
          <option>Pentium</option>
          <option>i3</option>
          <option>i5</option>
          <option>i7</option>
          <option>i9</option>
        </select>

        <select name="generation">
          <option>1ª Geração</option>
          <option>2ª Geração</option>
          <option>3ª Geração</option>
          <option>4ª Geração</option>
          <option>5ª Geração</option>
          <option>6ª Geração</option>
          <option>7ª Geração</option>
          <option>8ª Geração</option>
          <option>9ª Geração</option>
        </select>
      </p>

      <p>
        <label className="main-label">RAM:</label>
        <select name="ram-type">
          <option>DDR3</option>
          <option>DDR4</option>
          <option>DDR5</option>
        </select>

        <select name="ram-memory">
          <option>4GB</option>
          <option>6GB</option>
          <option>8GB</option>
          <option>12GB</option>
          <option>16GB</option>
          <option>+16GB</option>
        </select>

        <labl>GPU:</labl>
        <select name="gpu">
          <option>SIM</option>
          <option>NÃO</option>
        </select>
      </p>

      <p>
        <label className="main-label">Display:</label>
        <select name="screen-type">
          <option>TCN</option>
          <option>IPS-LCD</option>
          <option>LED</option>
          <option>Outros</option>
        </select>

        <select name="screen-size">
          <option>14"</option>
          <option>15"</option>
          <option>17"</option>
          <option>+17"</option>
        </select>
      </p>

      <p>
        <label className="main-label">Bateria:</label>
        <select name="battery">
          <option>SIM</option>
          <option>NÃO</option>
        </select>

        <label>Capacidade:</label>
        <select name="screen-size">
          <option>6500MAh</option>
          <option>7000MAh</option>
          <option>7500MAh</option>
          <option>8000MAh</option>
          <option>+8000MAh</option>
        </select>
      </p>
    </div>
  );
}

export function DeviceTests() {
  return (
    <div>
      <h4>Testes</h4>
      <p>
        <label className="main-label">Liga:</label>
        <select name="power-status">
          <option>SIM</option>
          <option>NÃO</option>
        </select>
      </p>

      <p>
        <label className="main-label">Internet:</label>
        <select name="ram-type">
          <option>SIM</option>
          <option>NÃO</option>
        </select>

        <select name="ram-memory">
          <option>3GHz</option>
          <option>4GHz</option>
          <option>5GHz</option>
        </select>
      </p>

      <p>
        <label className="main-label">Foramatado:</label>
        <select name="disk-status">
          <option>SIM</option>
          <option>NÃO</option>
        </select>
      </p>

      <p>
      <label className="main-label">Scaneado:</label>
        <select name="disk-analisys">
          <option>SIM</option>
          <option>NÃO</option>
        </select>
      </p>

      <p>
        <label className="main-label">Danos:</label>
        <select name="damage">
          <option>SIM</option>
          <option>NÃO</option>
        </select>

        <select name="damage-part">
          <option>Teclado</option>
          <option>Touchpad</option>
          <option>Tela</option>
          <option>Bootloader</option>
          <option>USB</option>
          <option>HDMI</option>
          <option>VGA</option>
          <option>Cabo de energia</option>
          <option>Carregador</option>
          <option>Placa de áudio</option>
          <option>Placa de rede</option>
        </select>
      </p>
    </div>
  );
}

export function DeviceEvaluation() {
  return (
    <div>
      <h4>Avaliação</h4>
      <p>
        <label className="main-label">Estado:</label>
        <select name="device-conditions">
          <option>Péssimo</option>
          <option>Ruim</option>
          <option>Regular</option>
          <option>Bom</option>
          <option>Ótimo</option>
        </select>
      </p>

      <p>
        <label className="main-label">TR:</label>
        <select name="device-return">
          <option>descarte</option>
          <option>reaproveitamento</option>
          <option>remoção de peças</option>
          <option>reuso</option>
        </select>
      </p>
    </div>
  );
}
