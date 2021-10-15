/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { loginScheme } from "../validationSchemes/loginScheme";
import { useAuth } from "../contexts/AuthContext";
import { registerPageRoute, userPageRoute } from "../constants/routes";
import Button from "./Button";
import TextField from "./TextField";

export default function LoginForm() {
  const { signIn } = useAuth();
  const history = useHistory();

  function handleLoginSubmit(userInfo, onSubmit) {
    return signIn(userInfo.email, userInfo.password)
      .then(() => {
        swal("Success", "You Login successfully", "success", {
          timer: 2000,
        }).then(() => {
          history.push(userPageRoute);
          onSubmit();
        });
      })
      .catch((err) => {
        const errMassage = String(err).slice(13);
        swal("Error", errMassage, "error", {
          timer: 2000,
        });
      });
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginScheme}
        onSubmit={(formData, { resetForm }) => {
          handleLoginSubmit(formData, resetForm);
        }}
      >
        {() => (
          <div className="min-w-full h-screen flex items-center justify-center">
            <div className="min-w-full flex items-center justify-center">
              <Form className="w-96 flex flex-col items-center justify-center p-5 border-2 border-blue-700 rounded-3xl	">
                <TextField labelText="Email" name="email" type="email" />
                <TextField
                  labelText="Password"
                  name="password"
                  type="password"
                />
                <Button
                  type="submit"
                  className="mb-5 w-1/2 bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  buttonName="Login"
                />
                <div className="w-full flex items-center justify-center">
                  <div className="text-xl">Don`t have an account? </div>
                  <a
                    className="underline ml-2 text-blue-500 hover:text-blue-700 hover:no-underline"
                    href="/register"
                  >
                    Sign Up
                  </a>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
