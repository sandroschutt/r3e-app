import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Brands from "../../../classes/Brands";
import { validateDate } from "../../../validations/validateDate.js";
import { CreateBrand } from "../../Modals/Device/Brands/CreateBrand.js";
import { EditBrand } from "../../Modals/Device/Brands/EditBrand.js";
import { DeleteBrand } from "../../Modals/Device/Brands/DeleteBrand.js";

export default function BrandsTable() {
  const [brands, setBrands] = useState("");

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);
  }, [brands]);

  if (brands !== "")
    return (
      <Row className="admin-devices-table w-100">
        <CreateBrand />
        <table>
          <thead>
            <tr className="bg-dark text-white">
              <th>ID</th>
              <th>Nome</th>
              <th>Modelos</th>
              <th>Dispositivos</th>
              <th>Criado em:</th>
              <th>Atualizado em:</th>
              <th>Ações:</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => {
              return (
                <tr
                  id={brand.id}
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto",
                  }}
                >
                  <td>{brand.id}</td>
                  <td>{brand.name}</td>
                  <td>{brand.models.length}</td>
                  <td>{brand.devices.length}</td>
                  <td>{validateDate(brand.createdAt)}</td>
                  <td>{validateDate(brand.updatedAt)}</td>
                  <td className="d-flex justify-content-start gap-2 align-items-center p-3">
                    <EditBrand brand={brand} />
                    <DeleteBrand brand={brand} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    );
}
