import * as yup from "yup";

const schema = yup.object({
  user: yup
    .string()
    .required("Username is Required")
    .min(3, "Username must be atleast 3 characters long")
    .max(25, "Username must be less then 25 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters long"),
});
export default schema;
