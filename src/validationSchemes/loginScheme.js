/* eslint-disable import/prefer-default-export */
import * as Yup from "yup";

export const loginScheme = Yup.object({
  email: Yup.string()
    .email("Enter valid email")
    .required("Please enter your email"),

  password: Yup.string().required("Please enter your password"),
});
