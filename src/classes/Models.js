import axios from "axios";
import Api from "./Api";

export default class Models {
  /**
   * Recupera todas as marcas de dispositivos registradas no sistema
   * 
   * @param setModels Callback para setar as marcas na constante brands
  */
  static async getAll(setModels) {
    await axios
      .get(Api.endpoint('device-models'))
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => console.log(error));
  }
}
