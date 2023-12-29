import { useEffect, useState } from "react";
import { handleInput, handleStateLifting } from "./handles.js";

export default function ColumnTwo(props) {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("2012");
  const [photo, setPhoto] = useState("");
  let pointer = props.liftValues;

  useEffect(() => {
    handleStateLifting(props.setValues, props.setLiftValues, [
      brand,
      year,
      photo,
      pointer,
    ]);
  });

  return (
    <>
      <label htmlFor="brand">Marca: *</label>
      <select value={brand} onChange={(event) => handleInput(event, setBrand)}>
        <option value="motorola" key="motorola">
          motorola
        </option>
        <option value="samsung" key="samsung">
          samsung
        </option>
        <option value="redmi" key="redmi">
          redmi
        </option>
        <option value="nokia" key="nokia">
          nokia
        </option>
      </select>

      <label htmlFor="year">Ano: *</label>
      <input
        type="number"
        id="year"
        name="year"
        min="2010"
        max="2099"
        step="1"
        value={year}
        onChange={(event) => handleInput(event, setYear)}
      />

      <label htmlFor="photo">Foto: *</label>
      <input
        type="file"
        value={photo}
        onChange={(event) => handleInput(event, setPhoto)}
      />
    </>
  );
}
