import axios from "axios";

export default class Student {
  static getAll(setStudents) {
    const endpoint = `http://localhost:9000/admin/students`;
    axios
      .get(endpoint)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }

  static create(data) {
    const endpoint = `http://localhost:9000/admin/students/create`;

    axios
      .post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (!response.status === 200) {
          throw new Error();
        }
        alert(`Estudante ${response.data.name} criado com sucesso!`)
        window.location.reload();
      })
      .catch((error) => {
        console.error(error)
        alert(error.response.data.errors[0].message);
      });
  }
}
