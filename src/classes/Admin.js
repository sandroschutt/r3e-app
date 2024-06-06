import axios from "axios";

export class Admin {
    static getAllUsers(setUsers) {
        const endpoint = `http://localhost:9000/admin/users`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setUsers(response.data);
                }
            ).catch((error) => console.log(error))
    }

    static getSingleUser(id = Number, setUser) {
        const endpoint = `http://localhost:9000/user/${id}/data`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setUser(response.data);
                }
            ).catch((error) => console.log(error))
    }

    static getWorkshopDevices(setDevices) {
        const endpoint = `http://localhost:9000/admin/workshop/devices`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setDevices(response.data);
                }
            ).catch((error) => console.log(error))
    }

    static getAllSchedules(setSchedules) {
        const endpoint = `http://localhost:9000/admin/schedules`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setSchedules(response.data);
                }
            ).catch((error) => console.log(error))
    }

    static getAllStudents(setStudents) {
        const endpoint = `http://localhost:9000/admin/students`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setStudents(response.data);
                }
            ).catch((error) => console.log(error))
    }
}