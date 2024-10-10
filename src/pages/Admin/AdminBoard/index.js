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
  const [allStudents, setAllStudents] = useState(null);
  const [benefitedStudents, setBenefitedStudents] = useState(null);
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
    smartphone: null,
    pc: null,
    notebook: null,
    chromebook: null,
    outros: null,
    total: null
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

  let chartData = {
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
    return <Line data={chartData} options={options} />;
  };

  const benefitedPercentage = allStudents > 0 ? ((benefitedStudents / allStudents) * 100).toFixed(2) : 0;
  const benefitedPercentageString = `${benefitedPercentage}%`;

  const handleUserRegisters = (datas) => {
    if (datas !== null && datas !== "") {
      resetMonths()
      setDate(datas);
      setUsersMonths(prevState => {
        const newCounts = { ...prevState };
  
        datas.forEach(data => {
          let userCreationDate = new Date(data.createdAt);
          let month = userCreationDate.getMonth();
          const today = new Date();
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(today.getFullYear() - 1);
  
          if (userCreationDate >= oneYearAgo && userCreationDate <= today) {
            countUserPerMonth(month, newCounts);
          }
        });
  
        return newCounts;
      });
    }
  };

  function countUserPerMonth(month, newCounts) {
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


  const handleDevicesType = (data) =>{
    if (data !== "" && data !== null){
      setDevices(data);

      setDeviceTypes(prevState => {
        const newCounts = { ...prevState };
        devices.forEach(data => {
          let type = data.type;
            countDevicesPerType(type, newCounts);
        });
        return newCounts;
      });
    } 
  }

  function countDevicesPerType(type, newCounts) {
    if(newCounts.total === null)
      newCounts.total = 1;
    else
      newCounts.total += 1; 
    switch (type) {
      case "smartphone":
        if(newCounts.smartphone === null)
          newCounts.smartphone = 1;
        else
          newCounts.smartphone += 1;
        break;
      case "PC":
        if(newCounts.pc === null)
          newCounts.pc = 1;
        else
          newCounts.pc += 1;  
        break;
      case "notebook":
        if(newCounts.notebook === null)
          newCounts.notebook = 1;
        else
          newCounts.notebook += 1;
        break;
      case "chromebook":
        if(newCounts.notebook === null)
          newCounts.chromebook = 1;
        else
          newCounts.chromebook += 1;
        break;
      case "perifericos":
      case "outros":
        if(newCounts.outros === null)
          newCounts.outros = 1;
        else
          newCounts.outros += 1;
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    if(allStudents === null && benefitedStudents === null)
      AdminBoardInfo.getStudents(pickStudentsCounts);
    if(usersMonths.january === 0)
      AdminBoardInfo.getUserRegisters(handleUserRegisters);
    if(deviceType.smartphone === null)
      AdminBoardInfo.getDevicesType(handleDevicesType)
  }, [allStudents, benefitedStudents, usersMonths.january, deviceType.smartphone]);

  const nootebookPercetage = deviceType.total > 0 ? ((deviceType.notebook / deviceType.total) * 100).toFixed(2) : 0;
  const nootebookPercetageString = `${nootebookPercetage}%`;
  const smartphonePercetage = deviceType.total > 0 ? ((deviceType.smartphone / deviceType.total) * 100).toFixed(2) : 0;
  const smartphonePercetageString = `${smartphonePercetage}%`;
  const pcPercetage = deviceType.total > 0 ? ((deviceType.pc / deviceType.total) * 100).toFixed(2) : 0;
  const pcPercetageString = `${pcPercetage}%`;
  const chromebookPercetage = deviceType.total > 0 ? ((deviceType.chromebook / deviceType.total) * 100).toFixed(2) : 0;
  const chromebookPercetageString = `${chromebookPercetage}%`;
  const othersPercetage = deviceType.total > 0 ? ((deviceType.outros / deviceType.total) * 100).toFixed(2) : 0;
  const othersPercetageString = `${othersPercetage}%`;
  
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
            <h5> Total de alunos {allStudents} </h5>
            <h5> % já beneficiádo</h5>
            <ProgressBar now={benefitedPercentage} label={benefitedPercentageString} variant="string" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.total} dispositivos cadastrados</h5>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.smartphone} Smartphones </h5>
            <ProgressBar now={smartphonePercetage} label={smartphonePercetageString} variant="success" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.pc} PCs </h5>
            <ProgressBar now={pcPercetage} label={pcPercetageString} variant="string" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.notebook} Notebooks </h5>
            <ProgressBar now={nootebookPercetage} label={nootebookPercetageString} variant="success" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.chromebook} Chromebooks</h5>
            <ProgressBar now={chromebookPercetage} label={chromebookPercetageString} variant="string" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <h5>{deviceType.outros} Perfiféricos e Outros</h5>
            <ProgressBar now={othersPercetage} label={othersPercetageString} variant="danger" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
