import "./style.scss";
import { Row } from "react-bootstrap";
import { validateDate } from "../../validations/validateDate";

export function AdminDevicesTable(props) {
    const bulkActionsItems = props.bulkActionsItems;
    const setBulkActionsItems = props.setBulkActionsItems;

    function handleBulkActionsSelection(deviceId) {
        if (bulkActionsItems.includes(deviceId)) {
            bulkActionsItems.splice(bulkActionsItems.indexOf(deviceId), 1);
        } else setBulkActionsItems([...bulkActionsItems, deviceId])
    }

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            devices.map((device, index) => {
                                return (
                                    <tr key={index} id={device.id} style={{ backgroundColor: index % 2 === 0 ? "var(--palette-grey-lighter)" : "auto" }}>
                                        <td className="text-center px-2">
                                            <input type="checkbox" onChange={() => {
                                                handleBulkActionsSelection(device.id)
                                            }} />
                                        </td>
                                        <td>{device.type}</td>
                                        <td><a href={`/admin/devices/${device.id}`} >{device.model.name}</a></td>
                                        <td>{device.brand.name}</td>
                                        <td>{device.model.year}</td>
                                        <td><a href={`/admin/users/${device.userId}`} >{device.user.name}</a></td>
                                        <td>{device.state}</td>
                                        <td>{validateDate(device.createdAt)}</td>
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

export function APIRoutesTable(props) {
    const tableData = props.tableData;
    return (
        <Row className="admin-devices-table w-100">
            <table>
                <thead>
                    <tr key="0" className="bg-dark text-white">
                        {
                            tableData.labels.map((label, index) => {
                                return <th key={index}>{label}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.data.map((data, index) => {
                            return (
                                <tr key={index} style={{ fontSize: 12 }}>
                                    {
                                        data.map((value, i) => {
                                            return <td key={i}>{value}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Row>
    )
}