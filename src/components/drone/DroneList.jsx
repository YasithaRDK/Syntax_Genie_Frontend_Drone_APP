import { Card, CardBody, CardHeader, CardText } from "reactstrap";

const DroneList = () => {
  return (
    <Card
      className="m-2"
      color="success"
      inverse
      style={{
        width: "25rem",
      }}
    >
      <CardHeader>12458654</CardHeader>
      <CardBody>
        <CardText>Model: Lightweight</CardText>
        <CardText>Weight Limit: 500</CardText>
        <CardText>Battery: 50% </CardText>
        <CardText>State: IDLE</CardText>
      </CardBody>
    </Card>
  );
};
export default DroneList;
