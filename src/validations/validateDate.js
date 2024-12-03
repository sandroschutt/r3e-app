/**
 * Formats a date string
 *
 * @param {String} datestring
 * @returns {String} formattedDate
 */
export function validateDate(dateString) {
  const date = formatDate(dateString);
  const formattedDate = `${date.day}/${date.month}/${date.year}`;
  return formattedDate;
}

export function validateInputDateValue(dateString) {
  const date = formatDate(dateString);
  const defaultDateValue = `${date.year}-${date.month}-${date.day}`;
  return defaultDateValue;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return {
    day: day,
    month: month,
    year: year
  }
}
