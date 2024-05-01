import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function ListUserPickups() {
  return (
    <li>
      <div className="pickup--filter">
        <p className="icon">
            <FontAwesomeIcon icon={faCircleCheck} />
        </p>
        <p>Motorola Moto G2</p>
        <p>Vendor:</p>
        <p>Vendor Name</p>
        <p>Data: 31/12/1999</p>
      </div>
    </li>
  );
}
