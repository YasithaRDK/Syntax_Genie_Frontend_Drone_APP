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
import axios from "axios";

const RegisterDroneForm = () => {
  const [formData, setFormData] = useState({
    serialNumber: "",
    model: "",
    weightLimit: "",
    batteryCapacity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/drones", formData);
      console.log(response.data);
      setFormData({
        serialNumber: "",
        model: "",
        weightLimit: "",
        batteryCapacity: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card className="my-3">
      <CardHeader>
        <h3 className="text-center">Drone Registration Form</h3>
      </CardHeader>
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
                required
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
                required
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
                required
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
                required
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Register
            </Button>
          </Form>
        </div>
      </CardBody>
    </Card>
  );
};

export default RegisterDroneForm;
