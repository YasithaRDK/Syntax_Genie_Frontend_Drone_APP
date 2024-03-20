import { Container, Form } from "reactstrap";
import DroneList from "../components/drone/DroneList";
import { useEffect, useState } from "react";
import { useGetLoadedMedicationQuery } from "../features/droneSlice";
import LoadedMedicationList from "../components/loadMedication/LoadedMedicationList";
import Loader from "../components/Loader";

const LoadedMedicationPage = () => {
  const [id, setId] = useState("");
  const {
    data: medications,
    refetch,
    isLoading,
    isSuccess,
  } = useGetLoadedMedicationQuery(id);

  const onChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    if (id !== "") {
      refetch();
    }
  }, [id, refetch]);

  return (
    <Container>
      <h3 className="text-center mt-4">Check Loaded Medication</h3>
      <Form className="d-flex justify-content-center align-items-center">
        <DroneList value={id} onChange={onChange} />
      </Form>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {!isLoading && isSuccess && medications?.length > 0 ? (
        <div className="d-flex flex-wrap my-3">
          {medications.map((medication, index) => (
            <LoadedMedicationList key={index} medication={medication} />
          ))}
        </div>
      ) : (
        <div className="my-3">
          {!isLoading && !isSuccess ? "No data found" : null}
        </div>
      )}
    </Container>
  );
};

export default LoadedMedicationPage;
