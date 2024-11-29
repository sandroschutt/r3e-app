import { Accordion } from "react-bootstrap";
import { DeviceAccordionItems } from "../Accordions/DevicesAccordionItems";
import { CreateDeviceModal } from "../Modals/Device/CreateDeviceModal";

/**
 * A responsive dropdown list
 *
 * @prop {Array} items An array containing JSON objects
 * @prop {JSX} content The list items' custom content
 */
export function DevicesList(props) {
  if (props.devices !== "")
    return (
      <>
        <CreateDeviceModal brands={props.brands} models={props.models} />
        <Accordion defaultActiveKey="0">
          {props.devices.map((device, index) => {
            return (
              <DeviceAccordionItems
                key={index}
                index={index}
                device={device}
                brands={props.brands}
                models={props.models}
              />
            );
          })}
        </Accordion>
      </>
    );
}
