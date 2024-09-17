import axios from "axios";

export default class Models {
  /**
   * Recupera todas as marcas de dispositivos registradas no sistema
   * 
   * @param setModels Callback para setar as marcas na constante brands
  */
  static async getAll(setModels) {
    const endpoint = `http://localhost:9000/models`;
    await axios
      .get(endpoint)
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => console.log(error));
  }
}
