import React from 'react'
import SignupInputComponent from './components/SignupInputComponent'
import "./Signup.scss";

const Signup = () => {
    return (
      <div className="signup-container">
        <p>회원가입</p>
        <div>
          <SignupInputComponent />
        </div>
      </div>
    );
}

export default Signup;
