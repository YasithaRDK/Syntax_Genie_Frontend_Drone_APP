import { Container } from "reactstrap";
import DroneList from "../components/drone/DroneList";

const Home = () => {
  return (
    <Container>
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
