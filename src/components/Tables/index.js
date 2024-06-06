import "./style.scss";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validateDate } from "../../validations/validateDate";
import { useNavigate } from "react-router-dom";
import { AdminDeleteDeviceModal, AdminQuickEditDeviceModal } from "../Modals";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export function AdminDevicesTable(props) {
    const navigate = useNavigate();
    const pathname = window.location.pathname.split("/")[2];

    if (props.devices !== "") {
        let devices = props.devices;

        return (
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
                        {
                            devices.map((device, index) => {
                                let deviceUrl = pathname === "devices" ? device.id : `/admin/devices/${device.id}`;
                                return (
                                    <tr id={device.id} style={{backgroundColor: index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto"}}>
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
                                            <FontAwesomeIcon className="action" icon={faEye} onClick={() => { navigate(`${deviceUrl}`) }} />
                                            <AdminQuickEditDeviceModal />
                                            <AdminDeleteDeviceModal />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Row>
        )
    }
}