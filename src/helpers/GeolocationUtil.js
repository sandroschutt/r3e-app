import axios from "axios";

/**
 * Gets the latitude and longitude for a given address
 *
 * @param {JSON} address A JSON object containing the address' data
 * @param {CallableFunction} setGeolocation A callback function to set the geolocation's status
 * @returns {Array} geolocation A array containing the latitude and longitude for the address
 */
export async function GeolocationUtil(address, setGeolocation) {
  const requestUrl = `https://nominatim.openstreetmap.org/search?q=${
    address.number
  }+${toQueryString(address.street)},${toQueryString(
    address.neighborhood
  )},${toQueryString(address.city)},${address.state}&format=json&limit=1`;

  try {
    const response = await axios.get(requestUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      setGeolocation([lat, lon]);
    } else {
      console.error("No geolocation data found for the given address");
      setGeolocation(null);
    }
  } catch (error) {
    console.error("Error fetching geolocation data:", error.message);
    setGeolocation(null);
  }
}

function toQueryString(string) {
  const formatedString = string.replace(/\s/g, "+");
  return formatedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// const address = {
//   number: "340",
//   street: "Pedro Batista da Silveira",
//   neighborhood: "Jardim Alvorada",
//   city: "Capão Bonito",
//   state: "SP",
// };

// (async () => {
//   const geolocation = await GeolocationUtil(address);
//   console.log("Geolocation:", JSON.stringify(geolocation)); // Example output: [ -23.5896, -48.0530 ]
// })();
