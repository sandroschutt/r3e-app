import "./style.scss";
import DeviceList from "../../../components/Device/DeviceList";

export default function PublicDevices() {
  let dummyDevicesArray = Array();

  for (let i = 0; i <= 9; i++) {
    dummyDevicesArray.push(1);
  }

  return (
    <>
      <h1>Devices</h1>
      <DeviceList data={dummyDevicesArray} view={"public-devices"} />
    </>
  );
}
