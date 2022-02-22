import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // firebase login authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      })
  };

  const clickedRegister = (e) => {
    e.preventDefault();

    // firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // successfully create a new user
        if (userCredentials) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      })
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="/amazon-logo.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login-container">
        <div className="login-signin-container">
          <h1>Sign in</h1>
          <form>
            <h5>Email or phone number</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="login-signin-btn" onClick={handleSignIn}>Sign in</button>
          </form>
          <p>
            By continuing, you agree to Amazon's<span> </span>
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
              Conditions of Use
            </a> and <span> </span>
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Privacy Notice.
            </a>
          </p>
        </div>
        <div className="login-hr-text">
          <span>New to Amazon?</span>
        </div>
        <button className="login-create-account-btn" onClick={clickedRegister}>
          Create your Amazon account
        </button>
      </div>
    </div >
  )
}

export default Login;