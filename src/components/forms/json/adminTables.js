export const APIDevicesResponse =
{
    labels: ["Método", "Endpoint", "Descrição"],
    data: [
        ["GET", "https://r3e.org/associate/devices", "Retorna uma lista com todos os dispositivos cadastrados na plataforma"],
        ["GET", "https://r3e.org/associate/devices/<id>", "Retorna um único dispositivo"]
    ]
};

export const APIDevicesHeaders =
{
    labels: ["Parâmetro", "Valor", "Obrigatório", "Descrição"],
    data: [
        ["r3e_partner_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "sim", "Garante autenticidade para a requisição. Caso sua requisição não contenha um token válido, não será aceita pela API e respoonderá com status 503."],
        ["page", "1-n", "não", "Define o número de páginas para a lista de objetos retornada pela requisição"],
        ["limit", "1-n", "não", "Define o número de objetos retornados na lista de objetos devolvida pela requisição"],
        ["sort", "nome, status, categoria, data", "não", "Organiza a lista de dispositivos de acordo com o filtro definido"],
        ["search", "nome, status, categoria, data", "não", "Busca dispositivos que correspondem ao valor da busca"],
    ]
};
