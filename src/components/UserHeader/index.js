import "./style.scss";
import { Col, Row } from "react-bootstrap";
import SearchForm from "../forms/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function UserHeader(props) {
    return (
        <header>
            <Row className="p-0 justify-content-between align-items-center row-gap-1 mb-lg-5">
                <Col className="col-4 ps-0">
                    <h1>{props.pageTitle}</h1>
                </Col>
                <Col className="col-7">
                    <SearchForm />
                </Col>
                <Col className="col-1 text-end pe-0">
                    <FontAwesomeIcon className="notifications" icon={faBell} onClick={() => { alert("Show unread notifications component") }} />
                </Col>
            </Row>
        </header>
    )
}