import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const LoadedMedicationList = (medication) => {
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  return (
    <Card
      className="m-2"
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={`${baseUrl}/${medication.medication.image}`} />
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
