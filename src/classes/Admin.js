import axios from "axios";
import Api from "./Api";

export default class Admin {
  static getAllUsers(setUsers) {
    axios
      .get(Api.endpoint('users'))
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
    axios
      .get(Api.endpoint(`users/role/${role}`))
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getSingleUser(id = Number, setUser) {
    axios
      .get(Api.endpoint(`users/${id}`))
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getSingleUserDevices(userId, setDevices) {
    axios
      .get(Api.endpoint(`devices/user/${userId}`))
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
    axios
      .get(Api.endpoint('admin/schedules'))
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));
  }

  static getUserSchedules(userId, setSchedules) {
    axios
      .get(Api.endpoint(`user/${userId}/schedules`))
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));
  }
}
