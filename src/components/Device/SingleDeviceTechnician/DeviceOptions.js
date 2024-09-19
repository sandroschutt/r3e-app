import { useState } from "react";
import { Form } from "react-bootstrap";

export function DeviceSpecifications(props) {
  const specs = props.specs;

  return (
    <Form.Group className="w-100 mb-5 p-5 border border">
      {/* <button type="button" onClick={() => console.log(props.specs)}>
        Log Specs
      </button> */}
      <h2 className="mb-4">Especificações</h2>
      <hr className="my-3" />
      <Form.Label className="main-label">Processador:</Form.Label>
      <Form.Select
        className="mb-3"
        name="manufacturer"
        onChange={(event) => {
          specs["processorBrand"] = event.target.value;
        }}
      >
        <option>-- fabricante</option>
        <option value={"INTEL"}>Intel</option>
        <option value={"AMD"}>AMD</option>
        <option value={"QUALCOM"}>Qualcom</option>
        <option value={"MEDIATEK"}>MediaTek</option>
        <option value={"SAMSUNG"}>Samsung</option>
        <option value={"APPLE"}>Apple</option>
        <option value={"OUTRO"}>Outro</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="family"
        onChange={(event) => {
          specs["processorFamily"] = event.target.value;
        }}
      >
        <option>-- família</option>
        <option value={"atom"}>Atom</option>
        <option value={"pentium"}>Pentium</option>
        <option value={"celeron"}>Celeron</option>
        <option value={"i3"}>i3</option>
        <option value={"i5"}>i5</option>
        <option value={"i7"}>i7</option>
        <option value={"i9"}>i9</option>
        <option value={"ryzen 3"}>Ryzen 3</option>
        <option value={"ryzen 5"}>Ryzen 5</option>
        <option value={"ryzen 7"}>Ryzen 7</option>
        <option value={"snapdragon"}>Snapdragon</option>
        <option value={"snapdragon-g"}>Snapdragon G</option>
        <option value={"exynos"}>Exynos</option>
        <option value={"m1"}>M1</option>
        <option value={"m2"}>M2</option>
        <option value={"m3"}>M3</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="generation"
        onChange={(event) => {
          specs["processorGeneration"] = event.target.value;
        }}
      >
        <option>-- geração</option>
        <option value={"1"}>1ª Geração</option>
        <option value={"2"}>2ª Geração</option>
        <option value={"3"}>3ª Geração</option>
        <option value={"4"}>4ª Geração</option>
        <option value={"5"}>5ª Geração</option>
        <option value={"6"}>6ª Geração</option>
        <option value={"7"}>7ª Geração</option>
        <option value={"8"}>8ª Geração</option>
        <option value={"9"}>9ª Geração</option>
        <option value={"10"}>10ª Geração</option>
        <option value={"11"}>11ª Geração</option>
        <option value={"12"}>12ª Geração</option>
        <option value={"13"}>13ª Geração</option>
        <option value={"14"}>14ª Geração</option>
        <option value={"15"}>15ª Geração</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">RAM:</Form.Label>
      <Form.Select
        className="mb-3"
        name="ram-type"
        onChange={(event) => {
          specs["ramType"] = event.target.value;
        }}
      >
        <option>-- tipo</option>
        <option value={"DDR3"}>DDR3</option>
        <option value={"DDR4"}>DDR4</option>
        <option value={"DDR5"}>DDR5</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="ram-memory"
        onChange={(event) => {
          specs["ramSize"] = event.target.value;
        }}
      >
        <option>-- tamanho</option>
        <option value={"2"}>2GB</option>
        <option value={"3"}>3GB</option>
        <option value={"4"}>4GB</option>
        <option value={"6"}>6GB</option>
        <option value={"8"}>8GB</option>
        <option value={"12"}>12GB</option>
        <option value={"16"}>16GB</option>
        <option value={"+16"}>+16GB</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label>GPU:</Form.Label>
      <Form.Select
        className="mb-3"
        name="gpu"
        onChange={(event) => {
          specs["gpu"] = event.target.value;
        }}
      >
        <option value={1}>SIM</option>
        <option value={0}>NÃO</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">Display:</Form.Label>
      <Form.Select
        className="mb-3"
        name="screen-type"
        onChange={(event) => {
          specs["displayType"] = event.target.value;
        }}
      >
        <option>-- tipo</option>
        <option value={"TN"}>TN</option>
        <option value={"IPS-LCD"}>IPS-LCD</option>
        <option value={"LED"}>LED</option>
        <option value={""}>Nenhum</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="screen-size"
        onChange={(event) => {
          specs["displaySize"] = event.target.value;
        }}
      >
        <option>-- tamanho</option>
        <option value={"14"}>14"</option>
        <option value={"15"}>15"</option>
        <option value={"16"}>17"</option>
        <option value={"19"}>19"</option>
        <option value={"21"}>21"</option>
        <option value={"+21"}>+21"</option>
        <option value={""}>Nenhum</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">Bateria:</Form.Label>
      <Form.Select
        className="mb-3"
        name="battery"
        onChange={(event) => {
          specs["battery"] = event.target.value;
        }}
      >
        <option value={1}>SIM</option>
        <option value={0}>NÃO</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label>Capacidade:</Form.Label>
      <Form.Select
        className="mb-3"
        name="screen-size"
        onChange={(event) => {
          specs["capacity"] = event.target.value;
        }}
      >
        <option>--</option>
        <option value={"6500"}>6500MAh</option>
        <option value={"7000"}>7000MAh</option>
        <option value={"7500"}>7500MAh</option>
        <option value={"8000"}>8000MAh</option>
        <option value={"+8000"}>+8000MAh</option>
      </Form.Select>
    </Form.Group>
  );
}

