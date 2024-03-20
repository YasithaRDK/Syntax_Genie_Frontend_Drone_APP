import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAvailableDronesQuery } from "../features/droneSlice";
import LoadMedicationForm from "../components/loadMedication/LoadMedicationForm";

const LoadMedicationsPage = () => {
  const { id } = useParams();
  const [drone, setDrone] = useState(null);

  const { data: drones, refetch } = useGetAvailableDronesQuery();

  useEffect(() => {
    if (drones) {
      const DroneDetails = drones.find((drone) => drone._id === id);
      setDrone(DroneDetails);
    }
  }, [drones, id]);

  return (
    <Container>
      <LoadMedicationForm id={id} drone={drone} refetch={refetch} />
    </Container>
  );
};
export default LoadMedicationsPage;
