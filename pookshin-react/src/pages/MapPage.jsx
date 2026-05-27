import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/home.css'
import '../styles/navbar.css'
import './MapPage.css'

const BAKERIES = [
  { img: '/images/map-bakery-01.png', name: '푹신베이커리', addr: '서울특별시 성동구 연무장길 27-3, 1층', tags: ['#바삭70%', '#버터30%'], rating: '4.5', bookmarked: true },
  { img: '/images/map-bakery-02.png', name: '르뺑 성수', addr: '서울특별시 성동구 아차산로 45', tags: ['#촉촉60%', '#버터80%'], rating: '4.1', bookmarked: true },
  { img: '/images/map-bakery-03.png', name: '베이크하우스', addr: '서울특별시 성동구 서울숲2길 32-14', tags: ['#달달70%', '#꾸덕80%'], rating: '4.2', bookmarked: false },
]

export default function MapPage() {
  const [bookmarks, setBookmarks] = useState(BAKERIES.map(b => b.bookmarked))

  return (
    <div id="app">
      <div className="map-header">
        <Link to="/home" className="map-btn-back">
          <img src="data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.87498%202.16671L9.20831%206.50004L4.87498%2010.8334'%20stroke='%238B8B8B'%20stroke-width='1.125'%20stroke-linecap='round'/%3e%3c/svg%3e" alt="Back" />
        </Link>
        <div className="location-chip-black">
          <span className="min-icon" style={{ fontSize: 24, color: 'white' }}>&#xEFA0;</span>
          <span>성수동 2가</span>
        </div>
        <Link to="/notification" className="has-notification" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
          <span className="min-icon" style={{ fontSize: 24, color: '#000' }}>&#xEF40;</span>
        </Link>
      </div>

      <div className="map-container">
        <div className="current-location-marker"></div>
        <div className="bakery-marker" style={{ top: 100, left: 80 }}></div>
        <div className="bakery-marker" style={{ top: 180, left: 300 }}></div>
        <div className="bakery-marker" style={{ top: 270, left: 120 }}></div>
        <div className="bakery-marker" style={{ top: 40, left: 380 }}></div>
        <div className="btn-now">
          <span className="min-icon" style={{ fontSize: 19.2, color: '#9B9B9B' }}>&#xE140;</span>
        </div>
      </div>

      <div className="bakery-list-container">
        <div className="top-title">
          <div className="dots-indicator">
            <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2054%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='%23FF9F46'/%3e%3ccircle%20cx='27'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3ccircle%20cx='49'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3c/g%3e%3c/svg%3e" alt="Indicator" />
          </div>
        </div>

        <div className="bakery-scroll-area">
          {BAKERIES.map((b, i) => (
            <div className="bakery-map-card" key={i}>
              <div className="card-bg"></div>
              <div className="card-img-circle">
                <img src={b.img} alt="" />
              </div>
              <div className="card-contents">
                <div className="card-info-box">
                  <div className="card-top-row">
                    <span className="card-name">{b.name}</span>
                    <span
                      className={`card-bookmark${bookmarks[i] ? ' on' : ''}`}
                      onClick={() => setBookmarks(prev => prev.map((v, j) => j === i ? !v : v))}
                    >&#xF020;</span>
                  </div>
                  <div className="card-address-row">
                    <span className="min-icon" style={{ fontSize: 19.2, color: '#CACACA', fontFeatureSettings: "'ss01' 1", fontVariationSettings: "'rond' 3, 'edpt' 1" }}>&#xEFA0;</span>
                    <span className="card-address">{b.addr}</span>
                  </div>
                  <div className="card-tag-row">
                    {b.tags.map(t => <span className="card-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="card-bottom-row">
                    <div className="card-rating">
                      <span className="min-icon" style={{ color: '#FB7459', fontSize: 13.8, fontFeatureSettings: "'ss09' 1", fontVariationSettings: "'rond' 3, 'edpt' 1" }}>&#xE0A0;</span>
                      <span>{b.rating}</span>
                    </div>
                    <a href="https://map.kakao.com" className="btn-find-path" target="_blank" rel="noreferrer">길찾기</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  )
}