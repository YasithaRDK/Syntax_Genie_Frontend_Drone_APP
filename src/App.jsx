import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drone from "./pages/Drone";
import Medication from "./pages/Medication";
import LoadMedicationsPage from "./pages/LoadMedicationsPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/medication" element={<Medication />} />
        <Route
          path="/loaded-medication/:id"
          element={<LoadMedicationsPage />}
        />
      </Routes>
    </Router>
  );
};
export default App;
