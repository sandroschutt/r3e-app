import axios from "axios";
import Api from "./Api";

export default class Pickup {
  static getPickup(id = String, setSchedule) {
    axios
      .get(Api.endpoint(`schedules/${id}`))
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Changes a Schedule accepted attribute to true
   *
   * @param {String|Number} id The Schedule's id
   * */
  static accept(id) {
    axios
      .post(
        Api.endpoint(`schedules/${id}/update`),
        { accepted: 1, status: 2 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao aceitar a coleta.`);
        alert(`Coleta aceita!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Changes a Schedule accepted attribute to false
   *
   * @param {String|Number} id The Schedule's id
   * */
  static deny(id) {
    axios
      .post(
        Api.endpoint(`schedules/${id}/update`),
        { accepted: 0, status: 7 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao rejeitar a coleta.`);
        alert(`Coleta rejeitada!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
