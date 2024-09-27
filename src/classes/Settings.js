import axios from "axios";
import Api from "./Api";

export default class Settings {
  static async getOne(id, setSettings) {
    axios
      .get(Api.endpoint(`users/${id}/settings`))
      .then((response) => {
        if (response.status !== 200) throw new Error("Falha na requisição.");
        setSettings(response.data)
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async update(id, data) {
    axios
      .post(Api.endpoint(`users/${id}/settings/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao atualizar configurações.`);
        alert(`Configurações atualizadas!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
