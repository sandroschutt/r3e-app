import axios from "axios";
import Api from "./Api.js";

export default class ReturnProcess {
  static getAllProcesses(setReturnProcesses) {
    axios
      .get(Api.endpoint("return-process"))
      .then((response) => {
        setReturnProcesses(response.data);
      })
      .catch((error) => console.error(error));
  }

  /**
   * Creates a new Return Process
   *
   * @param data A JSON object containing the new Return Process' data
   */
  static create(data = JSON) {
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
   * @param id [String|Number] The current ReturnProcess' ID
   * @param data [JSON] A JSON object containing Return Process' data to be updated
   *
   * @returns true on success; false on fail
   */
  static update(id = String | Number, data = JSON) {
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
}
