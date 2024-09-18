import axios from "axios";

export default class Associates {
  /**
   * Creates an API Token for the public routes' consumption
   *
   * @param associateId The vendor or NGO's id
   * @param setToken Callback function for setting the token on the clientside
   *
   * @returns API Token on success; Error message on fail
   * */
  static async createApiToken(associateId = String | Number, setToken) {
    const endpoint = `http://localhost:9000/vendor/api/token/${associateId}`;

    axios
      .post(
        endpoint,
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
        setToken(response.data)
      })
      .catch((error) => {
        setToken(error.response.data)
      });
  }
}
