import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { authenticate, isAutheticated, signin } from "../auth/helper";
const Signin = () => {
  const [values, setValues] = useState({
    email: "sumithrababaladi@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated;

  const handleChanges = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true, error: false });

    signin({ email, password })
      .then((data) => {
        if (data.error)
          setValues({ ...values, error: data.error, loading: false });
        else {
          authenticate(data, () => {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              didRedirect: true,
              success: true,
              loading: false,
            });
          });
        }
      })
      .catch(console.log("Error in sigin"));
  };

  const loadingMessage = () => {

    return (
     loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
     )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const performRedirect = () => {
    if(didRedirect){
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard"/>
      }
      else{
        return <Redirect to="/admin/dashboard"/>
      }
    }

    if (isAutheticated()) {
      return <Redirect to="/" />
    }
  }

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                value={email}
                onChange={handleChanges(email)}
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                className="form-control"
                value={password}
                onChange={handleChanges(password)}
                type="password"
              />
            </div>
            <button className="btn btn-success btn-block" onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  };


  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {/* {performRedirect()} */}
    </Base>
  );
};

export default Signin;
