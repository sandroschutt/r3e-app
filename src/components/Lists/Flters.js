export function UsersFilter() {
    return (
        <div className="pagination">
            <ul>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Todos</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}><strong>Clientes</strong></li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Empresas</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Escolas</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>ONGs</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }} style={{ border: "none" }}>Técnicos</li>
            </ul>
        </div>
    )
}

export function StudentsFilter() {
    return (
        <div className="pagination">
            <ul>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Todos</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}><strong>Aprovados</strong></li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Reprovados</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Em aguardo</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Contemplados</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }} style={{ border: "none" }}>Não contemplados</li>
            </ul>
        </div>
    )
}

export function FilterPublicDevices() {
    return (
        <div className="pagination">
            <ul>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Todos</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Smartphones</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Tablets</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Notebooks</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Computadores</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }} style={{ border: "none" }}>Periféricos</li>
            </ul>
            <p>{"1 - 100"}</p>
        </div>
    );
}

export function FilterUserPickups() {
    return (
        <div className="pagination">
            <ul>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Todos</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Concluídas</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }}>Pagamento pendente</li>
                <li onClick={(event) => {
                    alert("Must filter items in list and display filtered list");
                    setActiveFilterItem(event.target);
                }} style={{ border: "none" }}>Coleta pendente</li>
            </ul>
        </div>
    );
}

function setActiveFilterItem(filterItem) {
    filterItem.style.color = "green";
    filterItem.style.fontWeight = "bold";
}