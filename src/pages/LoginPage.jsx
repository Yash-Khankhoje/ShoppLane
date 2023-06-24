import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../api/EndPoints";
import { Navbar } from "../components/Navbar";
import { CategoryList } from "../components/CategoryList"

const LoginPage = () => {
  const navigate = useNavigate()
  const [requestedResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    userName: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    let requestObject = {
      "username": values.userName.toString(),
      "password": values.password.toString()
    }
    console.log("requestObject", requestObject);
    axios.post(EndPoints.USER_LOGIN_URL, requestObject)
      .then((response) => {
        setRequestResponse({
          textMessage: 'login successful, thank you',
          alertClass: 'alert alert-success',
        })

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        navigate('/')

      }, (error) => {
        setRequestResponse({
          textMessage: error.response.data.message,
          alertClass: 'alert alert-danger',
        })
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required("password is required"),

    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="registration-wrapper">
              <div classN={requestedResponse.alertClass} role="alert">
                {requestedResponse.textMessage}
              </div>
              <h2>Login</h2>

              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnMount
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label>User Name</label>
                        <Field
                          type="text"
                          name="userName"
                          className={
                            formik.touched.userName && formik.errors.userName
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="userName">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <Field
                          type="password"
                          name="password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="password">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>

                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block"
                        disabled={!formik.isValid}
                      />
                    </Form>
                  );
                }}
              </Formik>
              <br />
              <p className="text-center">
                New User? <Link to="/register">sign up</Link>
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
