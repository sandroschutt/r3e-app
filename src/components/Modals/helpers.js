import Device from "../../classes/Device";

/**
 * Defines which state options to show to the user based on the current view.
 *
 * @param pathname The current pathname where the select option input is being loaded
 * @return The options list based on the current view
 */
export function handleStateOptions(pathname = String) {
  const stateOptions = [
    { option: "Bom", value: "bom" },
    { option: "Regular", value: "regular" },
    { option: "Ruim", value: "ruim" },
  ];

  if (pathname !== "/admin/workshop") {
    stateOptions.unshift({ option: "Muito Bom", value: "muito-bom" });
    stateOptions.push({ option: "Inutilizável", value: "inutilizavel" });
  }

  return stateOptions.map((state) => {
    return (
      <option key={Math.random()} value={state.value}>
        {state.option}
      </option>
    );
  });
}

/**
 * Handles the POST requests for Devices
 * 
 * @param userId The ID of the Device creator
 * @param userRole The role of the Device creator
 * @param newDevice A JSON Object containing the current device data
 * 
 * @return New Device on success; Error on fail
 * */ 
export function handlePostDeviceFormSubmit(userId = String|Number, role = String|Number, newDevice) {
  if (userId === "" || userId === null) return;
  role = role.toLowerCase();
  Device.create(newDevice, role);
}

/**
 * Handles the default placeholder options for new Devices
 * 
 * @param editable [Bool] If the modal is for editing or adding devices
 * @param text [String] The label to place inside the placeholder
 * 
 * @return The placeholder <option> JSX element
 * */ 
export function handleSelectPlaceholder(editable, placeholder = "-- Selecione") {
  if(editable) return;

  return <option>{placeholder}</option>;
}
