import { SettingsComponent } from "../../../components/SettingsComponent";
import "./style.scss";

export function SettingsView(){
    return(
        <div>
            <h2 className="mb-5 mt-3">Configurações</h2>
            <SettingsComponent/>
        </div>
    );
}