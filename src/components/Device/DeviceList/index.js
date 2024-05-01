import "./style.scss";
import FilterPublicDevices from "./FilterPublicDevices";
import ListPublicDevices from "./ListPublicDevices";
import ListUserPickups from "./ListUserPickups";
import ListVendorPickupLocations from "./ListVendorPickupLocations";

export default function DeviceList(props) {
  const filterDislpay = props.view === "pickups" || props.view === "pickup-locations" ? "none" : "flex";
  function defineListFilters() {
    if (props.view === "public-devices") {
      return (
        <>
          <FilterPublicDevices />
        </>
      );
    }

    if (props.view === "pickups") {
      return;
    }
  }

  function defineListStyle() {
    if (props.view === "public-devices") {
      return <ListPublicDevices />;
    }

    if (props.view === "pickups") {
      return <ListUserPickups />;
    }

    if (props.view === "pickup-locations") {
      return <ListVendorPickupLocations />;
    }
  }

  return (
    <div className="public-devices">
      <div className="pagination" style={{display: filterDislpay}}>
        <ul className="filters">{defineListFilters()}</ul>
        <p className="page-index">{"Página 1 - 100"}</p>
      </div>
      <div className="list">
        <ul>{props.data.map(() => defineListStyle())}</ul>
      </div>
    </div>
  );
}
