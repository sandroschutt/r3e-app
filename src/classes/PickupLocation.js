import axios from "axios";
import Api from "./Api";

/**
 * Retrieves all PickupLocations
 *
 * @param {CallableFunction} setPickupLocation A callback function for setting the PickupLocations' state
 *
 * @returns {Array} All PickupLocations
 * */
export default class PickupLocation {
  static getAll(setLocations) {
    axios
      .get(Api.endpoint(`pickup-locations`))
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Retrieves a single PickupLocation
   *
   * @param {String|Number} id The PickupLocation's id
   * @param {CallableFunction} setPickupLocation A callback function for setting the Pickup Location's state
   *
   * @returns {JSON} A single PickupLocation JSON object
   * */
  static getOne(id, setPickupLocation) {
    axios
      .get(Api.endpoint(`pickup-locations/${id}`))
      .then((response) => {
        setPickupLocation(response.data);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Create a single PickupLocation
   *
   * @param {Data} data The new PickupLocation's data
   * */
  static async create(data) {
    axios
      .post(Api.endpoint("pickup-locations/create"), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao criar o local de coleta.");
        alert(`Local de coleta ${response.data.name} criado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Retrieves a single PickupLocation
   *
   * @param {String|Number} id The PickupLocation's id
   * @param {JSON} data A JSON object containing the new PickupLocation's data
   * */
  static async update(id, data) {
    axios
      .post(Api.endpoint(`pickup-locations/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao editar o local de coleta.");
        alert(`Local de coleta editado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Retrieves a single PickupLocation
   *
   * @param {String|Number} id The PickupLocation's id
   * */
  static async delete(id) {
    axios
      .post(
        Api.endpoint(`pickup-locations/${id}/delete`),
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Falha ao excluir o local de coleta.");
        alert(`Local de coleta excluído com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
