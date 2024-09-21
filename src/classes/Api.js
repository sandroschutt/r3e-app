export default class Api {
  /**
   * Defines the endpoint for API requests
   *
   * @param {String} endpoint The desired endpoint for the API call
   * @returns {String} The full endpoint URL
   * */
  static endpoint(endpoint) {
    const api = `http://localhost:9000/${endpoint}`;
    return api;
  }
}
