import axios from "axios";

export default class Device {
  static getAllDevices(setDevices) {
    let endpoint = `http://localhost:9000/admin/devices/`;
    axios.get(endpoint)
      .then((response) => {
        setDevices(response.data);
      }).catch((error) => console.log(error));
  }

  static getDeviceById(deviceId = Number, setDevice) {
    let endpoint = `http://localhost:9000/devices/${deviceId}`;
    axios
      .get(endpoint)
      .then((response) => {
        setDevice(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }

  static getUserDevices(userId = Number, userRole = String, setDevices) {
    let endpoint = `http://localhost:9000/user/${userId}/devices`;
    axios
      .get(endpoint)
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }

  static getUserDevice(userId = Number, deviceId = Number, setDevice) {
    let endpoint = `http://localhost:9000/user/${userId}/devices/${deviceId}`;
    axios
      .get(endpoint)
      .then((response) => {
        setDevice(response.data);
      })
      .catch((error) => console.log(error));
  }

  static deleteDevices(devicesToDelete, devices, setDevices) {
    let endpoint = `http://localhost:9000/admin/devices`;
    axios.post(endpoint, devicesToDelete)
      .then(function (response) {
        console.log(response);
        devices = devices.filter((device) => !devicesToDelete.includes(device.id))
        setDevices(devices)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
