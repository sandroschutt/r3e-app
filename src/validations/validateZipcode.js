/**
 * Clears unwanted values from zipcode before sending to database;
 * 
 * @param {String} zipcode The zipcode to be formatted
 * @returns {String} The escaped zipcode
 * */ 
export function escapeZipcode(zipcode) {
    const formattedZipcode = zipcode.replace("-","");
    return formattedZipcode;
}