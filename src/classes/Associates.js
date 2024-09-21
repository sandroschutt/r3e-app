import axios from "axios";
import Api from "./Api";

export default class Associates {
  /**
   * Creates an API Token for public routes' consumption
   *
   * @param {String|Number} associateId The vendor or NGO's id
   * @param {JSON} setToken Callback function for setting the token on the clientside
   *
   * @returns API Token on success; Error message on fail
   * */
  static async createApiToken(associateId, setToken) {
    axios
      .post(
        Api.endpoint(`vendor/${associateId}/api/token/create`),
        { userId: associateId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Não foi possível criar o token.");
        }
        setToken(response.data);
      })
      .catch((error) => {
        setToken(error.response.data);
      });
  }

  /**
   * Updates an API Token for public routes' consumption
   *
   * @param {String|Number} associateId The vendor or NGO's id
   * @param {JSON} setToken Callback function for setting the token on the clientside
   *
   * @returns API Token on success; Error message on fail
   * */
  static async updateApiToken(associateId, setToken) {
    axios
      .post(
        Api.endpoint(`vendor/${associateId}/api/token/update`),
        { userId: associateId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        alert(`${response.data.message}\nToken:\n${response.data.token}`);
        setToken(response.data);
      })
      .catch((error) => {
        console.error(error)
      });
  }
}
