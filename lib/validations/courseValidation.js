import * as yup from "yup";

export async function validateCourse(data) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(100)
      .required("Course name is required")
      .label("Course name"),
    description: yup
      .string()
      .required("Description is required")
      .label("Description"),
    fee: yup.number().min(0).required("Fee is required").label("Course fee"),
    discountFee: yup
      .number()
      .min(0)
      .required("Discount fee is required")
      .label("Discount fee"),
  });

  try {
    const validationData = await schema.validate(data);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}
