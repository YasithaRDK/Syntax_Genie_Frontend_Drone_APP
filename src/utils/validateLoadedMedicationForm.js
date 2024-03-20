// validation.js

export const validateLoadedMedicationForm = (formData) => {
  const errors = {};

  if (!formData.medication_id) {
    errors.medication_id = "Medication is required";
  }

  if (!formData.quantity) {
    errors.quantity = "Quantity is required";
  }

  return errors;
};
