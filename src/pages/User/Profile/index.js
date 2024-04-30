import "./style.scss";
import BasicInfoForm from "../../../components/forms/ProfileForm/BasicInfoForm";
import UserInfoForm from "../../../components/forms/ProfileForm/UserInfoForm";

export default function Profile() {
    return (
        <>
            <h1>Editar Perfil</h1>
            <div className="profile-view">
                <BasicInfoForm />
                <UserInfoForm />
            </div>
            <div className="profile-view profile-view--actions">
                <input type="button" value="Salvar" />
                <input type="button" value="Cancelar" />
            </div>
        </>
    )
}