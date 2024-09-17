import axios from "axios";

export default class Device {
  static getAllDevices(setDevices) {
    let endpoint = `http://localhost:9000/admin/devices/`;
    axios
      .get(endpoint)
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error));
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

  /**
   * Makes a POST request for the devices API route and redirects the user to the single device view
   * 
   * @param deviceData A JSON object containing the request body
   * @param userRole The current user's role
   * */ 
  static post(deviceData, userRole = String) {
    let endpoint = `http://localhost:9000/admin/devices/create`;
    axios
      .post(
        endpoint,
        deviceData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if(response.status === 200) {
          window.location.href = `/${userRole}/devices/${response.data.id}`;
        } else throw new Error('Erro na requisição')
      })
      .catch((error) => console.log(error));
  }
}
