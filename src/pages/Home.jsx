import { Container } from "reactstrap";
import DroneListCard from "../components/drone/DroneListCard";
import { useGetAvailableDronesQuery } from "../features/droneSlice";
import Loader from "../components/Loader";

const Home = () => {
  const { data: drones, isLoading } = useGetAvailableDronesQuery();
  return (
    <Container>
      <h3 className="text-center mt-4">Available Drones List</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="d-flex flex-wrap my-3">
          {drones &&
            drones.map((drone, index) => (
              <DroneListCard key={index} drone={drone} />
            ))}
        </div>
      )}
    </Container>
  );
};
export default Home;
