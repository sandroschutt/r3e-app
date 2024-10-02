import axios from "axios";
import Api from "./Api";

export default class Payments {
    /**
     * Retrieves all Payments from the API
     * 
     * @param {CallableFunction} setPayments A callback function for setting the Payments' state
     * @returns {Array} An array containing all Database payments
     * */ 
    static async getAll(setPayments) {
        axios.get(Api.endpoint('payments')).then((response) => {
            console.log(response);
            setPayments(response.data);
        }).catch((error) => {
            console.error(error)
        })
    }

    static async getOne(id) {}

    static async create() {}

    static async update(id) {}

    static async delete(id) {}
}