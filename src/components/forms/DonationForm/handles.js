function handleInput(event, callback) {
  callback(event.target.value);
}

function handleSubmit(
  navigate,
  setLiftValues,
  columnOneValues,
  columnTwoValues
) {
  setLiftValues(true);
  console.log([columnOneValues, columnTwoValues]);
  navigate("/auth/register");
}

function handleStateLifting(setValues, setLiftValues, inputs = Array) {
  try {
    if (
      inputs[0] !== "" &&
      inputs[1] !== "" &&
      inputs[2] !== "" &&
      inputs[3] !== false
    ) {
      setValues([inputs[0], inputs[1], inputs[2]]);
      setLiftValues(false);
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleInput, handleSubmit, handleStateLifting };
