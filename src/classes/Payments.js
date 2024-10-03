import axios from "axios";
import Api from "./Api";

export default class Payments {
  /**
   * Retrieves all Payments from the API
   *
   * @param {CallableFunction} setPayments A callback function for setting the Payments' state
   * @returns {Array} An array containing all Database payments
   * */
  static async getAll(setPayments) {
    axios
      .get(Api.endpoint("payments"))
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Retrieves a single Payment from the API
   *
   * @param {String|Number} id The Payment's id
   * @param {CallableFunction} setPayment A callback function for setting the Payments' state
   * @returns {JSON} A JSON object containing all Database payments
   * */
  static async getOne(id, setPayment) {
    axios
      .get(Api.endpoint(`payments/${id}`))
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Creates a new Payment
   *
   * @param {JSON} data Thw new Payment's data
   * */
  static async create(data) {
    axios
      .post(Api.endpoint("payments/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao criar a ordem de pagamento.");
        alert(`Ordem de pagamento criada com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Updates a new Payment
   *
   * @param {String|Number} id The Payment's id
   * @param {JSON} data Thw new Payment's data
   * */
  static async update(id, data) {
    axios
      .post(Api.endpoint(`payments/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao atualizar a ordem de pagamento.");
        alert(`Ordem de pagamento atualizada com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Deletes a single Payment
   *
   * @param {String|Number} id The Payment's id
   * */
  static async delete(id) {
    axios
      .post(
        Api.endpoint(`payments/${id}/delete`),
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao excluir a ordem de pagamento.");
        alert(`Ordem de pagamento excluída com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
