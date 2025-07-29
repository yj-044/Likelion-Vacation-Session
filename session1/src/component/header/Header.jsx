import "./Header.scss"
import logo from '../../assets/images/yourside-signup-logo.svg'

function Header() {
  return (
    <div className='header'>
        <img src={logo} alt='로고' className='logo' />
        <p>홈</p>
        <p>공지사항</p>
        <p>내 계약서 검토</p>
        <p>내 근로 정리</p>
        <p>네편 현답</p>
    </div>
  )
}

export default Header