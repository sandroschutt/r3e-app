import axios from "axios";
import Api from "./Api";

export class Admin {
  static getAllUsers(setUsers) {
    const endpoint = `http://localhost:9000/admin/users`;
    axios
      .get(endpoint)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Gets all users by the defined role
   *
   * @param role The role's ID
   * @param setUsers A callback function to set the users' state
   * 
   * @return users An array of users with the defined role on success
   */
  static getAllByRole(role = String, setUsers) {
    const endpoint = `http://localhost:9000/admin/users/role/${role}`;
    axios
      .get(endpoint)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getSingleUser(id = Number, setUser) {
    const endpoint = `http://localhost:9000/admin/users/${id}`;
    axios
      .get(endpoint)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getSingleUserDevices(userId, setDevices) {
    const endpoint = `http://localhost:9000/admin/user/${userId}/devices`;
    axios
      .get(endpoint)
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getWorkshopDevices(setDevices) {
    axios
      .get(Api.endpoint('workshop/devices'))
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getAllSchedules(setSchedules) {
    const endpoint = `http://localhost:9000/admin/schedules`;
    axios
      .get(endpoint)
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getUserSchedules(userId, setSchedules) {
    const endpoint = `http://localhost:9000/user/${userId}/schedules`;
    axios
      .get(endpoint)
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));
  }
}
