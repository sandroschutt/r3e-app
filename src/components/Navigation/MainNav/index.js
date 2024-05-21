import './style.scss';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
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
} from '@fortawesome/free-solid-svg-icons';

export default function MainNav() {
  const navigate = useNavigate();
  const role = "user";
  const defaultOptions = [
    ['Home', '', faTableColumns],
    ['Mapa', 'map', faLocationDot],
    ['Lista de dispositivos', 'public-devices', faTablet],
    ['Coleta', 'pickups', faTruck],
    ['Pontos de Coleta', 'pickup-locations', faRecycle],
    ['Configurações', 'config', faGear],
  ];



  let roleOptions = [];

  if (role === "technician") {
    roleOptions = [
      ['Home', '', faTableColumns],
      ['Lista de dispositivos', 'pickup-locations', faTablet]
    ];
  }

  if (role === "admin") {
    roleOptions = [
      ...defaultOptions,
      ['Oficina', 'workshop', faWrench],
      ['Usuários', 'users', faUserGroup],
      ['Estudantes', 'students', faGraduationCap],
      ['Tratativas de Retorno', 'recycling-settings', faSeedling],
      ['Integrações', 'integrations', faCode]
    ];
  }

  if (role === "user") {
    roleOptions = [...defaultOptions];
  }

  if (role === "business") {
    roleOptions = [
      ...defaultOptions,
      ['Integrações', 'integrations', faCode]
    ];
  }

  roleOptions = [...roleOptions, ['Logout', 'logout', faPowerOff]];

  return (
    <nav id='main-nav' className='sticky-top'>
      <Row className='nav-container flex-column justify-content-start gap-1'>
        <Col className='profile col-1 d-flex flex-row w-100 p-3 column-gap-3 align-items-center' onClick={() => { navigate(`profile`) }}>
          <FontAwesomeIcon
            className={'icon'}
            style={{ height: "32px" }}
            icon={faCircleUser}
          />
          <div className={'info '}>
            <h6 className='text-light'>Nome de usuário</h6>
            <p>Role</p>
          </div>
        </Col>

        <Col className='col-10 w-100 p-0'>
          <ul className='options ps-0'>
            {
              roleOptions.map((option, index) => {
                let optionObj = createOptionObject(option[0], option[1], option[2])
                return (
                  <li className='row column-gap-2 px-3 py-2 align-items-center' key={index} onClick={() => { navigate(optionObj.link, { relative: "path"}) }}>
                    <Col className='col-1 p-0 '>{optionObj.icon}</Col>
                    <Col>
                      <p
                        className={`nav-link p-0 text`}
                      >
                        {optionObj.label}
                      </p>
                    </Col>
                  </li>
                )
              })
            }
          </ul>
        </Col>
      </Row>
    </nav>
  )
}

function createOptionObject(label = String, link = String, icon = Object) {
  let optionObj = {
    label: label,
    link: link,
    icon: (
      <FontAwesomeIcon
        className='icon'
        style={{ height: '16px' }}
        icon={icon}
      />
    )
  }

  return optionObj;
}
