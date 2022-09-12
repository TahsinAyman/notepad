import * as yup from "yup";

const schema = yup.object({
  user: yup.string().required("Username is Required"),
  password: yup.string().required("Password is required"),
});
export default schema;
