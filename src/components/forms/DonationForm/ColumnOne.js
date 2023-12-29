import { useEffect, useState } from "react";
import { handleInput, handleStateLifting } from "./handles.js";

export default function ColumnOne(props) {
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  let pointer = props.liftValues;

  useEffect(() => {
    handleStateLifting(props.setValues, props.setLiftValues, [type, model, condition, pointer]);
  });

  return (
    <>
      <label htmlFor="smartphone">Tipo: *</label>
      <select value={type} onChange={(event) => handleInput(event, setType)}>
        <option value="smartphone" key="smartphone">
          --smartphone
        </option>
        <option value="tablet" key="tablet">
          --tablet
        </option>
        <option value="notebook" key="notebook">
          --notebook
        </option>
        <option value="pc" key="computador">
          --computador
        </option>
        <option value="peripheral" key="peripheral">
          --periféricos
        </option>
        <option value="other" key="other">
          --outros
        </option>
      </select>

      <label htmlFor="modelo">Modelo: *</label>
      <select value={model} onChange={(event) => handleInput(event, setModel)}>
        <option value="moto-g-7" key="moto-g-7">
          --Moto G7
        </option>
        <option value="galaxy-s-8" key="galaxy-s-8">
          --Galaxy S8
        </option>
        <option value="note-8" key="note-8">
          --Note 8
        </option>
        <option value="nokia-p-90" key="nokia-p-90">
          --Nokia P90
        </option>
      </select>

      <label htmlFor="estado">Estado: *</label>
      <select
        value={condition}
        onChange={(event) => handleInput(event, setCondition)}
      >
        <option value="excellent" key="excellent">
          Excelente
        </option>
        <option value="good" key="good">
          Bom
        </option>
        <option value="regular" key="regular">
          Regular
        </option>
        <option value="bad" key="bad">
          Ruim
        </option>
        <option value="terrible" key="terrible">
          Péssimo
        </option>
      </select>
    </>
  );
}
