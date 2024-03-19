import { Container } from "reactstrap";
import DroneList from "../components/drone/DroneList";

const Home = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">Available Drones List</h3>
      <div className="d-flex flex-wrap my-3">
        <DroneList />
        <DroneList />
        <DroneList />
        <DroneList />
        <DroneList />
        <DroneList />
      </div>
    </Container>
  );
};
export default Home;
