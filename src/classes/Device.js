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
   * @param newDevice A JSON object containing the request body
   * @param role The current user's role
   * */
  static create(newDevice, role = String) {
    let endpoint = `http://localhost:9000/admin/devices/create`;
    axios
      .post(endpoint, newDevice, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = `/${role}/devices/${response.data.id}`;
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }

  /**
   * Makes a PUT request for the devices API route
   *
   * @param userId Integer | String -- The current user's ID
   * @param userRole String -- The current user's role
   * @param deviceId Integer | String -- The current device's ID
   * @param device A JSON object containing the request body
   * */
  static async update(userId, userRole, deviceId, device) {
    if (userId !== device.userId && userRole.toUpperCase() !== "ADMIN") {
      alert("Você não tem permissão para editar esse dispositivo");
      return;
    }

    delete device["userId"];
    delete device["id"];

    switch (device.state) {
      case "muito-bom":
        device.returnProccessId = 5;
        break;

      case "bom":
        device.returnProccessId = 4;
        break;

      case "regular":
        device.returnProccessId = 3;
        break;

      case "ruim":
        device.returnProccessId = 2;
        break;

      case "muito-ruim":
        device.returnProccessId = 1;
        break;

      default:
        break;
    }

    let endpoint = `http://localhost:9000/devices/update/${deviceId}`;

    await axios
      .post(endpoint, device, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro na requisição");
        }
        alert(`Dispositivo editado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }
}
