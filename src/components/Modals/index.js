import Modal from 'react-bootstrap/Modal'
import './style.scss'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NotificationList } from '../Lists'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function AdminQuickEditDeviceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon className="action" icon={faEdit} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editando</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Modelo:"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Marca:"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Ano:"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Estado:"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AdminDeleteDeviceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon className="action" icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Excluir este dispositivo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ao excluir um dispositivo, ele é permanentemente excluído do banco de dados.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function NotificationsModal() {
  let dummyNotifications = []

  for (let i = 0; i <= 10; i++) {
    dummyNotifications.push(null)
  }

  return (
    <div
      className='custom-modal'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <NotificationList data={dummyNotifications} />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export function SinglePickupContact() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <span onClick={handleShow}>
        <strong>Contato</strong>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Assunto da mensagem'
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Descartar
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export function SinglePickupCancelationModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <span onClick={handleShow}>
        <strong>Cancelar</strong>
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger'>Cancelar</Button>
          <Button variant='primary' onClick={handleClose}>
            Aguardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
