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

const RegisterMedicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    code: "",
    image: "",
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
        <h3 className="text-center">Medication Registration Form</h3>
      </CardHeader>
      <CardBody>
        <div className="d-flex justify-content-center">
          <Form onSubmit={handleSubmit} className="w-75">
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="weight">Weight:</Label>
              <Input
                type="number"
                name="weight"
                id="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="code">Code:</Label>
              <Input
                type="text"
                name="code"
                id="code"
                value={formData.code}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image:</Label>
              <Input
                type="file"
                name="image"
                id="image"
                value={formData.image}
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

export default RegisterMedicationForm;
