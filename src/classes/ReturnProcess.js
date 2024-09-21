import axios from "axios";
import Api from "./Api.js";

export default class ReturnProcess {
  static getAll(setReturnProcesses) {
    axios
      .get(Api.endpoint("return-process"))
      .then((response) => {
        setReturnProcesses(response.data);
      })
      .catch((error) => console.error(error));
  }

  /**
   * Creates a new Return Process and reloads the window
   *
   * @param {JSON} data A JSON object containing the new Return Process' data
   */
  static create(data) {
    axios
      .post(Api.endpoint("return-process/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }

  /**
   * Updates a single ReturnProcess
   *
   * @param {String|Number} id The current ReturnProcess' ID
   * @param {JSON} data A JSON object containing Return Process' data to be updated
   *
   * @returns true on success; false on fail
   */
  static update(id, data) {
    axios
      .post(Api.endpoint(`return-process/update/${id}`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Tratativa de retorno salva com sucesso!");
          window.location.reload();
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }

  /**
   * Delete a single ReturnProcess and reload the window
   *
   * @param {String|Number} id The current ReturnProcess' ID
   */
  static delete(id, data) {
    axios
      .post(Api.endpoint(`return-process/${id}/delete`), {}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Tratativa de retorno excluída com sucesso!");
          window.location.reload();
        } else throw new Error("Erro na requisição");
      })
      .catch((error) => console.log(error));
  }
}
