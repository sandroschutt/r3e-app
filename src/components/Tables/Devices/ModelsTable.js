import { Row } from "react-bootstrap";
import { EditModel } from "../../Modals/Device/Models/EditModel";
import { CreateModel } from "../../Modals/Device/Models/CreateModel";
import { DeleteModel } from "../../Modals/Device/Models/DeleteModel";

export default function ModelsTable(props) {
  if (props.models !== "")
    return (
      <Row className="admin-devices-table w-100">
        <CreateModel brands={props.brands}/>
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
            {props.models.map((model, index) => {
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
                    <EditModel model={model} brands={props.brands} />
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
