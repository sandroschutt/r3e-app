import { useState } from "react";
import "./style.scss";
import { Row } from "react-bootstrap";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  return (
    <div className="search-bar">
      <form action={`${window.location.href}`} method="GET">
        <input
          className="form-control"
          type="text"
          name="s"
          placeholder={"Encontre um item nesta tabela"}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
}

export function searchInObject(obj, searchString) {
  // Convert the search string to lower case for case-insensitive matching
  const lowerSearchString = searchString.toLowerCase();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Check if the key matches the search string
      if (key.toLowerCase().includes(lowerSearchString)) {
        return true;
      }

      // Check if the value matches the search string (for string values)
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(lowerSearchString)
      ) {
        return true;
      }

      // If the value is an object or array, search recursively
      if (typeof value === "object" && value !== null) {
        if (searchInObject(value, searchString)) {
          return true;
        }
      }
    }
  }
  return false;
}

export function getSearchQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("s");

  return searchParam;
}

export function SearchResults(props) {
  if (props.search !== null)
    return (
      <Row className="ps-0 my-3">
        <p className="h5 ps-0">{`Resultados para a busca: ${props.search}`}</p>
      </Row>
    );
}
