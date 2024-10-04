import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import PaymentsTable from "../../../components/Tables/PaymentsTable";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import { useEffect, useState } from "react";
import Payments from "../../../classes/Payments";

export default function PaymentsView() {
  const [payments, setPayments] = useState("");
  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (payments === "") Payments.getAll(setPayments);

    if (payments !== "" && search !== null && searched === false) {
      const filteredPayments = payments.filter((payment) => searchInObject(payment, search));
      setPayments(filteredPayments);
      setSearched(true);
    }
  }, [payments, search, searched])
  return (
    <Row id="payments-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pagamentos"} />
        <SearchResults search={search} />
      </Col>
      <Col className="--list-view">
        <Col>
          <PaymentsTable payments={payments} />
        </Col>
      </Col>
    </Row>
  );
}
