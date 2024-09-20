export default class Api {
  /**
   * Defines the endpoint for API requests
   *
   * @param endpoint [String] The desired endpoint for the API call
   * @returns [String] The full endpoint URL
   * */
  static endpoint(endpoint = String) {
    const api = `http://localhost:9000/${endpoint}`;
    return api;
  }
}
