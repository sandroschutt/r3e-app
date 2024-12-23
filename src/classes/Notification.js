import axios from "axios";
import Api from "./Api";

export default class Notification {
  static async getAll(id, setNotifications) {
    axios
      .get(Api.endpoint(`users/${id}/notifications`))
      .then((response) => {
        if (response.status !== 200) throw new Error("Falha na requisição.");
        setNotifications(response.data.reverse());
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async update(id, userId, data) {
    axios
      .post(Api.endpoint(`users/${userId}/notification/${id}`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            `Falha ao alterar status da notificação ${id} para lida.`
          );
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
