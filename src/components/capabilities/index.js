import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, FormSelect } from 'react-bootstrap'
import Capabilities from '../../classes/Capabilities'

export default function CapabilitiesComponent (props) {
  const [capability, setCapability] = useState(false);
  const [capabilities, setCapabilities] = useState({
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
    setCapabilities(prevState => ({
      ...prevState,
      [name]: checked
    }))
  }

  let idSelectValue = -1

  useEffect(() => {
    if(capability === false) {
      Capabilities.getOne(2, setCapabilities)
      setCapability(true)
    } 
  }, [capability, capabilities])

  const handleSelectChange = event => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    setIdSelectValue(selectedValue)
    getProfileCapabilities(idSelectValue,setCapabilities)
  }

  function setIdSelectValue (selectValue) {
    switch (selectValue) {
      case 'Cliente':
        idSelectValue = 2
        break
      case 'Empresa':
        idSelectValue = 3
        break
      case 'Escola':
        idSelectValue = 5
        break
      case 'Local de coleta':
        idSelectValue = 4
        break
      case 'Ong':
        idSelectValue = 6
        break
      default:
        idSelectValue = -1
    }
  }

  function getProfileCapabilities(idSelectValue, setCapabilities){
    if(idSelectValue > 1){
      Capabilities.getOne(idSelectValue, setCapabilities);
    }
  }

  const handleSave = event => {
    event.preventDefault()
    alert('Seleção salva com sucesso!')
  }

  if(capability === true) return (
    <div>
      <Form className='mb-5' onSubmit={handleSave}>
        <h2 className='mt-3 mb-5'>Capacidades</h2>
        <Row className='flex-row justify-content w-50 w-sm-100 w-xs-50 mb-2'>
          <h5 className='col-4 mt-2'>Tipo de usuário :</h5>
          <Col className='col-4 text-start mx-3 my-0'>
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
              checked={capabilities.manageSelf}
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
              checked={capabilities.manageDocument}
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
              checked={capabilities.manageAddress}
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
              checked={capabilities.manageDevice}
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
              checked={capabilities.manageSchedule}
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
              checked={capabilities.manageComplaint}
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
              checked={capabilities.managePayment}
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
              checked={capabilities.manageDialogues}
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
              checked={capabilities.manageNotifications}
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
              checked={capabilities.manageStudents}
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
              checked={capabilities.manageMedia}
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
              checked={capabilities.manageUsers}
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
              checked={capabilities.manageAllDocuments}
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
              checked={capabilities.manageAllAddresses}
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
              checked={capabilities.manageBrands}
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
              checked={capabilities.manageDeviceModels}
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
              checked={capabilities.manageReturnProccess}
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
              checked={capabilities.manageAllDevices}
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
              checked={capabilities.manageAllSchedules}
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
              checked={capabilities.manageAllComplaints}
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
              checked={capabilities.manageAllPayments}
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
              checked={capabilities.manageAllDialogues}
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
              checked={capabilities.manageAllNotifications}
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
              checked={capabilities.manageAllStudents}
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
              checked={capabilities.manageAllMedia}
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
              checked={capabilities.manageCapabilities}
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
