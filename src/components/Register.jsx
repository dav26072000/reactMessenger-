/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { registrationScheme } from "../validationSchemes/registrationScheme";
import Button from "./Button";
import TextField from "./TextField";
import { useAuth } from "../contexts/AuthContext";
import { addUser } from "../services/user.services";

import { loginPageRoute, userPageRoute } from "../constants/routes";

export default function Register() {
  // const [showPopup, setShowPopup] = useState({
  //   isPopup: false,
  //   massage: "",
  //   isError: false,
  // });
  const history = useHistory();
  const { signup, signOut, currentUser } = useAuth();

  const historyHook = useHistory();

  function handleRegistrationSubmit(userInfo) {
    const user = {
      name: userInfo.firstName,
      email: userInfo.email,
      password: userInfo.password,
    };
    signup(user.email, user.password)
      .then(() => {
        swal("Success", "You registered successfully", "success", {
          timer: 2000,
        }).then(() => {
          history.push(userPageRoute);
        });
      })
      .catch((err) => {
        const errMassage = String(err).slice(13);
        swal("Error", errMassage, "error", {
          timer: 2000,
        });
      });

    return true;
  }

  return (
    <>
      {/* <Popup
        message={showPopup.massage}
        isError={showPopup.isError}
        isPopup={showPopup.isPopup}
        showPopup={setShowPopup}
      /> */}
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registrationScheme}
        onSubmit={(formData, { resetForm }) => {
          handleRegistrationSubmit(formData);
          resetForm();
        }}
      >
        {() => (
          <div className="min-w-full h-screen flex items-center justify-center">
            <div className="min-w-full flex items-center justify-center">
              <Form className="w-96 flex flex-col items-center justify-center p-5 border-2 border-blue-700 rounded-3xl	">
                <TextField labelText="Full Name" name="firstName" type="text" />
                <TextField labelText="Email" name="email" type="email" />
                <TextField
                  labelText="Password"
                  name="password"
                  type="password"
                />
                <TextField
                  labelText="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <Button
                  type="submit"
                  className="mb-5 w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  buttonName="Submit"
                />
                <div className="w-full flex items-center justify-center">
                  <div className="text-xl">Already have an account?</div>
                  <a
                    className="underline ml-2 text-blue-500 hover:text-blue-700 hover:no-underline"
                    href={loginPageRoute}
                  >
                    Sign In
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
