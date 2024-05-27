import { Button, Col, Row } from 'react-bootstrap'
import './style.scss'
import Form from 'react-bootstrap/Form'
import { isValidElement, useState } from 'react'

export function SettingsComponent () {
  const [isVisible, setIsVisible] = useState(false)
  const [showLocalization, setShowLocalization] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [anyoneCanContact, setAnyoneCanContact] = useState(false)

  function handleVisibility () {
    setIsVisible(!isVisible)
  }

  function handleShowLocalization () {
    setShowLocalization(!showLocalization)
  }
  function handleShowEmail () {
    setShowEmail(!showEmail)
  }
  function handleAnyoneCanContact () {
    setAnyoneCanContact(!anyoneCanContact)
  }

  return (
    <div>
      <Form>
        <h5>Privacidade</h5>
        <Col className='col-6'>
          <Row className='flex-row justify-content mb-0'>
            <Col className='col-6 text-start mr-0 my-0'>
              <p> Visivilidade</p>
            </Col>
            <Col className='col-4 text-end mx-0'>
              <p className='mb-0 mr-2'>
                {isVisible ? 'Visível' : 'Invisível '}
              </p>
            </Col>
            <Col className='col-1 text-end mx-0'>
              <Form.Check
                type='switch'
                id='visibility-swith'
                onClick={() => {
                  handleVisibility()
                }}
              />
            </Col>
          </Row>
          <hr className='mt-0' />
        </Col>

        <Col className='col-6'>
          <Row className='flex-row justify-content mb-0'>
            <Col className='col-6 text-start  mr-5 my-0'>
              <p>Outros usuários podem ver minha localização ?</p>
            </Col>
            <Col className='col-4 text-end mx-0'>
              <p className='mb-0 mr-2'>{showLocalization ? 'Sim' : 'Não'}</p>
            </Col>
            <Col className='col-1 text-end mx-0'>
              <Form.Check // prettier-ignore
                type='switch'
                id='show-localization-switch'
                onClick={() => {
                  handleShowLocalization()
                }}
              />
            </Col>
          </Row>
          <hr className='mt-0' />
        </Col>

        <Col className='col-6'>
          <Row className='flex-row justify-content mb-0'>
            <Col className='col-6 text-start mr-5 my-0'>
              <p className='fs-12'>
                Outros usuários podem ver meu telefone e email ?{' '}
              </p>
            </Col>
            <Col className='col-4 text-end text-end mx-0'>
              <p className='mb-0 mr-2'>{showEmail ? 'Sim' : 'Não'}</p>
            </Col>
            <Col className='col-1 text-end mx-0'>
              <Form.Check // prettier-ignore
                type='switch'
                id='show-email-switch'
                onClick={() => {
                  handleShowEmail()
                }}
              />
            </Col>
          </Row>
          <hr className='mt-0' />
        </Col>

        <Col className='col-6'>
          <Row className='flex-row justify-content mb-0'>
            <Col className='col-6 text-start mr-5 my-0'>
              <p> Qualquer usuário pode entrar em contato comigo ?</p>
            </Col>
            <Col className='col-4 text-end mx-0'>
              <p className='mb-0 mr-2'>{anyoneCanContact ? 'Sim' : 'Não'}</p>
            </Col>
            <Col className='col-1 text-end mx-0'>
              <Form.Check // prettier-ignore
                type='switch'
                id='anyone-can-contact-switch'
                onClick={() => {
                  handleAnyoneCanContact()
                }}
              />
            </Col>
          </Row>
          <hr className='my-0'/>
        </Col>
      </Form>
      <h5 className='my-4'>Conta</h5>
      <Col className='col-8'>
        <Row>
          <Col className='col-9 text-start p-0'>
            <button type='button' class='btn btn-link' style={{color: '#000000', textDecoration: 'none' }}>
              Redefinir Senha
            </button>
            <hr className='my-2' />
          </Col>
        </Row>
      </Col>
      <Col className='col-8'>
        <Row>
          <Col className='col-9 text-start p-0'>
            <button type='button' class='btn btn-link' style={{color: '#000000', textDecoration: 'none' }}>
              Mudar e-mail principal
            </button>
            <hr className='my-2' />
          </Col>
        </Row>
      </Col>
      <Col className='col-8'>
        <Row>
          <Col className='col-9 text-start p-0'>
            <button type='button' class='btn btn-link' style={{color: '#000000', textDecoration: 'none' }}>
              Mudar e-mail de recuperação de senha
            </button>
            <hr className='my-2' />
          </Col>
        </Row>
      </Col>
      <Col className='col-8'>
        <Row>
          <Col className='col-9 text-start p-0'>
            <button type='button' class='btn btn-link' style={{color: '#000000', textDecoration: 'none' }}>
              Solicitar cópia dos meus dados
            </button>
            <hr className='my-2' />
          </Col>
        </Row>
      </Col>
      <Col className='col-8'>
        <Row>
          <Col className='col-9 text-start p-0'>
            <button type='button' class='btn btn-link' style={{color: '#ce0707', textDecoration: 'none' }}>
              Excluir conta do R3E
            </button>
            <hr className='my-2' />
          </Col>
        </Row>
      </Col>
    </div>
  )
}
