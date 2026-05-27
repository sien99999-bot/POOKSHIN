import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/home.css'
import '../styles/navbar.css'
import './SettingPage.css'

export default function SettingPage() {
  return (
    <div id="app">
      <div className="setting-header">
        <Link to="/my" className="btn-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="header-title">설정</span>
        <Link to="/notification" className="header-bell has-notification">
          <i className="mi" style={{ fontSize: 24, color: '#000', fontFeatureSettings: '"ss09"' }}>&#xEF40;</i>
        </Link>
      </div>

      <div className="user-summary-card">
        <div className="user-thumb">
          <i className="mi">&#xEF28;</i>
        </div>
        <div className="user-text">
          <h3>와앙이1234</h3>
          <p>sien99999@gmail.com</p>
        </div>
        <Link to="/profile-edit" className="btn-edit">
          <i className="mi" style={{ fontSize: 15.36 }}>&#xE0B4;</i>
          <span>수정하기</span>
        </Link>
      </div>

      <div className="setting-list">
        <Link to="/taste-data" className="setting-item">식감 취향 수정</Link>
        <div className="divider"></div>
        <Link to="/location-setting" className="setting-item">위치 설정</Link>
        <a href="#" className="setting-item">알림 설정</a>
        <div className="divider"></div>
        <div className="setting-item subtitle">시스템 설정</div>
        <div className="setting-item">
          다크모드
          <div className="toggle-switch"></div>
        </div>
        <div className="divider"></div>
        <Link to="/privacy" className="setting-item">개인정보 처리방침</Link>
        <Link to="/terms" className="setting-item">서비스 이용약관</Link>
        <Link to="/contact" className="setting-item">문의하기</Link>
        <div className="divider"></div>
        <div className="footer-actions">
          <Link to="/withdraw">회원탈퇴</Link>
          <Link to="/onboarding">로그아웃</Link>
        </div>
      </div>

      <NavBar />
    </div>
  )
}