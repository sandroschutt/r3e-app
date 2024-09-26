import axios from "axios";
import Api from "./Api.js";

export default class DeviceModel {
  /**
   * Retrieves all device models
   *
   * @param {CallableFunction} setModels A callback function to set the models state
   *
   * @returns {Array} models
   */
  static async getAll(setModels) {
    axios
      .get(Api.endpoint("device-models"))
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Nenhum modelo encontrado");
        setModels(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Retrieves a single device model
   *
   * @param {String|Number|null} id The device model's ID
   * @param {CallableFunction} setModel A callback function to set the model state
   *
   * @returns {JSON} device model
   */
  static async getOne(id, setModel) {
    axios
      .get(Api.endpoint(`device-models/${id}`))
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`O modelo ${id} não foi encontrdo.`);
        setModel(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Creates a single device model
   *
   * @param {JSON} data A JSON object containing the device model's data to be created
   * @returns {JSON} device model
   */
  static async create(data) {
    axios
      .post(Api.endpoint("device-models/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Não foi possível criar o modelo de dispositivo");
        alert(`Modelo ${response.data.name} criado com sucesso!`);
        // window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Updates a single device model
   *
   * @param {JSON} data A JSON object containing the device model's data to be updated
   * @returns {JSON} device model
   */
  static async update(data) {
    const id = data.id;
    delete data['id'];

    axios
      .post(Api.endpoint(`device-models/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Não foi possível atualizar o modelo de dispositivo");
        alert(`Modelo ${data.name} atualizado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Deletes a single device model
   *
   * @param {String|Number|null} id The device model's ID
   * @returns {Boolean} True on success, false on fail
   */
  static async delete(id) {
    axios
      .post(Api.endpoint(`device-models/${id}/delete`), {}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Não foi possível deletar o modelo de dispositivo");
        alert(`Modelo ${id} deletado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
