import React from "react";
import SignupInputComponent from "./components/SignupInputComponent";
import "./Signup.scss";

const Login = () => {
  return (
    <div className="login-container">
      <p>로그인</p>

      <p>아이디</p>
      <div>
        <input placeholder="아이디를 입력해주세요(최소 8자 이상)" />
      </div>
      <p>비밀번호</p>
      <div>
        <input placeholder="비밀번호를 입력해주세요(최소 8자 이상)" />
      </div>
      <div className="signupButton">
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default Login;
