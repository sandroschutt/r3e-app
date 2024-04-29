import "./style.scss";
import UserLayout from "../../../layout/UserLayout";
import DeviceList from "../../../components/Device/DeviceList";

export default function PublicDevices() {
  let dummyDevicesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <UserLayout view={{ title: "Devices" }}>
        <DeviceList data={dummyDevicesArray}/>
      </UserLayout>
    </>
  );
}
