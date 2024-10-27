import login from "./Login_Page.png";
import React from "react";
import "./index.css";
function Login() {
  return (
    <div className="row " style={{ marginTop: "40px" }}>
      <div className="col-md-6 login">
        <h1 className="form-text  col-md-4" style={{"fontWeight":"bold"}}>Login</h1>
        <small className="form-text text-muted  col-md-2">
          Welcome back.Enter your credentials to access your account
        </small>
        <br />
        <div className="form-group  col-md-8" style={{"marginTop":"20px"}}>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br />
        <div className="form-group  col-md-8">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br />
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Keep me signed in
          </label>
        </div>
        <br />
        <button type="button" className="btn btn-primary btn-sm col-md-4" style={{"marginLeft":"20px"}}>
          <center>Continue</center>
        </button>
        <p></p>
        <p style={{"marginLeft":"30px"}}>--------or sign up with--------</p>
        <p></p>
        <button type="button" className="btn btn-outline-dark ">
          {" "}
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />
          Google
        </button>
        &nbsp;
        <button type="button" className="btn btn-outline-dark">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />{" "}
          Apple
        </button>
        &nbsp;
        <button type="button" className="btn btn-outline-dark ">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />
          Facebook
        </button>
        &nbsp;
      </div>
      <div className="col-md-4">
        <img src={login} alt="login"style={{ width: "400px", height: "400px" }} />
      </div>
    </div>
  );
}

export default Login;
