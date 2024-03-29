import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";

const DroneListCard = (drone) => {
  const dotColor = drone.drone.state === "IDLE" ? "green" : "#ffc107";
  return (
    <Card
      className="m-2"
      style={{
        width: "18rem",
      }}
    >
      <CardHeader className="d-flex justify-content-between align-items-center">
        {drone.drone.serialNumber}{" "}
        <span style={{ color: dotColor }} className="fs-3">
          ●
        </span>
      </CardHeader>
      <CardBody>
        <CardText>Model: {drone.drone.model}</CardText>
        <CardText>Weight Limit: {drone.drone.weightLimit}</CardText>
        <CardText>Battery: {drone.drone.batteryCapacity}% </CardText>
        <CardText>State: {drone.drone.state}</CardText>
      </CardBody>
      <Link to={`/load-medication/${drone.drone._id}`} className="m-2">
        <Button color="primary" className="w-100">
          Load Medication
        </Button>
      </Link>
    </Card>
  );
};
export default DroneListCard;
