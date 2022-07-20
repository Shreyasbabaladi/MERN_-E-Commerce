import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

function Signin() {
  const signInFrom = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="test-light">Name</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label className="test-light">Email</label>
              <input className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="test-light ">Password</label>

              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-block btn-success">submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign In Page" description="A page for user to sigon in!">
        {signInFrom()}
    </Base>
  );
}

export default Signin;
