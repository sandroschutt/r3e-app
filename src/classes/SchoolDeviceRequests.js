import axios from "axios";
import Api from "./Api";

export default class SchoolDeviceRequets {
  static async getAll(setSchoolDeviceRequets) {
    axios
      .get(Api.endpoint(`school-device-requests`))
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        setSchoolDeviceRequets(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Retrieves a single SchoolDeviceRequest
   *
   * @param {String|Number} id The SchoolDeviceRequest's id
   * @param {CallableFunction} setSingleSchoolDeviceRequest A callback function that sets the SchoolDeviceRequest state
   */
  static async getOne(id, setSingleSchoolDeviceRequest) {
    axios
      .get(Api.endpoint(`school-device-requests/${id}`))
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        setSingleSchoolDeviceRequest(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Creates a single SchoolDeviceRequest
   *
   * @param {JSON} data A JSON object containing the new SchoolDeviceRequest's data
   * @param {String} userRole The current User's role
   */
  static async create(data, userRole) {
    axios
      .post(
        Api.endpoint(`school-device-requests/create`),
        {
          schoolId: data.schoolId,
          deviceId: data.deviceId
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        alert(`Pedido de doação criado com sucesso!`);
        window.location.href = window.location.origin + `/app/school-device-requests/${response.data.id}`;
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Deletes all School's DeviceRequests
   *
   * @param {String|Number} id The SchoolDeviceRequest's id
   * */
  static async delete(id) {
    axios
      .post(
        Api.endpoint(`school-device-requests/${id}/delete`),
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        alert(`Pedido de doação #${id} excluído com sucesso!`);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Retrieves all School's DeviceRequests
   *
   * @param {String|Number} id The School's id
   * @param {CallableFunction} setSchoolDeviceRequets A callback function for setting the SchoolDeviceRequests' state
   * */
  static async getSchoolRequests(id, setSchoolDeviceRequets) {
    axios
      .get(Api.endpoint(`school-device-requests/school/${id}`))
      .then((response) => {
        if (response.status !== 200) throw new Error("Erro na requisição");
        setSchoolDeviceRequets(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Approves a single SchoolDeviceRequest
   *
   * @param {String|Number} id The SchoolDeviceRequest's id
   * */
  static async approve(id) {
    axios
      .post(
        Api.endpoint(`school-device-requests/${id}/approve`),
        { approve: 1 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao aprovar o pedido de doação.`);
        alert(`Pedido de doação ${id} aprovado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }

  /**
   * Reproves a single SchoolDeviceRequest
   *
   * @param {String|Number} id The SchoolDeviceRequest's id
   * */
  static async reprove(id) {
    axios
      .post(
        Api.endpoint(`school-device-requests/${id}/approve`),
        { approve: 0 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao reprovar o pedido de doação.`);
        alert(`Pedido de doação ${id} reprovado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
