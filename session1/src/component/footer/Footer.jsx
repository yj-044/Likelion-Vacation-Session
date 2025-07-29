import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-up'>
            <div className='footer-up-right'>
                <p>회사소개</p>
                <p>개인정보처리방침</p>
                <p>영상정보처리기기운영 관리방침</p>
                <p>이용약관</p>
                <p>청소년보호방침</p>
            </div>
            <div className='footer-up-right'>
                <p>🍥</p>
                <p>🥡</p>
            </div>
        </div>
        <div className='footer-down'>
            <div className='footer-down-left'>
                <p className='bold'>네편</p>
                <p>대표이사</p>
                <p>서울특별시 성북구</p>
                <p>사업자등록번호</p>
                <p>개인정보보호책임자</p>
                <p>이메일</p>
                <p>Copyright</p>
            </div>
            <div className='footer-down-right'>
                <p className='bold'>1234-5678</p>
                <p>오전 9시 ~ 오후 9시</p>
            </div>
        </div>
    </div>
  )
}


export default Footer