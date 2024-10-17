/**
 * Formats a date string
 * 
 * @param {String} datestring
 * @returns {String} formattedDate
*/
export function validateDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate.replaceAll("-", "/");
}
