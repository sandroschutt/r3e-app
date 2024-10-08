import React from 'react';
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
import { useState, useEffect } from 'react';

export default function AdminBoard() {

  const [allStudents, setAllStudents] = useState(0);
  const [benefitedStudents, setBenefitedStudents] = useState(0);

  const pickStudentsCounts = (students) => {
    setAllStudents(students.total);
    setBenefitedStudents(students.benefited);
  };

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
  })

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
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
       'Julho', 'Agosto', 'Outubro', 'Setembro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 12, 19, 30, 56, 21, 24, 31, 12, 10, 2, 12, 15],
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

  useEffect(() => {
    AdminBoardInfo.getStudents(pickStudentsCounts);
    // AdminBoardInfo.getUsers()
  }, []); 

  const percentage = allStudents > 0 ? ((benefitedStudents / allStudents) * 100).toFixed(2) : 0;
  const percentageString = `${percentage}%`

  return (
    <>
      <Row className="mt-4 mb-2">
        <Col md={10}>
          <Card className="p-5 shadow-sm">
            <h5>Dispositivos Cadastrados</h5>
            <Line data={data} />
          </Card>
        </Col>
        <Col md={2}>
          <Card className="mt-2 mb-3 p-2 shadow-sm">
            <p> Total de alunos {allStudents} </p>
            <p> % já beneficiádo</p>
            <ProgressBar now={percentage} label={percentageString} variant="info"/>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>PCs cadastrados</p>
            <ProgressBar now={75} label="75%"/>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>Notebooks cadastrados</p>
            <ProgressBar now={92} label="92%" variant="success" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>Chromebooks cadastrados</p>
            <ProgressBar now={92} label="92%" variant="warning" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>Perfiféricos e Outros cadastrados</p>
            <ProgressBar now={92} label="92%" variant="danger" />
          </Card>
      </Col>
      </Row>
    </>
  );
};