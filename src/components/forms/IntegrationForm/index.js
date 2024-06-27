import { Col } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function IntegrationForm () {
  const jsonString = `[
    {
      "id": "1",
      "name": "Device 1",
      "type": "sensor",
      "status": "active",
      "created_at": "2023-05-01T10:00:00Z",
      "updated_at": "2023-05-10T15:30:00Z"
    },
    {
      "id": "2",
      "name": "Device 2",
      "type": "actuator",
      "status": "inactive",
      "created_at": "2023-05-03T12:00:00Z",
      "updated_at": "2023-05-12T10:00:00Z"
    }
  ]`

  return (
    <div style={{ fontSize: '20px', marginLeft: 45 }}>
      <h2 className='mb-5'>Documentação de como integrar com o R3E</h2>
      <h2 className='mb-4'>Lista dos EndPoints disponíveis</h2>
      <h3 className='mb-3'>GET /devices</h3>
      <h3 className='mb-2'>Descrição:</h3>
      <h4 className='mb-4 px-3'>
        Retorna uma lista com todos os dispositivos cadastrados na plataforma
      </h4>
      <h3 className='mb-3'>Requisição:</h3>
      <h4 className='mb-4 px-3'>URL: GET /devices</h4>
      <h3 className='mb-3'>Headers</h3>
      <h5 className='mb-4 px-3'>
        Authorization: Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      </h5>
      <h3 className='mb-3'>Parâmetros de consulta:</h3>
      <div className='px-5 mb-2'>
        <h5 className='mb-1'>
          - page: (opcional) Número da página para paginação.
        </h5>
        <h5 className='mb-1'>
          - limit: (opcional) Número de dispositivos por página.
        </h5>
        <h5 className='mb-1'>- sort: (opcional) Campo para ordenação.</h5>
        <h5 className='mb-1'>
          - available: (opcional) Filtros específicos para a busca.
        </h5>
      </div>
      <h3 className='mb-3'>Exemplo de Requisição:</h3>
      <div className='px-3 mb-2'>
        <h5 className='mb-1'>
          GET /devices?page=1&limit=10&sort=name&available=true HTTP/1.1
        </h5>
        <h5 className='mb-1'>Host: http://localhost:3000</h5>
        <h5 className='mb-1'>
          Authorization: Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        </h5>
      </div>
      <h3 className='mb-3'>Resposta:</h3>
      <h5 className='mb-2 px-5'>Status: 200</h5>
      <Col className='col-5 px-5 mb-3'>
        <SyntaxHighlighter
          language='json'
          style={vs}
          customStyle={{ fontSize: '20px' }}
          lineNumberContainerStyle={true}
        >
          {jsonString}
        </SyntaxHighlighter>
      </Col>
      <h3 className='mb-3'>Possíveis Erros:</h3>
      <h5 className='mb-2 px-3'>
        - 401 Unauthorized: Token de autenticação inválido ou ausente.
      </h5>
      <h5 className='mb-2 px-3'>
        - 500 Internal Server Error: Erro interno do servidor.
      </h5>
    </div>
  )
}
