import axios from "axios";

export default class Device {
  static getDeviceById(deviceId = Number, setDevice) {
    let requestUrl = `http://localhost:9000/devices/${deviceId}`;
    axios
      .get(requestUrl)
      .then((response) => {
        setDevice(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }

  static getUserDevices(userId = Number, userRole = String, setDevices) {
    let requestUrl = `http://localhost:9000/user/${userId}/devices`;
    axios
      .get(requestUrl)
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }

  static getUserDevice(userId = Number, deviceId = Number, setDevice) {
    let requestUrl = `http://localhost:9000/user/${userId}/devices/${deviceId}`;
    axios
      .get(requestUrl)
      .then((response) => {
        setDevice(response.data);
      })
      .catch((error) => console.log(error));
  }
}
