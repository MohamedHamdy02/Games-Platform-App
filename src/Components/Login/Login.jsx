import React from "react";
import regLogo from "../../Images/gaming.ebaf2ffc84f4451d.jpg";
import img from "../../Images/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";

export default function Login({ saveUserData }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorList, setErrorList] = useState([]);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false)

  async function sendLoginDataToApi() {
    const { data } = await axios.post(
      `https://route-movies-api.vercel.app/signin`,
      user
    );
    if (data.message == "success") {
      setError(null);
      localStorage.setItem('userToken', data.token);
      saveUserData();
      setIsLoading(false)
      navigate("/");
    } else {
      setError(data.message);
      setIsLoading(false)
    }
  }

  function submitLoginFormHandler(e) {
    e.preventDefault();
    setIsLoading(true)
    const vlidation = validateLoginForm();
    if (vlidation.error) {
      setErrorList(vlidation.error.details);
      setIsLoading(false)
    } else {
      sendLoginDataToApi();
    }
  }

  function dataInputHandler(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function validateLoginForm() {
    const schema = Joi.object({
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
              <div className="img w-100 text-center">
                <img className='w-25 py-4' src={img} alt="img" />
              </div>
              <h3 className="text-muted text-center mb-4">Log in to GameOver</h3>
              <form onSubmit={submitLoginFormHandler}>
                {error && <div className="alert alert-danger">{error}</div>}
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
                    "Login"
                  )}
                </button>
              </form>
              <hr />
              <p className="text-center">
                Not a member yet? <Link to="/register">Creat Account&#62;</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
