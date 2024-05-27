import "./style.scss";
import { SingleViewMap } from "../../Maps";

export default function SingleDeviceClient(props) {
  return (
    <>
      <div className="single-device--description">
        <h4>Descrição</h4>
        <p>
          {props.description}
        </p>
      </div>
      <div className="single-device--map">
        <h4>Localização e distância</h4>
        <SingleViewMap />
      </div>
    </>
  );
}
