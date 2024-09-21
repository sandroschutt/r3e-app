import "./style.scss";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validateDate } from "../../validations/validateDate";
import { useNavigate } from "react-router-dom";
import {
  ManageDeviceModal,
  DeleteDeviceModal
} from "../Modals";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export function AdminDevicesTable(props) {
  const navigate = useNavigate();
  const pathname = window.location.pathname.split("/")[2];
  
  if (props.devices !== "") {
    let devices = props.devices;

    return (
      <>
        <Row>
          <ManageDeviceModal type={"add"}/>
        </Row>
        <Row className="admin-devices-table w-100">
          <table>
            <thead>
              <tr className="bg-dark text-white">
                <th></th>
                <th>Tipo</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Ano</th>
                <th>Proprietário</th>
                <th>Estado</th>
                <th>Data de entrada</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => {
                let deviceUrl =
                  pathname === "devices"
                    ? device.id
                    : `/admin/devices/${device.id}`;
                return (
                  <tr
                    id={device.id}
                    key={Math.random(0, 999)}
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "var(--palette-grey-lighter)"
                          : "auto",
                    }}
                  >
                    <td className="text-center ps-0">
                      <input type="checkbox" />
                    </td>
                    <td>{device.type}</td>
                    <td>{device.model.name}</td>
                    <td>{device.brand.name}</td>
                    <td>{device.model.year}</td>
                    <td>{device.user.name}</td>
                    <td>{device.state}</td>
                    <td>{validateDate(device.createdAt)}</td>
                    <td className="d-flex justify-content-around align-items-center">
                      <FontAwesomeIcon
                        className="action"
                        icon={faEye}
                        onClick={() => {
                          navigate(`${deviceUrl}`);
                        }}
                      />
                      <ManageDeviceModal type={"edit"} device={device}/>
                      <DeleteDeviceModal deviceId={device.id}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Row>
      </>
    );
  }
}

export function APIRoutesTable(props) {
  const tableData = props.tableData;
  return (
    <Row className="admin-devices-table w-100">
      <table>
        <thead>
          <tr key="0" className="bg-dark text-white">
            {tableData.labels.map((label, index) => {
              return <th key={index}>{label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((data, index) => {
            return (
              <tr key={index} style={{ fontSize: 12 }}>
                {data.map((value, i) => {
                  return <td key={i}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Row>
  );
}
