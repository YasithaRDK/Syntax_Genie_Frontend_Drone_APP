import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useRegisterDroneMutation } from "../../features/droneSlice";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { validateDroneRegisterForm } from "../../utils/validateDroneRegisterForm";

const RegisterDroneForm = () => {
  const [formData, setFormData] = useState({
    serialNumber: "",
    model: "",
    weightLimit: "",
    batteryCapacity: "",
  });

  const [registerDrone, { isLoading }] = useRegisterDroneMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateDroneRegisterForm(formData);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }
    try {
      await registerDrone(formData).unwrap();
      toast.success("Drone successfully registered...!");
      setFormData({
        serialNumber: "",
        model: "",
        weightLimit: "",
        batteryCapacity: "",
      });
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <Card className="my-3">
      <CardHeader>
        <h3 className="text-center">Drone Registration Form</h3>
      </CardHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <CardBody>
          <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className="w-75">
              <FormGroup>
                <Label for="serialNumber">Serial Number:</Label>
                <Input
                  type="text"
                  name="serialNumber"
                  id="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="model">Model:</Label>
                <Input
                  type="select"
                  name="model"
                  id="model"
                  value={formData.model}
                  onChange={handleChange}
                >
                  <option value="">Select Model</option>
                  <option value="Lightweight">Lightweight</option>
                  <option value="Middleweight">Middleweight</option>
                  <option value="Cruiserweight">Cruiserweight</option>
                  <option value="Heavyweight">Heavyweight</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="weightLimit">Weight Limit (grams):</Label>
                <Input
                  type="number"
                  name="weightLimit"
                  id="weightLimit"
                  value={formData.weightLimit}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="batteryCapacity">Battery Capacity:</Label>
                <Input
                  type="number"
                  name="batteryCapacity"
                  id="batteryCapacity"
                  value={formData.batteryCapacity}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </div>
        </CardBody>
      )}
    </Card>
  );
};

export default RegisterDroneForm;
