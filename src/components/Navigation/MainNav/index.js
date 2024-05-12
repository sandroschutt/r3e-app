import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faChevronLeft,
  faTableColumns,
  faLocationDot,
  faTablet,
  faTruck,
  faRecycle,
  faPowerOff,
  faGear,
  faCode,
  faWrench,
  faUserGroup,
  faGraduationCap,
  faSeedling
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function MainNav () {
  const [navWidth, setNavWidth] = useState('nav-width-open')
  const [profileIconWidth, setProfileIconWidth] = useState('56px')
  const [showHideItem, setShowHideItem] = useState('')
  const role = "adimin"
  const defaultOptions = [
    createMenuOptions('Home', '/', faTableColumns),
    createMenuOptions('Mapa', '/map', faLocationDot),
    createMenuOptions('Lista de dispositivos', '/pickup-locations', faTablet),
    createMenuOptions('Coleta', '/pickups', faTruck),
    createMenuOptions('Pontos de Coleta', '/pickup-location', faRecycle)
  ]

  const configuracoes = createMenuOptions('Configurações', '/config', faGear)
  const logout = createMenuOptions('Logout', '', faPowerOff)

  let options = []
  if (role === "tecnician") {
    options = [
      createMenuOptions('Home', '/', faTableColumns),
      createMenuOptions('Lista de dispositivos', '/pickup-locations', faTablet),
      configuracoes,
      logout
    ]
  }
  if (role === "adimin") {
    options = [...defaultOptions,
      createMenuOptions('Oficina', '/workshop', faWrench),
      createMenuOptions('Usuários', '/users', faUserGroup),
      createMenuOptions('Estudantes', '/studants', faGraduationCap),
      createMenuOptions('Tratativas de Retorno', '/recycling-settings', faSeedling),
      createMenuOptions('Integrações', '/integrations', faCode),
      configuracoes, logout]
  }
  if (role === "client") {
    options = [...defaultOptions, configuracoes, logout]
  }
  if (role === "business") {
    options = [...defaultOptions,
      createMenuOptions('Integrações', '/integrations', faCode),
      configuracoes, logout]
  }

  const menuOptions = [...options]

  function hideNavigation () {
    if (navWidth === 'nav-width-open') {
      setNavWidth('nav-width-closed')
      setProfileIconWidth('32px')
      setShowHideItem('hidden')
    } else {
      setNavWidth('nav-width-open')
      setProfileIconWidth('64px')
      setShowHideItem('')
    }
  }

  return (
    <nav id='main-nav'>
      <Row className='nav-container d-flex flex-column position-sticky justify-content-around'>
        <Col className='profile col-2 d-flex flex-row w-100 p-3 column-gap-3 align-items-center'>
          <FontAwesomeIcon
            className={'icon'}
            style={{ height: profileIconWidth, color: '#54a444'}}
            icon={faCircleUser}
          />
          <div className={'info ' + showHideItem}>
            <h4 style={{color: '#54a444'}}>Nome de usuário</h4>
            <p style={{color: '#54a444'}}>Role</p>
          </div>
        </Col>

        <Col className='col-10 w-100 p-0'>
          <ul className='options ps-0'>
            {menuOptions.map(option => {
              return (
                <li className='row column-gap-2 px-3 py-2 align-items-center'>
                  <Col className='col-1 p-0'>{option.icon}</Col>
                  <Col>
                    <a
                      className={'nav-link p-0 fs-6 text' + showHideItem}
                      href={`/user${option.link}`}
                    >
                      {option.label}
                    </a>
                  </Col>
                </li>
              )
            })}
          </ul>
        </Col>

        <Col className='col-1 px-3 py-0'>
          <ul className='p-0'>
            <li className='hide d-flex flex-row align-items-center'>
              <Col className='col-1 p-0 me-4'>
                <FontAwesomeIcon className='hide-icon' icon={faChevronLeft} />
              </Col>
              <Col>
                <p
                  className={'nav-link mb-0 fs-6 text' + showHideItem}
                  onClick={() => {
                    hideNavigation()
                  }}
                >
                  <span>Collapse</span>
                </p>
              </Col>
            </li>
          </ul>
        </Col>
      </Row>
    </nav>
  )
}

function createMenuOptions (label = String, link, icon) {
  return {
    label: label,
    icon: (
      <FontAwesomeIcon
        className='icon'
        style={{ height: '16px' }}
        icon={icon}
      />
    ),
    link: link
  }
}
