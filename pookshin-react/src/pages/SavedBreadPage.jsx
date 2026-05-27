import { Link } from 'react-router-dom'
import './SavedBreadPage.css'

const BREADS = [
  { img: '/images/review-photo-1.png', name: '달콤 크루아상', bakery: '베이크하우스', tags: [{ text: '#바삭', highlight: true }, { text: '#달달', highlight: false }] },
  { img: '/images/소금빵.jpg', name: '소금빵', bakery: '크로플상점', tags: [{ text: '#쫄깃', highlight: true }, { text: '#담백', highlight: false }] },
  { img: '/images/크림빵.jpg', name: '크림빵', bakery: '푹신 베이커리', tags: [{ text: '#부드러움', highlight: true }, { text: '#달달', highlight: false }] },
  { img: '/images/bread-epi.png', name: '에피 바게트', bakery: '프렌치베이커리', tags: [{ text: '#바삭', highlight: true }, { text: '#고소', highlight: false }] },
]

export default function SavedBreadPage() {
  return (
    <div id="app">
      <div className="topbar">
        <Link to="/my">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="topbar-title">찜한 빵</div>
      </div>
      <div className="bread-grid">
        {BREADS.map((b, i) => (
          <div className="bread-card" key={i}>
            <div className="bread-img-wrap">
              <img src={b.img} alt={b.name} />
            </div>
            <div className="bread-info">
              <div className="bread-top-row">
                <span className="bread-name">{b.name}</span>
                <span className="min-icon bookmark-icon">&#xF020;</span>
              </div>
              <div className="bread-bakery">{b.bakery}</div>
              <div className="bread-tags">
                {b.tags.map(t => (
                  <span key={t.text} className={`bread-tag${t.highlight ? ' highlight' : ''}`}>{t.text}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}