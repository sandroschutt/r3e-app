import axios from "axios";

export default class PickupLocation {
    static getAllLocations(setLocations) {
        const endpoint = `http://localhost:9000/pickup-locations/`;
        axios.get(endpoint).then(
            (response) => {
                setLocations(response.data)
                console.log(response.data)
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