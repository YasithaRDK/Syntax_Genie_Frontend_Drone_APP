export const validateDroneRegisterForm = (formData) => {
  const errors = {};

  if (!formData.serialNumber.trim()) {
    errors.serialNumber = "Serial Number is required";
  }

  if (!formData.model) {
    errors.model = "Model is required";
  }

  if (
    isNaN(formData.weightLimit) ||
    formData.weightLimit === "" ||
    formData.weightLimit > 500
  ) {
    errors.weightLimit = "Weight limit should not exceed 500";
  }

  if (
    isNaN(formData.batteryCapacity) ||
    formData.batteryCapacity === "" ||
    formData.batteryCapacity > 100
  ) {
    errors.batteryCapacity = "Battery capacity should not exceed 100";
  }

  return errors;
};
