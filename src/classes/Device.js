import axios from "axios";

export default class Device {
    static getUserDevice(userId = Number, deviceId = Number, setDevice) {
        let requestUrl = `http://localhost:9000/user/${userId}/devices/${deviceId}`;
        axios.get(requestUrl)
        .then(
            (response) => {
                // console.log(response.data);
                setDevice(response.data);
            }
        )
        .catch((error) => console.log(error.response.data));
    }
}