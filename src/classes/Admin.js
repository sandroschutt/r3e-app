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

    static getAllSchedules(setSchedules) {
        const endpoint = `http://localhost:9000/admin/schedules`;
        axios.get(endpoint)
            .then(
                (response) => {
                    setSchedules(response.data);
                }
        ).catch((error) => console.log(error))
    }
}