import { Container } from "reactstrap";
import DroneList from "../components/drone/DroneList";
import { useGetAvailableDronesQuery } from "../features/droneSlice";

const Home = () => {
  const { data: drones } = useGetAvailableDronesQuery();

  return (
    <Container>
      <h3 className="text-center mt-4">Available Drones List</h3>
      <div className="d-flex flex-wrap my-3">
        {drones &&
          drones.map((drone, index) => <DroneList key={index} drone={drone} />)}
      </div>
    </Container>
  );
};
export default Home;
