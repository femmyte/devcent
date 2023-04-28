import yup from "yup";

export async function validateSignup(data) {
  // Define the validation schema for the signup request body
  const schema = yup.object().shape({
    email: yup
      .string()
      .max(50)
      .email("Provide a valid email")
      .required("Email is required")
      .label("Email"),
    password: yup
      .string()
      .min(10)
      .max(16)
      .required("Password is required")
      .label("Password"),
  });

  try {
    const validationData = await schema.validate(data);
    // console.log(validationData);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}

export async function validateLogin(data) {
  // Define the validation schema for the login request body
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Email is required")
      .label("Email"),
    password: yup.string().required("Password is required").label("Password"),
  });

  try {
    const validationData = await schema.validate(data);
    // console.log(validationData);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}

export async function validateUserProfile(data) {
  // Define the validation schema for the update profile request body
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(5)
      .max(60)
      .required("Full name cannot be empty")
      .label("Full name"),
    phoneNumber: yup
      .string()
      .min(9, "Phone number cannot be less than 9 characters")
      .required("You must provide a valid phone number")
      .label("Phone number"),

    address: yup
      .string()
      .max(100)
      .required("You must provide an address")
      .label("address"),
  });

  try {
    const validationData = await schema.validate(data);
    // console.log(validationData);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}
