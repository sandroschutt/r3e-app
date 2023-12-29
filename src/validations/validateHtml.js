function validateHtml(input) {
  const htmlTagRegex = /<\/?[\w\s="/.':;#-\/\?]+>/;
  const containsHtml = htmlTagRegex.test(input);

  if (containsHtml) {
    return false;
  } else {
    return true;
  }
}

export {validateHtml}
