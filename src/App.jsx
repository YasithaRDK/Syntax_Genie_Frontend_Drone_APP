import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AvailableDronesPage from "./pages/AvailableDronesPage";
import RegisterDronePage from "./pages/RegisterDronePage";
import RegisterMedicationPage from "./pages/RegisterMedicationPage";
import LoadMedicationsPage from "./pages/LoadMedicationsPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AvailableDronesPage />} />
        <Route path="/drone" element={<RegisterDronePage />} />
        <Route path="/medication" element={<RegisterMedicationPage />} />
        <Route path="/loaded-medication" element={<LoadMedicationsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
