import ValidateInputs from "../../../validations/Inputs";

export function handleInput(event, callback, testData = null) {
  let value = event.target.value;
  callback(value);
}

export function handleSubmissionEvaluation() {
  document.querySelectorAll("input").forEach((input) => {
    ValidateInputs.textBySelection(input);
  });
}

export function getFormValues(setInfo, setAddress) {
  let info = [];
  let address = [];

  try {
    document.querySelectorAll("#userInfo input").forEach((input) => {
      info.push(input.value);
    });

    info.push(document.querySelector("#userInfo select").value);

    document.querySelectorAll("#userAddress input").forEach((input) => {
      address.push(input.value);
    });

    setInfo(info);
    setAddress(address);
  } catch (error) {
    console.log(error)
  }
}
