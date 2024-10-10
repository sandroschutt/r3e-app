import axios from 'axios'
import Api from './Api'

export default class AdminBoardInfo {
  static async getStudents (setValues) {
    axios
      .get(Api.endpoint(`students/benefited`))
      .then(response => {
        if (response.status !== 200) throw new Error('Falha na requisição.')
        setValues(response.data)
      })
      .catch(error => {
        alert(error.message)
        console.error(error)
      })
  }

  getRegisterMonth(data){
    let date = new Date(data.createdAt)
    return date.getMonth() +1
  }

  static async getUserRegisters(handleUserRegisters){
    axios
      .get(Api.endpoint(`createdat/users`))
      .then(response => {
        if(response.status !== 200) throw new Error(`Nenhum usuário encontrado.`)
          handleUserRegisters(response.data)   
      })
  } 

  static async getDevicesType (handleDevicesType) {
    axios
      .get(Api.endpoint(`type/devices`))
      .then(response => {
        if (response.status !== 200) throw new Error('Falha na requisição.')
          console.error(response.data)
          handleDevicesType(response.data)
      })
      .catch(error => {
        alert(error.message)
        console.error(error)
      })
  }
}
