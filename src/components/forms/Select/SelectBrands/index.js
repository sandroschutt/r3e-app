import { Form } from "react-bootstrap";
import Brands from "../../../../classes/Brands";
import { useEffect, useState } from "react";

export function SelectBrands(props) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (brands[0] === undefined) {
      Brands.getAll(setBrands);
    }
  }, [brands]);

  return (
    <Form.Select
      aria-label="Seleciona a marca do dispositivo"
      name="brand"
      onChange={(event) => props.setBrand(event.target.value)}
      autoFocus
    >
      <option>Marca</option>
      {brands.map((brand, index) => {
        return <option key={index} value={brand.id}>{brand.name}</option>;
      })}
    </Form.Select>
  );
}
