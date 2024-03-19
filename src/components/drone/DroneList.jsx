import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

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
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </CardBody>
    </Card>
  );
};
export default DroneList;