export function DeviceTests(props) {
  const tests = props.tests;

  return (
    <Form.Group className="w-100 mb-5 p-5 border">
      <h2 className="mb-4">Testes</h2>
      <hr className="my-3" />
      <Form.Label className="main-label">Liga:</Form.Label>
      <Form.Select
        className="mb-3"
        name="power-status"
        onChange={(event) => (tests["testTurnOn"] = event.target.value)}
      >
        <option value={1}>SIM</option>
        <option value={0}>NÃO</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">Internet:</Form.Label>
      <Form.Select
        className="mb-3"
        name="ram-type"
        onChange={(event) =>
          (tests["testInternetConnection"] = event.target.value)
        }
      >
        <option value={1}>SIM</option>
        <option value={2}>NÃO</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="ram-memory"
        onChange={(event) => (tests["testInternetFreq"] = event.target.value)}
      >
        <option>-- frquência</option>
        <option value={"3GHz"}>3GHz</option>
        <option value={"4GHz"}>4GHz</option>
        <option value={"5GHz"}>5GHz</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">Formatado:</Form.Label>
      <Form.Select
        className="mb-3"
        name="formated"
        onChange={(event) => (tests["testFormated"] = event.target.value)}
      >
        <option value={1}>SIM</option>
        <option value={0}>NÃO</option>
      </Form.Select>

      <hr className="my-5" />

      <Form.Label className="main-label">Danos:</Form.Label>
      <Form.Select
        className="mb-3"
        name="damage"
        onChange={(event) => (tests["testDamage"] = event.target.value)}
      >
        <option value={1}>SIM</option>
        <option value={0}>NÃO</option>
      </Form.Select>

      <Form.Select
        className="mb-3"
        name="damage-part"
        onChange={(event) => (tests["testDamagedPart"] = event.target.value)}
      >
        <option>-- parte danificada</option>
        <option value={"teclado"}>Teclado</option>
        <option value={"touchpad"}>Touchpad</option>
        <option value={"display"}>Display</option>
        <option value={"bootloader"}>Bootloader</option>
        <option value={"usb"}>USB</option>
        <option value={"hdmi"}>HDMI</option>
        <option value={"vga"}>VGA</option>
        <option value={"cabo-de-energia"}>Cabo de energia</option>
        <option value={"carregador"}>Carregador</option>
        <option value={"placa-de-audio"}>Placa de áudio</option>
        <option value={"placa-de-video"}>Placa de vídeo</option>
        <option value={"placa-de-rede"}>Placa de rede</option>
      </Form.Select>

      <hr className="my-5" />

      <div className="w-100">
        <h4 className="mb-4">
          <strong>Avaliação</strong>
        </h4>
        <Form.Select
          className="mb-3"
          name="device-conditions"
          onChange={(event) => (tests["state"] = event.target.value)}
        >
          <option>-- Selecione</option>
          <option value={"inutilizavel"}>Inutilizável</option>
          <option value={"ruim"}>Ruim</option>
          <option value={"regular"}>Regular</option>
          <option value={"bom"}>Bom</option>
          <option value={"muito-bom"}>Muito bom</option>
        </Form.Select>
      </div>
    </Form.Group>
  );
}

/**
 * Handle all fo the Inputs value and state
 *
 *
 * @param specs [JSON] The object to be sent to the Workshop form
 * @param event [Object] An event from a HTML input
 * @param setter [Callback] A setter function for a given state
 * @param specKey [Index] A JSON key/index to be added or altered
 * */
function handleSpecsGroupData(specs, event, setter, specKey) {
  setter(event.target.value);
  specs[specKey] = event.target.value;
}
