export function validatePhones(phoneNumber = String(11)) {
    phoneNumber = phoneNumber.replace("-","");
    const formattedNumber = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    return formattedNumber;
}

export function escapePhoneNumber(phoneNumber = String(11)) {
    const formattedNumber = phoneNumber.replace(/[-()\s]/g, '');
    return formattedNumber;
}