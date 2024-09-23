/**
 * Must implement User.getCapabilities and User.setCapabilities
 */

import axios from "axios";
import Api from "./Api.js";

export default class User {
  constructor(id) {
    this.id = id;
  }

  getUserId() {
    return this.id;
  }

  async getUserData(updateUserData) {
    try {
      axios.get(Api.endpoint(`users/${this.id}/data`)).then((response) => {
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
        if (response.status === 200) {
          console.log(response);
          // window.location.href = `/${userRole}/users/${response.data.id}`;
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
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
        if (response.status === 200) {
          alert(response.data);
          console.log(response);
          // window.location.reload();
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }

  /**
   * Deletes a single User
   */
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
   * Makes a User POST request to the API
   *
   * @param userData A JSON object containing the new user's data
   * @return The response status and message
   */
  getUserSchedules(setSchedules) {
    try {
      axios.get(Api.endpoint(`user/${this.id}/schedules`)).then((response) => {
        setSchedules(response.data);
      });
    } catch (error) {
      return error.message;
    }
  }
}
