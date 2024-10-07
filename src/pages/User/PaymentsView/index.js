import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import PaymentsTable from "../../../components/Tables/PaymentsTable";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import { useEffect, useState } from "react";
import Payments from "../../../classes/Payments";
import { useUserDataContext } from "../../../context/UserDataContext";
import { PaymentsList } from "../../../components/Lists/PaymentsList";

export default function PaymentsView() {
  const { userData } = useUserDataContext();
  const [payments, setPayments] = useState("");
  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (payments === "" && userData.role === "Admin") Payments.getAll(setPayments);
    if (payments === "" && userData.role !== "Admin" && userData.id !== undefined) Payments.getUserPayments(userData.id, setPayments);

    if (payments !== "" && search !== null && searched === false) {
      const filteredPayments = payments.filter((payment) => searchInObject(payment, search));
      setPayments(filteredPayments);
      setSearched(true);
    }
  }, [userData, payments, search, searched])

  function handlePaymentsTable() {
    if(userData.role === "Admin") return <PaymentsTable payments={payments} />
    if(userData.role !== "Admin") return <PaymentsList payments={payments} userRole={userData.role}/>
  }

  if(payments !== "") return (
    <Row id="payments-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pagamentos"} />
        <SearchResults search={search} />
      </Col>
      <Col className="--list-view">
        <Col>
          { handlePaymentsTable() }
        </Col>
      </Col>
    </Row>
  );
}
