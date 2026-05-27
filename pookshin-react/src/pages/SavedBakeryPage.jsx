import { Link } from 'react-router-dom'
import './SavedBakeryPage.css'

const BAKERIES = [
  { img: '/images/map-bakery-01.png', name: '베이크하우스', addr: '성동구 서울숲2길 10', tags: ['#촉촉', '#담백'] },
  { img: '/images/map-bakery-02.png', name: '크로플상점', addr: '성동구 서울숲2길 20', tags: ['#바삭', '#달달'] },
  { img: '/images/map-bakery-03.png', name: '푹신 베이커리', addr: '성동구 연무장길 27-3', tags: ['#요즘핫플', '#크루아상맛집'] },
]

export default function SavedBakeryPage() {
  return (
    <div id="app">
      <div className="topbar">
        <Link to="/my">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="topbar-title">찜한 가게</div>
      </div>
      <div className="bakery-list">
        {BAKERIES.map((b, i) => (
          <div className="bakery-card" key={i}>
            <div className="bakery-img-wrap">
              <img src={b.img} alt="" />
            </div>
            <div className="bakery-info">
              <div className="bakery-top-row">
                <span className="bakery-name">{b.name}</span>
                <span className="min-icon bookmark-icon">&#xF020;</span>
              </div>
              <div className="bakery-addr">{b.addr}</div>
              <div className="bakery-tags">
                {b.tags.map(t => <span key={t} className="bakery-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}