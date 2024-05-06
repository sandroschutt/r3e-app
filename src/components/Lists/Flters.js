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
