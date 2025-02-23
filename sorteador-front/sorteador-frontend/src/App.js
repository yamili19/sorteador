import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticipantsUploadPage from "./pages/ParticipantsUploadPage";
import PrizesUploadPage from "./pages/PrizesUploadPage";
import DrawPage from "./pages/DrawPage"; // Importa el nuevo componente de sorteos
import './styles/styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ParticipantsUploadPage />} />
          <Route path="/prizes-upload" element={<PrizesUploadPage />} />
          <Route path="/draw" element={<DrawPage />} /> {/* Ruta para la página de sorteos */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


