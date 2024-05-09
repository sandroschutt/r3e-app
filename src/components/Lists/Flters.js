export function UsersFilter() {
    return (
        <div className="pagination">
            <ul>
                <li>Todos</li>
                <li><strong>Clientes</strong></li>
                <li>Empresas</li>
                <li>Escolas</li>
                <li>ONGs</li>
                <li style={{ border: "none" }}>Técnicos</li>
            </ul>
        </div>
    )
}

export function StudentsFilter() {
    return (
        <div className="pagination">
            <ul>
                <li>Todos</li>
                <li><strong>Aprovados</strong></li>
                <li>Reprovados</li>
                <li>Em aguardo</li>
                <li>Contemplados</li>
                <li style={{ border: "none" }}>Não contemplados</li>
            </ul>
        </div>
    )
}

export function FilterPublicDevices() {
    return (
        <div className="pagination">
            <ul>
                <li>Todos</li>
                <li>Smartphones</li>
                <li>Tablets</li>
                <li>Notebooks</li>
                <li>Computadores</li>
                <li style={{ border: "none" }}>Periféricos</li>
            </ul>
            <p>{"1 - 100"}</p>
        </div>
    );
}

export function FilterUserPickups() {
    return (
        <div className="pagination">
            <ul>
                <li>Todos</li>
                <li>Concluídas</li>
                <li>Pagamento pendente</li>
                <li>Coleta pendente</li>
                <li style={{ border: "none" }}>Coletados</li>
            </ul>
            <p>{"1 - 100"}</p>
        </div>
    );
}
