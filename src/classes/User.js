/**
 * Must implement User.getCapabilities and User.setCapabilities
 */

import axios from "axios";

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
        .get(`http://localhost:9000/${this.role}/${this.id}/data`)
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
    let endpoint = `http://localhost:9000/admin/users/create`;

    axios
      .post(endpoint, userData, {
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

  putUserData() {
    // service makes a PUT request to fetch user data
  }

  deleteUserData() {
    // service makes a DELETE request to fetch user data
  }

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
