import axios from "axios";
import Api from "./Api";

export default class Student {
  static getAll(setStudents) {
    axios
      .get(Api.endpoint('students'))
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }

  static create(data) {
    axios
      .post(Api.endpoint('students/create'), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (!response.status === 200) {
          throw new Error();
        }
        alert(`Estudante ${response.data.name} criado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.errors[0].message);
      });
  }

  /**
   * Updates the current Student
   * 
   * 
   * @param { String|Number } id The current Student's ID
   * @param { JSON } data A JSON object with the student data
   * 
   * @returns { AxiosResponse } A AxiosResponse Object
   * */ 
  static update(id, data) {
    delete data['id'];
    delete data['benefited'];
    delete data['school'];
    delete data['returned'];
    delete data['createdAt'];
    delete data['updatedAt'];

    axios
      .post(Api.endpoint(`students/${id}/update`), data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (!response.status === 200) {
          throw new Error();
        }
        alert(`Estudante ${data.name} atualizado com sucesso!`);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.errors[0].message);
      });
  }
}