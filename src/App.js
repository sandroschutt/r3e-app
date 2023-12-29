import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <AppRoutes />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);