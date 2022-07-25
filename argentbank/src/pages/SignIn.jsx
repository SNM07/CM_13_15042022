import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SignInUser } from "../actions/signInAction";
import {
  isAuthenticate,
  verifyConnection,
} from "../storage/connection";
import { FormLoader } from "../components/Loaders";

function Login() {
  let [waiting, setWaiting] = useState(false);
  const userLogin = useSelector((state) => state.signInReducer);
  let connection = userLogin.connected;

  //Login Submit//
  function handleSubmit(target) {
    target.preventDefault();
    let body = {
      email: document.forms[0].email.value,
      password: document.forms[0].password.value,
    };
    SignInUser(body).then((response) => {
      if (response.status !== 200) {
        console.log(response.message);
        document.forms[0].lastChild.innerText = response.message;
        setWaiting(false);
      }
      isAuthenticate();
      verifyConnection();
    });

    setWaiting(true);
  }

  if (connection) return <Navigate to="/profile" />;
  else
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            <div className="error-message" id="error-text">
              {waiting ? <FormLoader /> : ""}
            </div>
          </form>
        </section>
      </main>
    );
}

export default Login;
