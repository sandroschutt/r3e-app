import DeviceSingle from "../../../components/Device/DeviceSingle";
import UserLayout from "../../../layout/UserLayout";

export default function SingleDevices() {
    return (
        <UserLayout view={{title: "Device / Category / Brand / Model"}}>
            <DeviceSingle />
        </UserLayout>
    )
}