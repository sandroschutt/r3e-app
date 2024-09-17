import axios from "axios";

export default class ReturnProcess {
  static getAllProcesses(setReturnProcesses) {
    const endpoint = "http://localhost:9000/admin/return-process";
    axios
      .get(endpoint)
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
    let endpoint = `http://localhost:9000/admin/return-process/create`;
    axios
      .post(endpoint, data, {
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
}
