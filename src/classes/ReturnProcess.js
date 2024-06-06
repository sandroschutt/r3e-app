import axios from "axios";

export default class ReturnProcess {
    static getAllProcesses(setReturnProcesses) {
        const endpoint = "http://localhost:9000/admin/return-processes";
        axios.get(endpoint)
        .then(response => {
            setReturnProcesses(response.data);
            // console.log(response.data)
        })
        .catch(error => console.error(error));
    }
}