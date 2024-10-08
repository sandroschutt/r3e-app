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

  // static countRegisterPerMonth (data) {
  //   //recebe todos os usuário como parametro
  //   // criar uma função recursiva que checa um usuário por vez
  //   // adiciona 1 no contador de totalOfUsers
  //   // checa se ele se cadastrou neste ano.
  //   // adiciona no mês +1 e remove este cara da lista
  //   this.getRegisterMonth(data)
  // }

  // getRegisterMonth(data){
  //   let date = new Date(data.createdAt)
  //   return date.getMonth() +1
  // }

  // static async getUsers(){
  //   axios
  //     .get(Api.endpoint(`users/${1}`))
  //     .then(response => {
  //       if(response.status !== 200) throw new Error(`Nenhum usuário encontrado.`)
  //     countRegisterPerMonth(response.data)   
  //     })

  // } 
}
