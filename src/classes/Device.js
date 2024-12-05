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
   * Creates a new Device
   * @param {JSON} data A JSON object containing the request body
   * */
  static create(data) {
    axios
      .post(Api.endpoint("devices/create"), data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        alert("Dispositivo criado com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        let errorMsg = JSON.parse(error.request.response).error;
        if(errorMsg === "No file uploaded") alert("Adicione uma foto do dispositivo para realizar o cadastro.");
      });
  }

  /**
   * Updates a single Device
   * @param {String|Number} user The current user's ID and role
   * @param {JSON} device A JSON object containing the request body
   * @param {String|NULL} currentPhoto The Device's current photo label
   * */
  static async update(user, device, currentPhoto) {
    if (user.id !== device.userId && user.role !== "Admin") {
      alert("Você não tem permissão para editar esse dispositivo");
      return;
    }

    const formdata = new FormData();
    formdata.append("type", device.type);
    formdata.append("brandId", device.brandId);
    formdata.append("modelId", device.modelId);
    formdata.append("state", device.state);
    formdata.set("photo", device.photo);

    if (typeof currentPhoto === "object") {
      formdata.append("currentPhoto", currentPhoto);
    }

    delete device["userId"];

    switch (device.state) {
      case "muito-bom":
        formdata.append("returnProccessId", 5);
        break;

      case "bom":
        formdata.append("returnProccessId", 4);
        break;

      case "regular":
        formdata.append("returnProccessId", 3);
        break;

      case "ruim":
        formdata.append("returnProccessId", 2);
        break;

      case "muito-ruim":
        formdata.append("returnProccessId", 1);
        break;

      default:
        break;
    }

    await axios
      .post(Api.endpoint(`devices/${device.id}/update`), formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
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
        if (response.status !== 200) throw new Error("Erro na requisição");
        alert(`Dispostivo ${id} excluído com sucesso.`);
        let pathname = window.location.pathname.split("/");
        pathname = `/${pathname[1]}/${pathname[2]}`;
        window.location.href = window.location.origin + pathname;
      })
      .catch((error) => {
        alert("Falaha ao excluir o dispositivo.");
        console.error(error);
      });
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
   * Gets a list of public Devices
   *
   * @param {CallableFunction} setDevices A callback function for setting the Devices' state
   * */
  static getPublicDevices(setDevices) {
    axios
      .get(Api.endpoint(`public/devices`))
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.error(error));
  }

  /**
   * Gets a list of Devices eligible for donation
   *
   * @param {CallableFunction} setDevices A callback function for setting the Devices' state
   * */
  static getStudentEligibleDevices(setDevices) {
    axios
      .get(Api.endpoint(`school/devices`))
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.error(error));
  }

  static evaluate(id, data) {
    axios
      .post(Api.endpoint(`devices/${id}/evaluate`), data)
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        alert(`Dispostivo ${id} avaliado com sucesso.`);
        window.location.reload();
      })
      .catch((error) => {
        alert("Falaha ao excluir o dispositivo.");
        console.error(error);
      });
  }
}
