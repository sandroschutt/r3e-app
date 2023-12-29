export function validateSQL(input) {
  const sqlSelectRegex =
    /^SELECT\s+(?:\w+\s*(?:,\s*\w+\s*)*)?\s+FROM\s+\w+\s*$/i;

  if (sqlSelectRegex.test(input)) {
    throw new Error("The input contains SQL");
  } else return true;
}
