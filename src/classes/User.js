/**
 * Must implement User.getCapabilities and User.setCapabilities
 */

import axios from "axios";
import Api from "./Api.js";

export default class User {
  constructor(id = String | Number | null) {
    this.id = id;
  }

  getUserId() {
    return this.id;
  }

  async getUserData(updateUserData) {
    try {
      axios
        .get(Api.endpoint(`users/${this.id}/data`))
        .then((response) => {
          updateUserData(response.data);
        });
    } catch (error) {
      return error.message;
    }
  }

  /**
   * Makes a User POST request to the API
   *
   * @param userData A JSON object containing the new user's data
   * @return The response status and message
   */
  async create(userData = JSON) {
    axios
      .post(Api.endpoint('users/create'), userData, {
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
        console.log(response)
        // window.location.reload();
      } else throw new Error("Erro na requisição");
    })
    .catch((error) => console.log(error));
  }

  delete() {
    // service makes a DELETE request to fetch user data
  }

  /**
   * Makes a User POST request to the API
   *
   * @param userData A JSON object containing the new user's data
   * @return The response status and message
   */
  getUserSchedules(setSchedules) {
    try {
      axios
        .get(`http://localhost:9000/user/${this.id}/schedules`)
        .then((response) => {
          setSchedules(response.data);
        });
    } catch (error) {
      return error.message;
    }
  }
}
