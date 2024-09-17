import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Models from "../../../../classes/Models";

export function SelectModels(props) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (models[0] === undefined) {
      Models.getAll(setModels);
    }
  }, [models]);

  return (
    <Form.Select
      aria-label="Seleciona a marca do dispositivo"
      name="brand"
      onChange={(event) => {
        let modelData = JSON.parse(event.target.value);
        props.setModel(modelData.id);
        props.setYear(modelData.year);
      }}
    >
      <option>Modelo</option>
      {models.map((model, index) => {
        return (
          <option key={index} value={JSON.stringify({id: model.id, year: model.year})}>
            {model.name}
          </option>
        );
      })}
    </Form.Select>
  );
}
