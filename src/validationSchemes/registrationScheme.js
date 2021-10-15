/* eslint-disable import/prefer-default-export */
import * as Yup from "yup";

export const registrationScheme = Yup.object({
  firstName: Yup.string()
    .max(40, "Too long name")
    .required("Please enter your first name"),

  email: Yup.string()
    .email("Enter valid email")
    .required("Please enter your email"),

  password: Yup.string()
    .min(6, "Too short password")
    .max(40, "Too long password")
    .required("Please enter your password"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password not mush"),
});
