import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <p>로그인</p>

      <div className="login-text">
        <p>아이디</p>
        <input placeholder="아이디를 입력해주세요(최소 8자 이상)" />
      </div>
      <div className="login-text">
        <p>비밀번호</p>
        <input placeholder="비밀번호를 입력해주세요(최소 8자 이상)" />
      </div>
      <div className="signupButton">
        <button className="login-btn">가입하기</button>
      </div>
    </div>
  );
};

export default Login;
