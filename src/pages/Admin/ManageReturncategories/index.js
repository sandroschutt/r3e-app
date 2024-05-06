import "./style.scss";
import { DefaultSelectors } from "./OptionSelectors";

export default function ManageReturncategories() {
    return (
        <>
            <h1>Trativas de Retorno</h1>
            <div className="manage-return-categories--view">
                <div className="manage-return-categories--category">
                    <h5>{"REEE (D):"}</h5>
                    <DefaultSelectors />
                </div>

                <div className="manage-return-categories--category">
                    <h5>{"Reaproveitamento de componentes (C):"}</h5>
                    <DefaultSelectors />
                </div>

                <div className="manage-return-categories--category">
                    <h5>{"Reaproveitamento de peças (B):"}</h5>
                    <DefaultSelectors />
                </div>

                <div className="manage-return-categories--category">
                    <h5>{"Recondicionamento (A):"}</h5>
                    <DefaultSelectors>
                        <div>
                            <label className="main-label">{"Destino 2:"}</label>
                            <select>
                                <option>estudantes</option>
                                <option>empresa especializada</option>
                                <option>ONG</option>
                            </select>
                        </div>
                    </DefaultSelectors>
                </div>

                <div className="manage-return-categories--category">
                    <h5>{"Reutilização (S):"}</h5>
                    <DefaultSelectors />
                </div>

                <div className="manage-return-categories--actions">
                    <button>{"salvar"}</button>
                    <button>{"cancelar"}</button>
                </div>
            </div>
        </>
    )
}