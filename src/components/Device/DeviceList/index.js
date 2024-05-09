import "./style.scss";
import FilterPublicDevices from "./FilterPublicDevices";
import { PublicDevicesList } from "../../Lists";
import ListUserPickups from "./ListUserPickups";
import ListVendorPickupLocations from "./ListVendorPickupLocations";

export default function DeviceList(props) {
  const data = [];

  for(let i = 0; i <= 20; i++) {
    data.push(null);
  }
  // const filterDislpay = props.view === "pickups" || props.view === "pickup-locations" ? "none" : "flex";
  // function defineListFilters() {
  //   if (props.view === "public-devices") {
  //     return <FilterPublicDevices />;
  //   }

  //   if (props.view === "pickups") {
  //     return;
  //   }
  // }

  // function defineListStyle() {
  //   if (props.view === "public-devices") {
  //     return <ListPublicDevices />;
  //   }

    // if (props.view === "pickups") {
    //   return <ListUserPickups />;
    // }

  //   if (props.view === "pickup-locations") {
  //     return <ListVendorPickupLocations />;
  //   }
  // }

  return <PublicDevicesList data={data} />;
}
