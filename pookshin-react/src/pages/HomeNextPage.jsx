import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/home.css'
import '../styles/navbar.css'

export default function HomeNextPage() {
  return (
    <div id="app" className="home-body">
      <div className="header-section">
        <Link to="/location-setting" className="location-box" style={{ textDecoration: 'none' }}>
          <span className="min-icon" style={{ fontSize: 'clamp(calc(24px * 0.8), calc(24 * 100vw / 430), 24px)', color: 'white' }}>&#xEFA0;</span>
          <span>성수동 2가</span>
        </Link>
        <Link to="/notification" className="has-notification" style={{ textDecoration: 'none' }}>
          <span className="min-icon" style={{ fontSize: 'clamp(calc(24px * 0.8), calc(24 * 100vw / 430), 24px)', color: 'var(--primary)' }}>&#xEF40;</span>
        </Link>
      </div>

      <div className="headline-section">
        <h1 className="headline-title">
          <span className="highlight-text">쫄깃한 빵결,</span>
          <img src="/images/bread-icon.svg" className="bread-mascot-icon" alt="" />
          <br />
          와앙이가 취향대로 딱 골랐어요 :)
        </h1>
      </div>

      <div className="hero-area">
        <div className="hills-background"></div>
        <div className="main-hero-card">
          <img src="/images/bread-salt.png" alt="소금빵" />
        </div>
      </div>

      <main className="bottom-content-area">
        <div className="menu-info-layer">
          <div className="title-row">
            <div className="title-left">
              <h2 className="product-name">소금빵</h2>
              <div className="badges-group">
                <span className="badge-yellow-outline">도보 4분</span>
                <Link to="/time-poki" className="badge-coral-text time-bar" aria-label="View fresh baked time">
                  <span className="min-icon" style={{ fontSize: 'clamp(calc(18px * 0.8), calc(18 * 100vw / 430), 18px)', color: 'inherit', fontWeight: 500 }}>&#xEF60;</span>
                  10분
                  <img src="/images/arrow-4-right.svg" alt="" style={{ width: 13, height: 13, filter: 'invert(61%) sepia(82%) saturate(4041%) hue-rotate(325deg) brightness(101%) contrast(97%)' }} />
                </Link>
              </div>
            </div>
            <Link to="/detail" className="link-details-box">
              상세보기
              <img src="/images/arrow-4-right.svg" alt="" style={{ width: 13, height: 13 }} />
            </Link>
          </div>

          <div className="tag-list">
            <span className="tag-item">#쫄깃70%</span>
            <span className="tag-item">#버터30%</span>
            <span className="tag-item">#짭짤고소</span>
            <span className="tag-item">#버터동굴</span>
          </div>
        </div>

        <div className="pricing-layer">
          <p className="description-text">
            바닥은 바삭, 속은 쫄깃!<br />
            르뺑 성수의 인기 넘버원 메뉴
          </p>
          <div className="price-row">
            <span className="price-value">3,500원</span>
            <div className="rating-group">
              <div className="rating-item">
                <span className="min-icon" style={{ fontSize: 'clamp(calc(18px * 0.8), calc(18 * 100vw / 430), 18px)', color: 'var(--accent-coral)' }}>&#xE0A0;</span>
                4.6
              </div>
              <Link to="/review" className="btn-review-outline">
                리뷰보기
                <img src="/images/arrow-4-right.svg" alt="" style={{ width: 13, height: 13 }} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-buttons-row">
          <Link to="/home" className="btn-base btn-next">NEXT</Link>
          <Link to="/poki-success" className="btn-base btn-poki">POKI</Link>
        </div>
      </main>

      <NavBar />
    </div>
  )
}
