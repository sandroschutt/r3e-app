import "./style.scss";
import { Col, Row } from "react-bootstrap";
import SearchForm from "../forms/SearchForm";
import { NotificationsModal } from "../Modals";
import { useParams } from "react-router-dom";

export default function UserHeader(props) {
  const params = useParams();

  function handleSeacrhFormShow() {
    if(params.id === undefined) return <SearchForm/>;
  }

  return (
    <header>
      <>
        <Row className="p-0 justify-content-between align-items-center row-gap-1 mb-lg-5">
          <Col className="col-4 ps-0">
            <h1>{props.pageTitle}</h1>
          </Col>
          <Col className="col-7">
            { handleSeacrhFormShow() }
          </Col>
          <Col className="col-1 text-end pe-0">
            <NotificationsModal />
          </Col>
        </Row>
      </>
    </header>
  );
}
