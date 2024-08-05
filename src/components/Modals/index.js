import Modal from 'react-bootstrap/Modal'
import './style.scss'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NotificationList } from '../Lists'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function AdminQuickEditDeviceModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const device = props.device;
  const [deviceName, setDeviceName] = useState(device.model.name);
  const [deviceBrand, setDeviceBrand] = useState(device.brand.name);
  const [deviceYear, setDeviceYear] = useState(device.model.year);
  const [deviceState, setDeviceState] = useState(device.state);

  return (
    <>
      <FontAwesomeIcon className="action" icon={faEdit} onClick={handleShow} />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{`Editando ${device.model.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={deviceName}
                onChange={(event) => {setDeviceName(event.target.value)}}
                placeholder="Modelo:"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={deviceBrand}
                onChange={(event) => { setDeviceBrand(event.target.value) }}
                placeholder="Marca:"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                onChange={(event) => { setDeviceYear(event.target.value) }}
                value={deviceYear}
                placeholder="Ano:"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userState">
              <Form.Label>Estado:</Form.Label>
              <Form.Select aria-label="Estado" defaultValue={deviceState} onChange={(event) => { setDeviceState(event.target.value) }}>
                <option value={"muito-bom"} key={1}>{"Muito bom"}</option>
                <option value={"bom"} key={2}>{"Bom"}</option>
                <option value={"regular"} key={3}>{"Regular"}</option>
                <option value={"ruim"} key={4}>{"Ruim"}</option>
                <option value={"inutilizavel"} key={5}>{"Inutilizável"}</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={() => {
            console.log(device)
            // handleClose();
          }}>
            Salvar
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

export function AdminAddReturnProcessModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>{"+ Adicionar nova"}</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar nova</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome:"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Finalidade:</label>
              <Form.Select className="mb-3" onChange={(event) => console.log(event.target.value)}>
                <option key={1} value={""}>reciclagem</option>
                <option key={2} value={""}>desmonte</option>
                <option key={3} value={""}>peças</option>
                <option key={4} value={""}>recondicionamento</option>
                <option key={5} value={""}>reuso</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Processo:</label>
              <Form.Select className="mb-3" onChange={(event) => console.log(event.target.value)}>
                <option key={1} value={""}>desmonte e reaproveitamento de materiais</option>
                <option key={2} value={""}>desmonte e reaproveitamento de componentes</option>
                <option key={3} value={""}>desmonte e reaproveitamento de peças</option>
                <option key={4} value={""}>instalação de peças de terceiros</option>
                <option key={5} value={""}>contemplar estudante com dispositivo</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Destino:</label>
              <Form.Select className="mb-3" onChange={(event) => console.log(event.target.value)}>
                <option key={1} value={""}>empresa especializada</option>
                <option key={2} value={""}>oficina R3E</option>
                <option key={3} value={""}>estudantes</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <label className="main-label mb-2">Descrição:</label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Adicionar
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
