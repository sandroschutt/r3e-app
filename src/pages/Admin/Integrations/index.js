import { Button, Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getSingleDeviceResponse } from "../../../components/forms/json/apiIntegrationOutputs.js";
import { APIDevicesResponse, APIDevicesHeaders } from "../../../components/forms/json/adminTables.js";
import { APIRoutesTable } from "../../../components/Tables/index.js";

export default function Integrations() {

    return (
        <Row id="public-devices--view" className="flex-column">
            <Col>
                <UserHeader pageTitle={"Integração API"} />
            </Col>
            <Col>
                <div>
                    <div className="mb-5">
                        <p>
                            Para maximizar o valor que nossos parceiros obtêm, disponibilizamos dados anonimizados que podem ser utilizados para diversas finalidades, como pesquisas, estudos de mercado e desenvolvimento de novos produtos. A anonimização dos dados garante a privacidade dos nossos usuários, assegurando que nenhuma informação pessoal possa ser identificada ou rastreada de volta aos indivíduos.
                        </p>
                        <p>
                            Além disso, fornecemos acesso ilimitado aos dados para nossos parceiros. Isso significa que não há restrições quanto ao volume de dados que podem ser acessados, permitindo uma análise mais profunda e abrangente.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 className="mb-3">Token de autenticação</h3>
                        <p>
                            O `r3e_partner_token` é um token de autenticação obrigatório para acessar nossos endpoints de API. Ele garante que apenas parceiros autorizados possam acessar os dados, mantendo a segurança e integridade das informações. Cada parceiro recebe um token único, que deve ser incluído nos headers de todas as requisições GET.
                        </p>

                        <Button variant="success" onClick={() => alert("Deve exibir um modal com o token, mas não deixá-lo disponível para o usuário")}>Gerar token</Button>
                    </div>

                    <div className="mb-5">
                        <h3 className="mb-3">Endpoints</h3>
                        <p>
                            Disponibilizamos endpoints de API (apenas GET) para que nossos clientes possam acessar dados e gerar estatísticas personalizadas. Dessa forma, fornecemos informações valiosas sem comprometer a segurança, já que não permitimos o envio de dados pelos clientes. Isso garante a integridade e a privacidade de nossas operações.
                        </p>
                        <APIRoutesTable tableData={APIDevicesResponse} />
                    </div>

                    <div className="mb-5">
                        <h3 className="mb-3">Headers</h3>
                        <p>
                            Nossos endpoints de API (apenas GET) utilizam headers e query params para fornecer dados de forma segura e personalizada. O parâmetro `r3e_partner_token` é obrigatório para autenticação de parceiros, garantindo acesso autorizado. Dessa forma, nossos clientes podem gerar estatísticas personalizadas com segurança, sem a necessidade de enviar dados para nossa plataforma.
                        </p>
                        <APIRoutesTable tableData={APIDevicesHeaders} />
                    </div>

                    <div className="mb-5">
                        <h3 className='mb-3'>Exemplo de Requisição:</h3>
                        <p>
                            Para acessar nossos dados, utilize a seguinte requisição GET:
                        </p>
                        <SyntaxHighlighter
                            language='php'
                            style={vs}
                            customStyle={{ fontSize: '20px' }}
                            lineNumberContainerStyle={true}
                        >
                            {"curl --location --request GET 'https://r3e.org/associate/devices?page=1&limit=10&sort=name&available=true&r3e_partner_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9%09'"}
                        </SyntaxHighlighter>
                        <p className="mt-3">
                            Este exemplo de requisição mostra como parceiros autenticados com o r3e_partner_token obtenham estatísticas mensais de dispositivos e coletas, garantindo a segurança e personalização dos dados acessados.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 className='mb-3'>Resposta:</h3>
                        <p>
                            A resposta é em JSON e a requisição pode ser feita usando diversas bibliotecas e APIs embutidas em várias linguagens de programação.
                        </p>
                        <h5 className='my-4'>Status: 200</h5>
                        <SyntaxHighlighter
                            language='json'
                            style={vs}
                            customStyle={{ fontSize: '20px' }}
                            lineNumberContainerStyle={true}
                        >
                            {getSingleDeviceResponse}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </Col>
        </Row>
    );
}