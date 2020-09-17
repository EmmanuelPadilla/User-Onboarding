import * as yup from "yup";

export default yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(3, "First Name must be 3 characters or longer"),
  last_name: yup
    .string()
    .required("You're not famous, Last name is required")
    .min(2, "Last Name must be 2 or more characters."),
  email: yup
    .string()
    .email("Must be a valid email address, dont make it up")
    .required("Email is required"),
  password: yup.string().required("need password").min(8, "minimum 8 char"),
  tos: yup
    .boolean()
    .oneOf(
      [true],
      "You must accept Terms and Conditions, or your firstborn will do!"
    ),
});
