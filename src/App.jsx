import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Drone from "./pages/Drone";
import Medication from "./pages/Medication";
import LoadMedicationsPage from "./pages/LoadMedicationsPage";
import LoadedMedicationsPage from "./pages/LoadedMedicationPage";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/load-medication/:id" element={<LoadMedicationsPage />} />
        <Route path="/loaded-medication" element={<LoadedMedicationsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
