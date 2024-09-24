import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { AdminDevicesTable } from "../../../components/Tables";
import { useEffect, useState } from "react";
import Admin from "../../../classes/Admin";

export default function Workshop() {
    const [devices, setDevices] = useState("")

    useEffect(() => {
        if (devices === "") {
            Admin.getWorkshopDevices(setDevices);
        }
    }, [devices])

    if (devices !== "") {
        return (
            <Row id="public-devices--view" className="flex-column">
                <Col>
                    <UserHeader pageTitle={"Oficina"} />
                </Col>
                <Col>
                    <FilterPublicDevices />
                    <AdminDevicesTable devices={devices} />
                </Col>
            </Row>
        );
    } else return <p>Aguradando dados...</p>
}