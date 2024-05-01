import "./style.scss";
import DeviceList from "../../../components/Device/DeviceList";
import SearchForm from "../../../components/forms/SearchForm";

export default function PublicDevices() {
  let dummyDevicesArray = Array();

  for (let i = 0; i <= 9; i++) {
    dummyDevicesArray.push(1);
  }

  return (
    <div id="public-devices--view">
      <header>
        <h1>Devices</h1>
        <SearchForm />
      </header>
      <DeviceList data={dummyDevicesArray} view={"public-devices"} />
    </div>
  );
}
