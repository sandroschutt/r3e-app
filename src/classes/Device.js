import axios from "axios";
import Api from "./Api";

export default class Device {
  /**
   * Get all Devices from the database
   * @param {CallableFunction} setDevices A setter callback function to set the devices
   * @returns {Array} An array of Devices JSON Objects
   * */
  static getAll(setDevices) {
    axios
      .get(Api.endpoint("devices"))
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Gets a single Device by ID
   * @param {String|Number} id The Device's ID
   * @returns {JSON} Success - An JSON Object containing the Device
   * @returns {AxiosError} Fail - An Error Object containing the request data
   * */
  static getOne(id, setDevice) {
    axios
      .get(Api.endpoint(`devices/${id}`))
      .then((response) => {
        setDevice(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }

  /**
   * Gets a list of Devices from a single User
   * @param {String|Number} id The Device's ID
   * @returns {JSON} Success - An JSON Object containing the Device
   * @returns {AxiosError} Fail - An Error Object containing the request data
   * */
  static getUserDevices(id, setDevices) {
    axios
      .get(Api.endpoint(`devices/user/${id}`))
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.error(error));
  }

  /**
   * Creates a new Device
   * @param {JSON} data A JSON object containing the request body
   * @param {String} role The current user's role
   * */
  static create(data, role) {
    axios
      .post(Api.endpoint("devices/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = `/${role.toLocaleLowerCase()}/devices/${response.data.id}`;
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }

  /**
   * Updates a single Device
   * @param {String|Number} user The current user's ID and role
   * @param {JSON} device A JSON object containing the request body
   * */
  static async update(user, device) {
    if (user.id !== device.userId && user.role.toUpperCase() !== "ADMIN") {
      alert("Você não tem permissão para editar esse dispositivo");
      return;
    }

    delete device["userId"];

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

    await axios
      .post(Api.endpoint(`devices/${device.id}/update`), device, {
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

  /**
   * Deletes a single Device by ID
   * @param {Stinrg|Number} id The Device's ID
   * @returns {AxiosResponse|AxiosError} A JSON object with the response data
   * */
  static async delete(id) {
    await axios
      .post(Api.endpoint(`devices/${id}/delete`))
      .then((response) => {
        if(response.status !== 200) throw new Error("Erro na requisição");
        alert(`Dispostivo ${id} excluído com sucesso.`)
        let pathname = window.location.pathname.split('/')
        pathname = `/${pathname[1]}/${pathname[2]}`;
        window.location.href = window.location.origin + pathname
      })
      .catch((error) => {
        alert("Falaha ao excluir o dispositivo.")
        console.error(error)
      });
  }
}
