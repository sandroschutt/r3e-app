import axios from "axios";
import Api from "./Api";

export default class SchoolDeviceRequets {
  static async getAll(setSchoolDeviceRequets) {
    axios
      .get(Api.endpoint(`school-device-requests`))
      .then((response) => {
        if(response.status !== 200) throw new Error("Erro na requisição");
        setSchoolDeviceRequets(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async getOne() {}

  static async create() {}

  static async update() {}

  static async delete() {}
}
