import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import DeviceModel from "../../../classes/DeviceModel";
import { EditModel } from "../../Modals/Device/Models/EditModel";
import Brands from "../../../classes/Brands";
import { CreateStudentModal } from "../../Modals/Device/Models/CreateModel";
import { DeleteModel } from "../../Modals/Device/Models/DeleteModel";

export default function ModelsTable() {
  const [models, setModels] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (models === "") DeviceModel.getAll(setModels);
    if (brands[0] === undefined) Brands.getAll(setBrands);
  }, [models]);

  if (models !== "")
    return (
      <Row className="admin-devices-table w-100">
        <CreateStudentModal brands={brands}/>
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>Nome</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>Sistema Operacional</th>
              <th>Bateria</th>
              <th>Tela</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => {
              return (
                <tr
                  id={model.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{model.name}</td>
                  <td>{model.category}</td>
                  <td>{model.brand === null ? "N/A" : model.brand.name}</td>
                  <td>{model.year}</td>
                  <td>{model.CPU}</td>
                  <td>{model.RAM}</td>
                  <td className="d-flex justify-content-center gap-2 align-items-center p-3">
                    {model.OS}
                  </td>
                  <td>{model.battery}</td>
                  <td>{model.screen}</td>
                  <td className="d-flex justify-content-between gap-1 align-items-center p-3">
                    <EditModel model={model} brands={brands} />
                    <DeleteModel modelId={model.id} name={model.name}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
}
