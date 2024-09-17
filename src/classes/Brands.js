import axios from "axios";

export default class Brands {
  /**
   * Recupera todas as marcas de dispositivos registradas no sistema
   * 
   * @param setBrands Callback para setar as marcas na constante brands
  */
  static async getAll(setBrands) {
    const endpoint = `http://localhost:9000/brands`;
    await axios
      .get(endpoint)
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => console.log(error));
  }
}
