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

export default function AdminBoard() {

  ChartJS.register(
    CategoryScale, // Essa é a escala de categorias que você está precisando
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const data = {
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
            <p>Alunos cadastrados já contemplados</p>
            <ProgressBar now={60} label="60%" variant="info"/>
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>Aparelhos para descarte recebidos por parceiros</p>
            <ProgressBar now={75} label="75%"/>
          </Card>
          <Card className="p-2 shadow-sm">
            <p>% de aparelhos oferecidos / aparelhos reaproveitados</p>
            <ProgressBar now={92} label="92%" variant="success" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>% de aparelhos oferecidos / aparelhos reaproveitados</p>
            <ProgressBar now={92} label="92%" variant="warning" />
          </Card>
          <Card className="mb-3 p-2 shadow-sm">
            <p>% de aparelhos oferecidos / aparelhos reaproveitados</p>
            <ProgressBar now={92} label="92%" variant="danger" />
          </Card>
      </Col>
      </Row>
    </>
  );
};