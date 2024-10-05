/**
 * Must implement User.getCapabilities and User.setCapabilities
 */

import axios from "axios";
import Api from "./Api.js";

export default class User {
  constructor(id = null) {
    this.id = id;
  }

  getUserId() {
    return this.id;
  }

  /**
   * Gets a single User's data
   *
   * @param {CallableFunction} updateUserData Callback function for setting the User's data state
   */
  async data(updateUserData) {
    try {
      axios.get(Api.endpoint(`users/${this.id}`)).then((response) => {
        updateUserData(response.data);
      });
    } catch (error) {
      return error.message;
    }
  }

  /**
   * Makes a User POST request to the API
   *
   * @param {JSON} userData A JSON object containing the new user's data
   * @returns {JSON} An AxiosResponse or AxiosError Object
   */
  async create(userData) {
    axios
      .post(Api.endpoint("users/create"), userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao criar o usuário.");
        alert(`Usuário ${response.data.name} criado com sucesso!`);
        window.location.href = `/admin/users/${response.data.id}`;
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Updates the current User's data
   *
   * @param id [String | Number] The User's ID
   * @param data [JSON] A JSON object containing the new data
   */
  async update(id, data = JSON) {
    axios
      .post(Api.endpoint(`users/update/${id}`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao criar o usuário.`);
        alert(`Usuário ${id} atualizado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  delete() {
    axios
      .post(Api.endpoint(`users/${this.id}/delete`))
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Não foi possível deletar o usuário.");
        }
        alert(`Usuário ${this.id} excluído com sucesso!`);
        return true;
      })
      .catch((error) => {
        alert("Erro ao excluir o usuário.");
        console.log(error);
      });
  }

  /**
   * Retrieves all Schedules
   *
   * @param {CallableFunction} setSchedule A callback function for setting the Schedules data
   * @return {JSON} All Schedules
   */
  getSchedules(setSchedules) {
    try {
      axios.get(Api.endpoint(`users/${this.id}/schedules`)).then((response) => {
        setSchedules(response.data);
      });
    } catch (error) {
      return error.message;
    }
  }

  /**
   * Updates a single Schedule from the database
   *
   * @param {String|Number} id The Schedule's ID
   * @param {JSON} data The Schedule's request data
   * @return The response status and message
   */
  updateSchedule(id, data) {
    axios
      .post(Api.endpoint(`schedules/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao atualizar agendamento.`);
        alert(`Agendamento atualizado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Deletes a single Schedule from the database
   *
   * @param {String|Number} id The Schedule's ID
   * @return The response status and message
   */
  deleteSchedule(id) {
    axios
      .post(Api.endpoint(`schedules/${id}/delete`), {}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao excluir agendamento.`);
        alert(`Agendamento excluído com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
