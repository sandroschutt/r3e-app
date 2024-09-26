import axios from "axios";
import Api from "./Api";

export default class Brands {
  /**
   * Recupera todas as marcas de dispositivos registradas no sistema
   *
   * @param setBrands Callback para setar as marcas na constante brands
   */
  static async getAll(setBrands) {
    await axios
      .get(Api.endpoint("brands"))
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => console.log(error));
  }

  static async create(data) {
    delete data["models"];
    delete data["devices"];

    axios
      .post(Api.endpoint("brands/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200) throw new Error("Falha ao criar o marca.");
        alert(`Marca ${response.data.name} criada com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async update(data) {
    delete data["models"];
    delete data["devices"];

    axios
      .post(Api.endpoint(`brands/${data.id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao atualizar a marca.");
        alert(`Marca ${data.id} atualizada com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  static async delete(id) {
    axios
      .post(Api.endpoint(`brands/${id}/delete`), {}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao excluir a marca.");
        alert(`Marca ${id} excluída com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
