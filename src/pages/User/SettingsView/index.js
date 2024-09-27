import { SettingsComponent } from "../../../components/SettingsComponent";
import { useUserDataContext } from "../../../context/UserDataContext";
import "./style.scss";

export function SettingsView(){
    const { userData } = useUserDataContext();

    return(
        <div>
            <h2 className="mb-5 mt-3">Configurações</h2>
            <SettingsComponent id={userData.id}/>
        </div>
    );
}