export function handleInput(event, callback) {
  let value = event.target.value;
  callback(value);
}