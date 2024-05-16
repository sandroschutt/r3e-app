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

export default function MainNav() {
  const [navWidth, setNavWidth] = useState('nav-width-open')
  const [showHideItem, setShowHideItem] = useState('open')
  const role = "user"
  const defaultOptions = [
    ['Home', '/', faTableColumns],
    ['Mapa', '/map', faLocationDot],
    ['Lista de dispositivos', '/public-devices', faTablet],
    ['Coleta', '/pickups', faTruck],
    ['Pontos de Coleta', '/pickup-locations', faRecycle],
    ['Configurações', '/config', faGear],
  ];

  let roleOptions = []

  if (role === "technician") {
    roleOptions = [
      ['Home', '/', faTableColumns],
      ['Lista de dispositivos', '/pickup-locations', faTablet]
    ]
  }

  if (role === "admin") {
    roleOptions = [
      ...defaultOptions,
      ['Oficina', '/workshop', faWrench],
      ['Usuários', '/users', faUserGroup],
      ['Estudantes', '/students', faGraduationCap],
      ['Tratativas de Retorno', '/recycling-settings', faSeedling],
      ['Integrações', '/integrations', faCode]
    ]
  }

  if (role === "user") {
    roleOptions = [...defaultOptions]
  }

  if (role === "business") {
    roleOptions = [
      ...defaultOptions,
      ['Integrações', '/integrations', faCode]
    ]
  }

  roleOptions = [...roleOptions, ['Logout', '/logout', faPowerOff]];

  function hideNavigation() {
    if (navWidth === 'nav-width-open') {
      setNavWidth('nav-width-closed')
      setShowHideItem('hidden')
    } else {
      setNavWidth('nav-width-open')
      setShowHideItem('')
    }
  }

  return (
    <nav id='main-nav' className='sticky-top'>
      <Row className='nav-container flex-column justify-content-start gap-1'>
        <Col className='profile col-1 d-flex flex-row w-100 p-3 column-gap-3 align-items-center' onClick={() => { window.location.href = `/${role}/profile` }}>
          <FontAwesomeIcon
            className={'icon'}
            style={{ height: "32px" }}
            icon={faCircleUser}
          />
          <div className={'info ' + showHideItem}>
            <h6 className='text-light'>Nome de usuário</h6>
            <p>Role</p>
          </div>
        </Col>

        <Col className='col-10 w-100 p-0'>
          <ul className='options ps-0'>
            {
              roleOptions.map((option, index) => {
                let optionObj = {
                  label: option[0],
                  link: option[1],
                  icon: (
                    <FontAwesomeIcon
                      className='icon'
                      style={{ height: '16px' }}
                      icon={option[2]}
                    />
                  )
                }

                return (
                  <li className='row column-gap-2 px-3 py-2 align-items-center' key={index}>
                    <Col className='col-1 p-0 '>{optionObj.icon}</Col>
                    <Col className={showHideItem}>
                      <a
                        className={`nav-link p-0 text`}
                        href={`/${role}${optionObj.link}`}
                      >
                        {optionObj.label}
                      </a>
                    </Col>
                  </li>
                )
              })
            }
          </ul>
        </Col>

        <Col className='collapse-col col-1 px-3 py-0 position-absolute'>
            <ul className='p-0'>
              <li className='hide d-flex flex-row align-items-center'>
                <Col className='col-1 p-0 me-4'>
                  <FontAwesomeIcon className='hide-icon' icon={faChevronLeft} />
                </Col>
                <Col>
                  <p
                    className={'nav-link mb-0 text' + showHideItem}
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
