import * as yup from "yup";

export async function validateOrder(data) {
  const schema = yup.object().shape({
    courseId: yup
      .string()
      .required("No course ID specified")
      .label("Course ID"),
    paymentPlan: yup
      .string()
      .oneOf(["outright-payment", "part-payment"])
      .required("No payment plan specified")
      .label("Payment plan"),
    firstName: yup
      .string()
      .max(50)
      .required("First name is required")
      .label("First name"),
    lastName: yup
      .string()
      .max(50)
      .required("Last name is required")
      .label("Last name"),
    email: yup
      .string()
      .max(50)
      .email("Provide a valid email")
      .required("Email is required")
      .label("Email"),
    country: yup
      .string()
      .max(50)
      .required("Country is required")
      .label("Country"),
    state: yup.string().max(50).required("State is required").label("State"),
    city: yup.string().max(50).required("City is required").label("City"),
    street: yup.string().max(50).required("Street is required").label("Street"),
    houseNumber: yup.string().max(20).label("House number"),
    postalCode: yup.string().max(30).label("Postal Code"),
    phoneNumber: yup.string().max(20).label("Phone number"),
    info: yup
      .string()
      .max(1000, "Info should not exceed 1000 characters")
      .label("Info"),
  });

  try {
    const validationData = await schema.validate(data);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}

export async function validatePayment(data) {
  const schema = yup.object().shape({
    amount: yup.number().required("No amount specified").label("Amount"),
    created_at: yup
      .date()
      .required("No created at specified")
      .label("Created at"),
    flw_ref: yup
      .string()
      .required("flw reference is required")
      .label("Flw ref"),
    status: yup.string().required("Status is required").label("Status"),
    transaction_id: yup
      .number()
      .required("Transaction id is required")
      .label("Transaction id"),
  });

  try {
    const validationData = await schema.validate(data);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}