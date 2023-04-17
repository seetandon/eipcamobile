import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import Logo from "../Asset/Logo.png"
import bg from "../Asset/LoginBG.jpg"
import "../loginpage.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    
    <section className="body">
    <div className="container">
      <div className="login-box" style={{ 
      backgroundImage: bg 
        }}>

        <div className="row">
          <div className="col-sm-6">
            <div className="logo">
              <img src={Logo} style={{width: "75%"}}/>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <br />
            <h1 className="header-titles">WELCOME</h1>
            <h3 className="header-title">LOGIN</h3>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
              <input type="email" name="email" className="form-control col-xs-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="form-group">
              <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              <button className="btn btn-primary btn-block mx-1" type="submit">LOGIN</button>
              </div>
              <div className="form-group">
                
              </div>
              <div className="form-group">
                <div className="text-center">
                  New Member? <a href="/signup">Sign up Now</a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6 hide-on-mobile">
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              
              {/* The slideshow */}
              
                
                
              {/* Left and right controls */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

   
  );

};



export default withRouter(Login);
