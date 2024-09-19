import { useState } from "react";
import { Form } from "react-bootstrap";

export function DeviceSpecifications() {
  // Specs
  const [manufacturer, setManufacturer] = useState("");
  const [family, setFamily] = useState("");
  const [generation, setGeneration] = useState("");

  // RAM
  const [ramType, setRamType] = useState("");
  const [ramMemory, setRamMemory] = useState("");

  // GPU
  const [gpu, setGpu] = useState("");

  // Display
  const [screenType, setScreenType] = useState("");
  const [screenSize, setScreenSize] = useState("");

  // Battery
  const [battery, setBattery] = useState("");

  // Capacity
  const [capacity, setCapacity] = useState("");

  return (
    <Form.Group className="w-100 mb-5 p-5 border border">
      <h2 className="mb-4">Especificações</h2>
        <Form.Label className="main-label">Processador:</Form.Label>
        <Form.Select className="mb-3" name="manufacturer" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>Intel</option>
          <option value={"tobeset"}>AMD</option>
          <option value={"tobeset"}>Qualcom</option>
          <option value={"tobeset"}>MediaTek</option>
          <option value={"tobeset"}>Apple</option>
        </Form.Select>

        <Form.Select className="mb-3" name="family" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>Atom</option>
          <option value={"tobeset"}>Pentium</option>
          <option value={"tobeset"}>i3</option>
          <option value={"tobeset"}>i5</option>
          <option value={"tobeset"}>i7</option>
          <option value={"tobeset"}>i9</option>
        </Form.Select>

        <Form.Select className="mb-3" name="generation" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>1ª Geração</option>
          <option value={"tobeset"}>2ª Geração</option>
          <option value={"tobeset"}>3ª Geração</option>
          <option value={"tobeset"}>4ª Geração</option>
          <option value={"tobeset"}>5ª Geração</option>
          <option value={"tobeset"}>6ª Geração</option>
          <option value={"tobeset"}>7ª Geração</option>
          <option value={"tobeset"}>8ª Geração</option>
          <option value={"tobeset"}>9ª Geração</option>
        </Form.Select>

        <Form.Label className="main-label">RAM:</Form.Label>
        <Form.Select className="mb-3" name="ram-type" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>DDR3</option>
          <option value={"tobeset"}>DDR4</option>
          <option value={"tobeset"}>DDR5</option>
        </Form.Select>

        <Form.Select className="mb-3" name="ram-memory" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>4GB</option>
          <option value={"tobeset"}>6GB</option>
          <option value={"tobeset"}>8GB</option>
          <option value={"tobeset"}>12GB</option>
          <option value={"tobeset"}>16GB</option>
          <option value={"tobeset"}>+16GB</option>
        </Form.Select>

        <Form.Label>GPU:</Form.Label>
        <Form.Select className="mb-3" name="gpu" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>

        <Form.Label className="main-label">Display:</Form.Label>
        <Form.Select className="mb-3" name="screen-type" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>TN</option>
          <option value={"tobeset"}>IPS-LCD</option>
          <option value={"tobeset"}>LED</option>
          <option value={"tobeset"}>Outros</option>
        </Form.Select>

        <Form.Select className="mb-3" name="screen-size" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>14"</option>
          <option value={"tobeset"}>15"</option>
          <option value={"tobeset"}>17"</option>
          <option value={"tobeset"}>+17"</option>
        </Form.Select>

        <Form.Label className="main-label">Bateria:</Form.Label>
        <Form.Select className="mb-3" name="battery" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>

        <Form.Label>Capacidade:</Form.Label>
        <Form.Select className="mb-3" name="screen-size" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>6500MAh</option>
          <option value={"tobeset"}>7000MAh</option>
          <option value={"tobeset"}>7500MAh</option>
          <option value={"tobeset"}>8000MAh</option>
          <option value={"tobeset"}>+8000MAh</option>
        </Form.Select>
    </Form.Group>
  );
}

export function DeviceTests() {
  return (
    <Form.Group className="w-100 mb-5 p-5 border">
      <h2 className="mb-4">Testes</h2>
      <p>
        <Form.Label className="main-label">Liga:</Form.Label>
        <Form.Select className="mb-3" name="power-status" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>
      </p>

      <p>
        <Form.Label className="main-label">Internet:</Form.Label>
        <Form.Select className="mb-3" name="ram-type" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>

        <Form.Select className="mb-3" name="ram-memory" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>3GHz</option>
          <option value={"tobeset"}>4GHz</option>
          <option value={"tobeset"}>5GHz</option>
        </Form.Select>
      </p>

      <p>
        <Form.Label className="main-label">Foramatado:</Form.Label>
        <Form.Select className="mb-3" name="disk-status" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>
      </p>

      <p>
      <Form.Label className="main-label">Scaneado:</Form.Label>
        <Form.Select className="mb-3" name="disk-analisys" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>
      </p>

      <p>
        <Form.Label className="main-label">Danos:</Form.Label>
        <Form.Select className="mb-3" name="damage" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>SIM</option>
          <option value={"tobeset"}>NÃO</option>
        </Form.Select>

        <Form.Select className="mb-3" name="damage-part" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>Teclado</option>
          <option value={"tobeset"}>Touchpad</option>
          <option value={"tobeset"}>Tela</option>
          <option value={"tobeset"}>Bootloader</option>
          <option value={"tobeset"}>USB</option>
          <option value={"tobeset"}>HDMI</option>
          <option value={"tobeset"}>VGA</option>
          <option value={"tobeset"}>Cabo de energia</option>
          <option value={"tobeset"}>Carregador</option>
          <option value={"tobeset"}>Placa de áudio</option>
          <option value={"tobeset"}>Placa de rede</option>
        </Form.Select>
      </p>
    </Form.Group>
  );
}

export function DeviceEvaluation() {
  return (
    <Form.Group className="w-100 mb-5 p-5 border">
      <h2 className="mb-4">Avaliação</h2>
      <p>
        <Form.Label className="main-label">Estado:</Form.Label>
        <Form.Select className="mb-3" name="device-conditions" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>Péssimo</option>
          <option value={"tobeset"}>Ruim</option>
          <option value={"tobeset"}>Regular</option>
          <option value={"tobeset"}>Bom</option>
          <option value={"tobeset"}>Ótimo</option>
        </Form.Select>
      </p>

      <p>
        <Form.Label className="main-label">TR:</Form.Label>
        <Form.Select className="mb-3" name="device-return" onChange={(event) => console.log(event.target.value)}>
          <option value={"tobeset"}>descarte</option>
          <option value={"tobeset"}>reaproveitamento</option>
          <option value={"tobeset"}>remoção de peças</option>
          <option value={"tobeset"}>reuso</option>
        </Form.Select>
      </p>
    </Form.Group>
  );
}
