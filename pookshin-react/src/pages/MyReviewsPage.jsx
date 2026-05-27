import { Link } from 'react-router-dom'
import './MyReviewsPage.css'

const REVIEWS = [
  {
    bakery: '베이크하우스', date: '1일전', stars: 5,
    img: '/images/review-photo-1.png',
    text: '너무 맛있어요! 바삭하고 속은 촉촉해서 매일 먹고 싶어요. 분위기도 좋습니다.',
    taste: [
      { left: '바삭', active: 2, right: '쫄깃' },
      { left: '촉촉', active: 0, right: '꾸덕' },
      { left: '버터', active: 4, right: '담백' },
      { left: '당도', active: 3, right: null },
    ],
  },
  {
    bakery: '크로플상점', date: '2주전', stars: 4,
    img: '/images/review-photo-2.png',
    text: '여기 소금빵 찐 맛집이에요 ㅠㅠ 겉바속촉 제대로입니다. 또 갈게요!',
    taste: [
      { left: '바삭', active: 2, right: '쫄깃' },
      { left: '촉촉', active: 0, right: '꾸덕' },
      { left: '버터', active: 2, right: '담백' },
      { left: '당도', active: 2, right: null },
    ],
  },
]

export default function MyReviewsPage() {
  return (
    <div id="app">
      <div className="topbar">
        <Link to="/my">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="topbar-title">내 리뷰</div>
      </div>
      <div className="review-list">
        {REVIEWS.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-card-top">
              <div className="review-card-meta">
                <span className="bakery-name">{r.bakery}</span>
                <span className="review-date">{r.date}</span>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <span key={j} className={`min-icon ${j < r.stars ? 'star-yellow' : 'star-gray'}`}>&#xE0A0;</span>
                ))}
              </div>
            </div>
            <div className="review-card-body">
              <img src={r.img} className="review-thumb" alt="" />
              <p className="review-text">{r.text}</p>
            </div>
            <div className="taste-divider">
              <div className="taste-profile">
                {r.taste.map((row, ri) => (
                  <div className="taste-row" key={ri}>
                    <span className="taste-label">{row.left}</span>
                    <div className="taste-dots">
                      {Array.from({ length: 5 }, (_, di) => (
                        <div key={di} className={`taste-dot${di === row.active ? ' active' : ''}`} />
                      ))}
                    </div>
                    <span className="taste-label" style={row.right ? {} : { opacity: 0 }}>{row.right || row.left}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}