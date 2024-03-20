import { FormGroup, Input, Label } from "reactstrap";
import { useGetAllMedicationQuery } from "../../features/medicationSlice";

const MedicationList = ({ onChange, value }) => {
  const { data: medications } = useGetAllMedicationQuery();
  return (
    <FormGroup>
      <Label for="medication_id">Medication:</Label>
      <Input
        type="select"
        name="medication_id"
        id="medication_id"
        onChange={onChange}
        value={value}
      >
        <option value="">Select Medication</option>
        {medications &&
          medications.map((medication, index) => (
            <option key={index} value={medication._id}>
              {medication.name} - {medication.code}
            </option>
          ))}
      </Input>
    </FormGroup>
  );
};
export default MedicationList;
