import axios from 'axios'
import Api from './Api'

export default class Capabilities {
  static async getOne (id, setCapabilities) {
    axios
      .get(Api.endpoint(`capability/${id}`))
      .then((response) => {
        if (response.status !== 200) throw new Error('Falha na requisição.')
        setCapabilities(response.data)
      })
      .catch(error => {
        alert(error.message)
        console.error(error)
      })
  }

  static async update(id, data) {
    axios
      .post(Api.endpoint(`/capability/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Falha ao atualizar capacidades do perfil ${id}.`);
        alert(`Capacidades atualizadas!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
