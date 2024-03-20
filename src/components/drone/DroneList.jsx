import { FormGroup, Input } from "reactstrap";
import { useGetAllDronesQuery } from "../../features/droneSlice";

const DroneList = ({ value, onChange }) => {
  const { data: drones } = useGetAllDronesQuery();
  return (
    <FormGroup className="w-75">
      <Input
        type="select"
        name="drone_id"
        id="drone_id"
        onChange={onChange}
        value={value}
      >
        <option value="">Select Drone</option>
        {drones &&
          drones.map((drone, index) => (
            <option key={index} value={drone._id}>
              {drone.serialNumber}
            </option>
          ))}
      </Input>
    </FormGroup>
  );
};
export default DroneList;
