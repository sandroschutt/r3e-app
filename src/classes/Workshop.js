import axios from "axios";

export default class Workshop {
  static async getAll() {}

  static async getOne(deviceId = String | Number) {
    const endpoint = `http://localhost:9000/workshop/devices/${deviceId}`;

    axios
      .get(endpoint)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro na requisição");
        }

        alert("Dispositivo encontrado!");
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async create(deviceData = JSON, userRole = String) {
    if(userRole !== "Admin" && userRole !== "Technician") {
        return;
    }

    const endpoint = `http://localhost:9000/workshop/devices/create`;

    axios
      .post(endpoint, deviceData, {
        headers: {
            "Content-Type": "application/json"
        }
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro na requisição");
        }

        alert("Avaliação salva com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async update() {}

  static async delete() {}
}
