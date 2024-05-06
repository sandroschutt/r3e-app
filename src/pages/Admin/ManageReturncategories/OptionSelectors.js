export function DefaultSelectors(props) {
    const defaultOptions = [
        {
            label: "Finalidade",
            values: [
                "reciclagem",
                "desmonte",
                "recondicionamento",
                "reuso"
            ]
        },
        {
            label: "Processo",
            values: [
                "desmonte e reaproveitamento de materiais",
                "desmonte e reaproveitamento de componentes",
                "desmonte e reaproveitamento de peças", "instalação de peças de terceiros",
                "contemplar estudante com dispositivo"
            ]
        },
        {
            label: "Destino",
            values: [
                "empresa especializada",
                "oficina R3E",
                "estudantes"
            ]
        },
        {
            label: "Potencial tóxico",
            values: [
                "sim",
                "não"
            ]
        },
        {
            label: "Reparos",
            values: [
                "sim",
                "não"
            ]
        }
    ];

    return (
        <div className="manage-return-categories--category--options">
            {
                defaultOptions.map(option => {
                    return (
                        <div>
                            <label className="main-label">{`${option.label}:`}</label>
                            <select>
                                {option.values.map(value => {
                                    return <option key={value} value={value}>{value}</option>
                                })}
                            </select>
                        </div>
                    )
                })
            }
            {props.children}
        </div>
    )
}
