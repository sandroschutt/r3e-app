import axios from "axios";

export default class User {
  constructor(id = Number | String, role = String) {
    this.id = id;
    this.role = role;
  }

  getUserId() {
    return this.id;
  }

  async getUserData(updateUserData) {
    // service makes a GET request to fetch user data
    try {
      axios.get(`http://localhost:9000/${this.role}/${this.id}/data`).then((response) => {
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
}
