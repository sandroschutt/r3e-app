import "./style.scss";
import { Form } from "react-bootstrap";

export default function SearchForm() {
  return (
    <div className="search-bar">
      <Form.Control type="text" placeholder="Pesquise algo..." onChange={(event) => { console.log(event.target.value) }} />
    </div>
  )
}
