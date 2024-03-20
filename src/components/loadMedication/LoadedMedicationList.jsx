import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const LoadedMedicationList = (medication) => {
  return (
    <Card
      className="m-2"
      style={{
        width: "18rem",
      }}
    >
      <img
        alt="Sample"
        src={`http://localhost:5000/${medication.medication.image}`}
      />
      <CardBody>
        <CardTitle tag="h5">{medication.medication.name}</CardTitle>
        <CardText>
          Weight: {medication.medication.weight} <br /> Code:{" "}
          {medication.medication.code}
        </CardText>
      </CardBody>
    </Card>
  );
};
export default LoadedMedicationList;
