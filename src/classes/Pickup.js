import axios from "axios";

export default class Pickup {
  static getPickup(id = String, setSchedule) {
    const endpoint = `http://localhost:9000/schedules/${id}`;
    axios.get(endpoint).then(
        (response) => {
            setSchedule(response.data);
            console.log(response.data);
        }
    ).catch((error) => console.log(error));
  }
}
