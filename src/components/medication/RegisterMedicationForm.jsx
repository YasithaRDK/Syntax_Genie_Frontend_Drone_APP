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
import { useRegisterMedicationMutation } from "../../features/medicationSlice";
import { toast } from "react-toastify";

const RegisterMedicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    code: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const [RegisterMedication, { isLoading }] = useRegisterMedicationMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImageFile = e.target.files[0];
    setSelectedImage(selectedImageFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("weight", formData.weight);
    data.append("code", formData.code);
    data.append("image", selectedImage);
    try {
      await RegisterMedication(data).unwrap();
      toast.success("Drone successfully registered...!");
      setFormData({
        name: "",
        weight: "",
        code: "",
      });
      setSelectedImage(null);
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
                onChange={handleImageChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </div>
      </CardBody>
    </Card>
  );
};

export default RegisterMedicationForm;
