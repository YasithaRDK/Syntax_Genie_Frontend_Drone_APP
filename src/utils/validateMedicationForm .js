export const validateMedicationForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (!formData.name.match(/^[A-Za-z0-9-_]+$/)) {
    errors.name =
      "Name should only contain alphanumeric characters, hyphens, and underscores";
  }

  if (!formData.weight) {
    errors.weight = "Weight is required";
  }

  if (!formData.code.trim()) {
    errors.code = "Code is required";
  } else if (!formData.code.match(/^[A-Z0-9_]+$/)) {
    errors.code =
      "Code should only contain uppercase alphanumeric characters and underscores";
  }

  return errors;
};
