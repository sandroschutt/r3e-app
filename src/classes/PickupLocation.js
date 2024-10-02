import axios from "axios";

export default class PickupLocation {
    static getAll(setLocations) {
        const endpoint = `http://localhost:9000/pickup-locations/`;
        axios.get(endpoint).then(
            (response) => {
                setLocations(response.data)
            }
        ).catch((error) => console.log(error));
    }

    static getLocation(id = String, setPickupLocation) {
        const endpoint = `http://localhost:9000/pickup-locations/${id}`;
        axios.get(endpoint).then(
            (response) => {
                setPickupLocation(response.data)
            }
        ).catch((error) => console.log(error));
    }
}