import React, { useState, useEffect } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import AdminBoardInfo from '../../../classes/AdminBoardInfo';

export default function AdminBoard() {
  const [allStudents, setAllStudents] = useState(0);
  const [benefitedStudents, setBenefitedStudents] = useState(0);
  const [usersMonths, setUsersMonths] = useState({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0
  });
  const [date, setDate] = useState([]);

  const [deviceType, setDeviceTypes] = useState({
    smartphone: 0,
    pc: 0,
    notebook: 0,
    chromebook: 0,
    outros: 0,
    total: 0
  });
  const [devices, setDevices] = useState([]);

  const pickStudentsCounts = (students) => {
    setAllStudents(students.total);
    setBenefitedStudents(students.benefited);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  let data = {
    labels: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Outubro', 'Setembro', 'Novembro', 'Dezembro'
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          usersMonths.january, usersMonths.february, usersMonths.march, usersMonths.april,
          usersMonths.may, usersMonths.june, usersMonths.july, usersMonths.august,
          usersMonths.september, usersMonths.october, usersMonths.november, usersMonths.december
        ],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const MyLineChart = () => {
    return <Line data={data} options={options} />;
  };

  const percentage = allStudents > 0 ? ((benefitedStudents / allStudents) * 100).toFixed(2) : 0;
  const percentageString = `${percentage}%`;

  const handleUserRegisters = (datas) => {
    if (Array.isArray(datas)) setDate(datas);
    resetMonths()
    setUsersMonths(prevState => {
      const newCounts = { ...prevState };

      datas.forEach(data => {
        let userCreationDate = new Date(data.createdAt);
        let month = userCreationDate.getMonth();
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        if (userCreationDate >= oneYearAgo && userCreationDate <= today) {
          userPerMonth(month, newCounts);
        }
      });

      return newCounts;
    });
  };

  function userPerMonth(month, newCounts) {
    switch (month) {
      case 0:
        newCounts.january += 1;
        break;
      case 1:
        newCounts.february += 1;
        break;
      case 2:
        newCounts.march += 1;
        break;
      case 3:
        newCounts.april += 1;
        break;
      case 4:
        newCounts.may += 1;
        break;
      case 5:
        newCounts.june += 1;
        break;
      case 6:
        newCounts.july += 1;
        break;
      case 7:
        newCounts.august += 1;
        break;
      case 8:
        newCounts.september += 1;
        break;
      case 9:
        newCounts.october += 1;
        break;
      case 10:
        newCounts.november += 1;
        break;
      case 11:
        newCounts.december += 1;
        break;
      default:
        break;
    }
  }

  //evita que some novamente caso aconteça uma segunda chamada do usestate.
  function resetMonths(){
    setUsersMonths({
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    });
  }

  function resetDeviceTypes(){
    setDeviceTypes({
      smartphone: 0,
      pc: 0,
      notebook: 0,
      chromebook: 0,
      perifericos: 0,
      outros: 0,
      total: 0
    });
  }

  const handleDevicesType = (data) =>{
    if (Array.isArray(data) && data.length > 0 ){
      setDevices(data);
      resetDeviceTypes()

      setDeviceTypes(prevState => {
        const newCounts = { ...prevState };
        devices.forEach(data => {
          let type = data.type;
            countDevicesForType(type, newCounts);
        });
        return newCounts;
      });
    } 
  }

  function countDevicesForType(type, newCounts) {
    switch (type) {
      case "smartphone":
        newCounts.smartphone += 1;
        newCounts.total += 1;
        break;
      case "PC":
        newCounts.pc += 1;
        newCounts.total += 1;
        break;
      case "notebook":
        newCounts.notebook += 1;
        newCounts.total += 1;
        break;
      case "chromebook":
        newCounts.chromebook += 1;
        newCounts.total += 1;
        break;
      case "perifericos":
      case "outros":
        newCounts.outros += 1;
        newCounts.total += 1;
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    AdminBoardInfo.getStudents(pickStudentsCounts);
    AdminBoardInfo.getUserRegisters(handleUserRegisters);
    AdminBoardInfo.getDevicesType(handleDevicesType)
  }, []);


  return (
    <>
      <Row className="mt-4 mb-2">
        <Col md={10}>
          <Card className="p-5 shadow-sm">
            <h5>Dispositivos Cadastrados</h5>
            <MyLineChart />
          </Card>
        </Col>
        <Col md={2}>
          <Card className="mt-2 mb-3 p-2 shadow-sm">
            <p> Total de alunos {allStudents} </p>
            <p> % já beneficiádo</p>
            <ProgressBar now={percentage} label={percentageString} variant="info" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>Total de dispositivos cadastrados {deviceType.total}</p>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>{deviceType.smartphone} Smartphones cadastrados </p>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>{deviceType.pc} PCs cadastrados </p>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>{deviceType.notebook} Notebooks </p>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>{deviceType.chromebook} Chromebooks</p>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>{deviceType.outros} Perfiféricos e Outros</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
