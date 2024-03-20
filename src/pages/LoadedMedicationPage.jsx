import { Container } from "reactstrap";
import LoadedMedicationList from "../components/loadMedication/LoadedMedicationList";
import SearchInput from "../components/SearchInput";

const LoadedMedicationPage = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">Check Loaded Medication</h3>
      <SearchInput />
      <div className="d-flex flex-wrap my-3">
        <LoadedMedicationList />
        <LoadedMedicationList />
        <LoadedMedicationList />
      </div>
    </Container>
  );
};
export default LoadedMedicationPage;
