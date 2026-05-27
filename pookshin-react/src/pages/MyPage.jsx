import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/home.css'
import '../styles/navbar.css'
import './MyPage.css'

export default function MyPage() {
  return (
    <div id="app">
      {/* TOPBAR */}
      <div className="my-topbar">
        <Link to="/home" className="my-topbar-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="my-topbar-title">마이페이지</span>
        <Link to="/notification" className="has-notification" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
          <span className="my-topbar-bell">&#xEF40;</span>
        </Link>
      </div>

      {/* HERO */}
      <div className="my-hero">
        <span className="hero-label">MY WA-ANG</span>
        <div className="hero-white-strip"></div>
        <div className="hero-mascot">
          <img src="/images/mascot-mypage.png" alt="와앙이" />
        </div>
        <div className="hero-badge">
          <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20139%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='M0%2023.5813C0%2011.232%2011.0813%201.8336%2023.265%203.84961L113.897%2018.8464C128.379%2021.2426%20139%2033.7655%20139%2048.4439V90H0V23.5813Z'%20fill='%23FFA74A'/%3e%3c/g%3e%3c/svg%3e" alt="" />
        </div>
        <div className="hero-name">와앙이1234</div>
        <div className="hero-status-wrap">
          <span className="hero-status-text">요즘은 바삭한게 좋아 -!</span>
        </div>
      </div>

      {/* 내 취향 데이터 보기 */}
      <div className="taste-link-row">
        <Link to="/taste-data">
          내 취향 데이터 보기
          <span className="min-icon" style={{ fontSize: 'clamp(calc(19px * 0.8), calc(19 * 100vw / 430), 19px)', color: '#9b9b9b' }}>&#xE8C3;</span>
        </Link>
      </div>

      {/* 최근 포키한 빵 */}
      <div className="poki-card">
        <div className="poki-card-inner">
          <span className="poki-card-title">최근 포키한 빵</span>
          <div className="poki-tags">
            <span className="poki-tag">#크루아상</span>
            <span className="poki-tag">#소금빵</span>
            <span className="poki-tag">#크림빵</span>
          </div>
        </div>
      </div>

      {/* 리뷰하기 */}
      <div className="review-link-row">
        <Link to="/review-write">
          리뷰하기
          <span className="min-icon" style={{ fontSize: 'clamp(calc(19px * 0.8), calc(19 * 100vw / 430), 19px)', color: '#9b9b9b' }}>&#xE8C3;</span>
        </Link>
      </div>

      {/* Stats card */}
      <div className="stats-card">
        <Link to="/saved-bread" className="stat-item">
          <span className="stat-icon">&#xE09C;</span>
          <span className="stat-label">찜한 빵</span>
        </Link>
        <Link to="/saved-bakery" className="stat-item">
          <span className="stat-icon">&#xF020;</span>
          <span className="stat-label">찜한 가게</span>
        </Link>
        <Link to="/my-reviews" className="stat-item">
          <span className="stat-icon">&#xF007;</span>
          <span className="stat-label">내 리뷰</span>
        </Link>
      </div>

      {/* 내 정보 */}
      <div className="info-wrap">
        <p className="info-section-label">내 정보</p>
        <div className="info-card">
          <div className="info-rows-group">
            <div className="info-row">
              <span className="info-label">닉네임</span>
              <span className="info-value">와앙이1234</span>
            </div>
            <div className="info-row">
              <span className="info-label">생년월일</span>
              <span className="info-value">1999. 05. 13</span>
            </div>
            <div className="info-row">
              <span className="info-label">이메일주소</span>
              <span className="info-value">sien99999@gmail.com</span>
            </div>
            <div className="info-row">
              <span className="info-label">위치설정</span>
              <Link to="/location-setting" className="info-value">성수동 2가</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-spacer"></div>

      <NavBar />
    </div>
  )
}
