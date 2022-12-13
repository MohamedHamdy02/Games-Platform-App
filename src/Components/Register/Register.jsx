import React from "react";
import regLogo from "../../Images/gaming.ebaf2ffc84f4451d.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
  });

  const [errorList, setErrorList] = useState([]);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false)

  async function sendRegisterDataToApi() {
    const { data } = await axios.post(
      `https://route-movies-api.vercel.app/signup`,
      user
    );
    if (data.message == "success") {
      setError(null);
      setIsLoading(false)
      navigate("/login");
    } else {
      setError(data.message);
      setIsLoading(false)
    }
  }

  function submitRegisterFormHandler(e) {
    e.preventDefault();
    setIsLoading(true)
    const vlidation = validateRegisterForm();
    if (vlidation.error) {
      setErrorList(vlidation.error.details);
      setIsLoading(false)
    } else {
      sendRegisterDataToApi();
    }
  }

  function dataInputHandler(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function validateRegisterForm() {
    const schema = Joi.object({
      first_name: Joi.string()
        .pattern(/^[a-zA-Z]/)
        .min(3)
        .max(10)
        .required()
        .messages({
          "string.empty": '"First Name" is required',
          "string.pattern.base": '"First Name" is required',
        }),
      last_name: Joi.string()
        .pattern(/^[a-zA-Z]/)
        .min(3)
        .max(10)
        .required()
        .messages({
          "string.empty": '"Last Name" is required',
          "string.pattern.base": '"Last Name" is required',
        }),
      age: Joi.number().min(16).max(99).required().messages({
        "number.min": '"Age" must be more than 16 years old.',
      }),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .pattern(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        )
        .required()
        .messages({
          "string.empty":
            "Please enter your email adress in format: yourname@example.com",
        }),
      password: Joi.string()
        .min(6)
        .max(20)
        .pattern(/^[a-zA-Z0-9_]{0,15}$/)
        .messages({
          "string.min":
            '"Password" must contains only letters and numbers at least 6',
          "string.pattern.base":
            '"Password" must contains only letters and numbers at least 6',
        }),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <>
    <div className="container">
    <div className="row py-5">
        <div className="register-container d-flex">
          <div className="col-md-6 hide-mobile-query">
            <img className="w-100 height" src={regLogo} />
          </div>
          <div className="col-md-6 p-4 form">
            <h3 className="text-muted text-center mb-4">Create My Account!</h3>
            <form onSubmit={submitRegisterFormHandler}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="row">
                <div className="col-md-6">
                  <input
                    onChange={dataInputHandler}
                    className="form-control text-white bg-dark border-0 mb-4 py-2"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                  />
                  {errorList.filter(
                    (err) => err.context.label == "first_name"
                  )[0]?.message ? (
                    <div className="alert alert-danger media-font">
                      {
                        errorList.filter(
                          (err) => err.context.label == "first_name"
                        )[0]?.message
                      }
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    onChange={dataInputHandler}
                    className="form-control text-white bg-dark border-0 mb-4 py-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                  />
                  {errorList.filter(
                    (err) => err.context.label == "last_name"
                  )[0]?.message ? (
                    <div className="alert alert-danger media-font">
                      {
                        errorList.filter(
                          (err) => err.context.label == "last_name"
                        )[0]?.message
                      }
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <input
                onChange={dataInputHandler}
                className="form-control text-white bg-dark border-0 mb-4 py-2"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              {errorList.filter(
                (err) => err.context.label == "email"
              )[0]?.message ? (
                <div className="alert alert-danger media-font">
                  {
                    errorList.filter(
                      (err) => err.context.label == "email"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              <input
                onChange={dataInputHandler}
                className="form-control text-white bg-dark border-0 mb-4 py-2"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
              />
              {errorList.filter(
                (err) => err.context.label == "age"
              )[0]?.message ? (
                <div className="alert alert-danger media-font">
                  {
                    errorList.filter(
                      (err) => err.context.label == "age"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              <input
                onChange={dataInputHandler}
                className="form-control text-white bg-dark border-0 mb-4 py-2"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              {errorList.filter(
                (err) => err.context.label == "password"
              )[0]?.message ? (
                <div className="alert alert-danger media-font">
                  {
                    errorList.filter(
                      (err) => err.context.label == "password"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              <button type="submit" className="form-control text-white bg-dark border-0 mb-4 py-3">
                {isLoading === true ? (
                  <i className="fas fa-spinner fa-spin fa-2x"></i>
                ) : (
                  "Create Account"
                )}
              </button>


            </form>
            <p className="text-muted text-center small-font">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" target="_blank">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" target="_blank">
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <hr />
            <p className="text-center">
              Already a member? <Link to="/login">Log in&#62;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
