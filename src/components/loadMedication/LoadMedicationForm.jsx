import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import MedicationList from "../medication/MedicationList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoadMedicationMutation } from "../../features/droneSlice";
import { toast } from "react-toastify";

const LoadMedicationForm = ({ drone, id, refetch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    medication_id: "",
    quantity: "",
  });

  const [loadMedication] = useLoadMedicationMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loadMedication({ id, data: formData }).unwrap();
      toast.success("Drone successfully loaded...!");
      navigate("/");
      refetch();
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <Card className="my-3">
        <CardHeader>
          <h3 className="text-center">Drone Load Form</h3>
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-center">
            <Form className="w-75" onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="serialNumber">Drone Serial Number:</Label>
                <Input
                  type="text"
                  name="serialNumber"
                  id="serialNumber"
                  value={drone ? drone.serialNumber : ""}
                  disabled
                />
              </FormGroup>
              <MedicationList
                value={formData.medication_id}
                onChange={handleChange}
              />
              <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <Input
                  type="text"
                  name="quantity"
                  id="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default LoadMedicationForm;
