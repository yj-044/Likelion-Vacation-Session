import React from 'react'

const SignupInputComponent = () => {
    return (
      <div className='label'>
        <p>아이디</p>
        <div>
          <input placeholder="아이디를 입력해주세요(최소 8자 이상)" />
        </div>
        <p>비밀번호</p>
        <div>
          <input placeholder="비밀번호를 입력해주세요(최소 8자 이상)" />
        </div>
        <p>이메일</p>
        <div>
          <input placeholder="이메일을 입력해주세요" />
        </div>
        <p>이름</p>
        <div>
          <input placeholder="이름 입력해주세요" />
        </div>
        <p>닉네임</p>
        <div>
          <input placeholder="닉네임을 입력해주세요" />
        </div>
            <div className='signupButton'>
                <button>가입하기</button>
        </div>
      </div>
    );
}

export default SignupInputComponent;
