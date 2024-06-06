/**
 * Must implement User.getCapabilities and User.setCapabilities
 */

import axios from "axios";

export default class User {
  constructor(id = Number | String) {
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

  postUserData() {
    // service makes a POST request to fetch user data
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
