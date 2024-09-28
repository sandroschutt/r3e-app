import { Map } from 'leaflet'
import React, { useState } from 'react'
import { Row, Col, Form, Button, FormSelect } from 'react-bootstrap'

export default function Capabilities (props) {
  const [selectedItems, setSelectedItems] = useState({
    manageSelf: false,
    manageUsers: false,
    manageAllDocuments: false,
    manageDocument: false,
    manageAllAddresses: false,
    manageAddress: false,
    manageBrands: false,
    manageDeviceModels: false,
    manageReturnProccess: false,
    manageAllDevices: false,
    manageDevice: false,
    manageAllSchedules: false,
    manageSchedule: false,
    manageAllComplaints: false,
    manageComplaint: false,
    manageAllPayments: false,
    managePayment: false,
    manageAllDialogues: false,
    manageDialogues: false,
    manageAllNotifications: false,
    manageNotifications: false,
    manageAllStudents: false,
    manageStudents: false,
    manageAllMedia: false,
    manageMedia: false,
    manageCapabilities: false
  })

  const [selectedOption, setSelectedOption] = useState('')

  const fixedOptions = [
    'Cliente',
    'Empresa',
    'Escola',
    'Local de coleta',
    'Ong'
  ]

  const handleCheckboxChange = event => {
    const { name, checked } = event.target
    setSelectedItems(prevState => ({
      ...prevState,
      [name]: checked
    }))
  }

  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
  }

  const handleSave = event => {
    event.preventDefault()
    console.log('Itens Selecionados:', selectedItems)
    console.log('Opção Selecionada:', selectedOption)
    alert('Seleção salva com sucesso!')
    console.log(FormSelect.toString)
  }

  return (
    <div>
      <Form className='mb-5' onSubmit={handleSave}>
        <h2 className='mt-3 mb-5'>Capacidades</h2>
        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-2'>
          <h5 className='col-4'>Tipo de usuário :</h5>
          <Col className='col-3 text-start mx-3 my-0'>
            <Form.Select
              value={selectedOption}
              onChange={handleSelectChange}
              className='mb-2'
            >
              {fixedOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <h5 className='mb-3 mx-4'>Gerenciar informações do usuário</h5>

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Perfil</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageSelf'
              checked={selectedItems.manageSelf}
              onChange={handleCheckboxChange}
              name='manageSelf'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Documentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageDocument'
              checked={selectedItems.manageDocument}
              onChange={handleCheckboxChange}
              name='manageDocument'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Endereço</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAddress'
              checked={selectedItems.manageAddress}
              onChange={handleCheckboxChange}
              name='manageAddress'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Dispositivos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageDevice'
              checked={selectedItems.manageDevice}
              onChange={handleCheckboxChange}
              name='manageDevice'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Agendamentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageSchedule'
              checked={selectedItems.manageSchedule}
              onChange={handleCheckboxChange}
              name='manageSchedule'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Reclamações</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageComplaint'
              checked={selectedItems.manageComplaint}
              onChange={handleCheckboxChange}
              name='manageComplaint'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Pagamentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='managePayment'
              checked={selectedItems.managePayment}
              onChange={handleCheckboxChange}
              name='managePayment'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Conversas</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageDialogues'
              checked={selectedItems.manageDialogues}
              onChange={handleCheckboxChange}
              name='manageDialogues'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Notificações</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageNotifications'
              checked={selectedItems.manageNotifications}
              onChange={handleCheckboxChange}
              name='manageNotifications'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Estudantes</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageStudents'
              checked={selectedItems.manageStudents}
              onChange={handleCheckboxChange}
              name='manageStudents'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Arquivos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageMedia'
              checked={selectedItems.manageMedia}
              onChange={handleCheckboxChange}
              name='manageMedia'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <h5 className='mb-3 mt-5 mx-4'>Gerenciar informações gerais</h5>

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Perfis de usuário</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageUsers'
              checked={selectedItems.manageUsers}
              onChange={handleCheckboxChange}
              name='manageUsers'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Todos documentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllDocuments'
              checked={selectedItems.manageAllDocuments}
              onChange={handleCheckboxChange}
              name='manageAllDocuments'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Endereços</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllAddresses'
              checked={selectedItems.manageAllAddresses}
              onChange={handleCheckboxChange}
              name='manageAllAddresses'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Marcas</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageBrands'
              checked={selectedItems.manageBrands}
              onChange={handleCheckboxChange}
              name='manageBrands'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Modelos de dispositivos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageDeviceModels'
              checked={selectedItems.manageDeviceModels}
              onChange={handleCheckboxChange}
              name='manageDeviceModels'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Tratativas de retorno</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageReturnProccess'
              checked={selectedItems.manageReturnProccess}
              onChange={handleCheckboxChange}
              name='manageReturnProccess'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Dispositivos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllDevices'
              checked={selectedItems.manageAllDevices}
              onChange={handleCheckboxChange}
              name='manageAllDevices'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Agendamentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllSchedules'
              checked={selectedItems.manageAllSchedules}
              onChange={handleCheckboxChange}
              name='manageAllSchedules'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Reclamações</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllComplaints'
              checked={selectedItems.manageAllComplaints}
              onChange={handleCheckboxChange}
              name='manageAllComplaints'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Pagamentos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllPayments'
              checked={selectedItems.manageAllPayments}
              onChange={handleCheckboxChange}
              name='manageAllPayments'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Conversas</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllDialogues'
              checked={selectedItems.manageAllDialogues}
              onChange={handleCheckboxChange}
              name='manageAllDialogues'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Notificações</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllNotifications'
              checked={selectedItems.manageAllNotifications}
              onChange={handleCheckboxChange}
              name='manageAllNotifications'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Estudantes</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllStudents'
              checked={selectedItems.manageAllStudents}
              onChange={handleCheckboxChange}
              name='manageAllStudents'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Arquivos</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageAllMedia'
              checked={selectedItems.manageAllMedia}
              onChange={handleCheckboxChange}
              name='manageAllMedia'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0 mx-5'>
          <Col className='col-4 text-start mr-0 my-0'>
            <p>Capacidades</p>
          </Col>
          <Col className='col-2 text-end mx-0'>
            <Form.Check
              type='checkbox'
              id='manageCapabilities'
              checked={selectedItems.manageCapabilities}
              onChange={handleCheckboxChange}
              name='manageCapabilities'
              className='custom-checkbox'
            />
          </Col>
        </Row>
        <hr className='mt-0 mx-5 w-25 w-sm-100 w-xs-100' />

        <Button className='mx-5' variant='outline-success' type='submit'>
          Salvar
        </Button>
      </Form>
    </div>
  )
}
