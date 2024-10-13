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
  if (props.items !== "")
    return (
      <>
        <CreateDeviceModal brands={props.brands} models={props.models} />
        <Accordion defaultActiveKey="0">
          {props.items.map((item, index) => {
            return (
              <DeviceAccordionItems
                key={index}
                index={index}
                device={item}
                brands={props.brands}
                models={props.models}
              />
            );
          })}
        </Accordion>
      </>
    );
}
