import axios from "axios";
import Api from "./Api";

export default class Pickup {
  /**
   * Retrieves a single Schedule onbject from the database
   * 
   * @param {Number!String} id The Schedule's ID
   * @param {CallableFunction} setSchedule A callback function that sets the Schedule's status
  */
  static getPickup(id, setSchedule) {
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
        Api.endpoint(`schedules/${id}/accept`),
        {},
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
        window.location.href = window.location.origin + `/user/pickups/${id}`;
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
        Api.endpoint(`schedules/${id}/deny`),
        {},
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

  /**
   * Changes a Schedule status attribute to colected
   *
   * @param {String|Number} id The Schedule's id
   * */
  static colect(id) {
    axios
      .post(
        Api.endpoint(`schedules/${id}/colect`),
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Não foi possível realizar a ação de coletar.`);
        alert(`Dispositivo coletado!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
