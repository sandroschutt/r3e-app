export function validatePhones(phoneNumber = String(11)) {
    // if (typeof phoneNumber !== 'string') {
    //     throw new Error('Input must be a string');
    // }
    
    // if (phoneNumber.length !== 11) {
    //     throw new Error('Input must be exactly 11 characters long');
    // }

    const formattedNumber = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    return formattedNumber;
}