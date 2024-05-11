import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser, faChevronLeft, faTableColumns,
  faLocationDot, faTablet, faTruck,
  faRecycle, faPowerOff, faGear
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function MainNav () {
  const [navWidth, setNavWidth] = useState('nav-width-open')
  const [profileIconWidth, setProfileIconWidth] = useState('56px')
  const [showHideItem, setShowHideItem] = useState('')
  const defaultOptions = [
    createMenuOptions('Home', '/', faTableColumns),
    createMenuOptions('Mapa', '/map', faLocationDot),
    createMenuOptions('Lista de dispositivos', '/pickup-locations', faTablet),
    createMenuOptions('Coleta', '/pickups', faTruck),
    createMenuOptions('Pontos de Coleta', '/pickup-location', faRecycle),
  ]

  const finalOptions = [
    createMenuOptions('Configurações', '/config', faGear),
    createMenuOptions('Logout', '', faPowerOff)
  ]

  const roleOptions = [] 
  const menuOptions = [...defaultOptions, ...roleOptions, ...finalOptions]

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
            style={{ height: profileIconWidth }}
            icon={faCircleUser}
          />
          <div className={'info ' + showHideItem}>
            <h4>Nome de usuário</h4>
            <p>Role</p>
          </div>
        </Col>

        <Col className='col-10 w-100 p-0'>
          <ul className='options ps-0'>
            {menuOptions.map(option => {
              return (
                <li className='row column-gap-2 px-3 py-2 align-items-center'>
                  <Col className='col-1 p-0'>{option.icon}</Col>
                  <Col>
                    <a className={'nav-link p-0 fs-6 text' + showHideItem} href={`/user${option.link}`}>
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
