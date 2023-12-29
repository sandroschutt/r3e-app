import { validationMessages } from "./messages";
import { validateHtml } from "../validateHtml";

export default class ValidateInputs {
  static emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  static passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  static text(event) {
    let value = event.target.value;
    let isValidInput = this.escape(value).valid;
    let element = event.target.style;

    if (!isValidInput) {
      element.border = "2px solid red";
      element.color = "red";
      return false;
    } else {
      element.border = "1px solid #198754";
      element.color = "#198754";
      return true;
    }
  }

  static empty(input) {
    if (input === "" || input === undefined) {
      return {
        valid: false,
        message: validationMessages.input.empty,
      };
    } else {
      return {
        valid: true,
        message: "",
      };
    }
  }

  static escape(input = String) {
    let isEmpty = this.empty(input);

    if (isEmpty.valid && validateHtml(input)) {
      return {
        valid: true,
        message: "",
      };
    } else {
      return {
        valid: false,
        message:
          isEmpty.valid === false
            ? validationMessages.input.empty
            : validationMessages.input.invalid,
      };
    }
  }

  static email(event) {
    let input = event.target.value;
    let element = event.target.style;

    try {
      if (this.emailRegex.test(input) && this.escape(input).valid) {
        element.border = "1px solid #198754";
        element.color = "#198754";
        return true;
      } else {
        element.border = "2px solid red";
        element.color = "red";
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static registrationEmail(inputs = Array) {
    try {
      if (inputs[0] === "" || inputs[1] === "") {
        throw new Error(validationMessages.email.missing);
      }

      if (inputs[0] === inputs[1]) {
        inputs.map((value, index) => {
          inputs[index] = this.emailRegex.test(value);
          if (inputs[index] === false) {
            throw new Error(validationMessages.email.invalid);
          }
          return value;
        });
      } else throw new Error(validationMessages.email.missmatch);

      return {
        valid: true,
        message: "",
      };
    } catch (error) {
      return {
        valid: false,
        message: error.message,
      };
    }
  }

  static registrationCode(input = String) {
    try {
      if (input === "") {
        throw new Error(
          validationMessages.twoFactorAuthentication.registration.missing
        );
      }

      if (validateHtml(input) && input !== "") {
        return {
          valid: true,
          message: "",
        };
      } else
        throw new Error(
          validationMessages.twoFactorAuthentication.registration.invalid
        );
    } catch (error) {
      return {
        valid: false,
        message: error.message,
      };
    }
  }

  static password(input = String) {
    if (input.length >= 8 && input.length <= 16 && this.passwordRegex.test(input)) {
      return true;
    } else return false;
  }

  static formData(userData = Array) {
    let message = validationMessages.form.invalid;

    let results = userData.map((data) => {
      let isEmpty = this.empty(data);
      let hasHtml = validateHtml(data);

      if (isEmpty.valid && hasHtml) {
        return true;
      } else return false;
    });

    for (let i = 0; i <= results.length - 1; i++) {
      if (results[i] === false || results[i] === undefined) {
        results = false;
        break;
      } else {
      }
    }

    let result = {
      valid: results === false ? false : true,
      message: message,
    };

    return result;
  }

  static allSubmitedInputs(inputs) {
    inputs.forEach((input) => {
      if (input.value === "" && validateHtml(input)) {
        input.style.color = "red";
        input.style.border = "2px solid red";
      }
    });
  }
}
