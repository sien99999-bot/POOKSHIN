import { Link } from 'react-router-dom'
import '../styles/home.css'
import './ReviewPage.css'

const REVIEWS = [
  {
    author: '와앙*****',
    date: '2주전',
    img: '/images/review-photo-1.png',
    stars: 5,
    desc: '겹겹이 살아있는 결이 인상적이에요.\n버터 향이 진하고 겉은 바삭,\n속은 폭신해서 자꾸 생각나요!',
    taste: [
      { left: '바삭', active: 2, right: '쫄깃' },
      { left: '촉촉', active: 0, right: '꾸덕' },
      { left: '버터', active: 4, right: '담백' },
      { left: '당도', active: 3, right: null },
    ],
  },
  {
    author: '빵순*****',
    date: '1일전',
    img: null,
    stars: 5,
    desc: '아메리카노랑 먹으면 최고예요!\n속이 생각보다 촉촉해서 좋았어요.\n오후 늦게 가면 품절될 수 있으니 참고하세요!',
    taste: [
      { left: '바삭', active: 2, right: '쫄깃' },
      { left: '촉촉', active: 0, right: '꾸덕' },
      { left: '버터', active: 4, right: '담백' },
      { left: '당도', active: 3, right: null },
    ],
  },
  {
    author: '토깽*****',
    date: '3주전',
    img: '/images/review-photo-3.png',
    stars: 4,
    desc: '식사 대용으로 먹었는데 생각보다 든든해요.\n따뜻할때 먹으면 버터가 녹아서 더 맛나요.',
    taste: [
      { left: '바삭', active: 2, right: '쫄깃' },
      { left: '촉촉', active: 0, right: '꾸덕' },
      { left: '버터', active: 4, right: '담백' },
      { left: '당도', active: 3, right: null },
    ],
  },
]

function Stars({ count, total = 5, size = 18 }) {
  return (
    <div className="score-stars">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`min-icon star ${i < count ? 'yellow' : 'gray'}`} style={{ fontSize: size }}>&#xE0A0;</span>
      ))}
    </div>
  )
}

function TasteProfile({ rows }) {
  return (
    <div className="taste-profile">
      {rows.map((row, i) => (
        <div className="taste-row" key={i}>
          <span className="taste-label">{row.left}</span>
          <div className="taste-dots">
            {Array.from({ length: 5 }, (_, j) => (
              <div key={j} className={`taste-dot${j === row.active ? ' active' : ''}`} />
            ))}
          </div>
          <span className="taste-label" style={row.right ? {} : { opacity: 0 }}>{row.right || row.left}</span>
        </div>
      ))}
    </div>
  )
}

export default function ReviewPage() {
  return (
    <div id="app">
      <header className="top-nav">
        <Link to="/home" className="btn-back">
          <span className="min-icon">&#xE8C2;</span>
        </Link>
        <h1 className="nav-title">리뷰보기</h1>
      </header>

      <div className="scroll-area">
        <div className="summary-box">
          <div className="summary-score">
            <div><span className="score-text">4.3</span> <span className="score-max">/ 5</span></div>
            <Stars count={4} />
          </div>
          <div className="summary-bars">
            {[['5', '55%'], ['4', '45%'], ['3', '30%'], ['2', '5%'], ['1', '0%']].map(([label, width]) => (
              <div className="bar-row" key={label}>
                <span className="bar-label">{label}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width }} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="sort-links">
          <a href="#" className="sort-item">최신순</a>
          <div className="sort-dot" />
          <a href="#" className="sort-item active">인기순</a>
        </div>

        <div className="review-list">
          {REVIEWS.map((r, i) => (
            <div className="review-item" key={i}>
              <div className="review-header">
                <span className="review-author">{r.author}</span>
                <span className="review-date">{r.date}</span>
              </div>
              <div className="review-content" style={!r.img ? { gap: 0, justifyContent: 'center' } : {}}>
                {r.img && <img src={r.img} className="review-image" alt="리뷰 이미지" />}
                <div className="review-text-wrap">
                  <div className="review-stars">
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} className={`min-icon star ${j < r.stars ? 'yellow' : 'gray'}`}>&#xE0A0;</span>
                    ))}
                  </div>
                  <p className="review-desc">{r.desc.split('\n').map((line, j) => (
                    <span key={j}>{line}{j < r.desc.split('\n').length - 1 && <br />}</span>
                  ))}</p>
                </div>
              </div>
              <TasteProfile rows={r.taste} />
            </div>
          ))}
        </div>

        <a href="#" className="btn-more">
          <span className="btn-more-text">리뷰 더보기</span>
          <span className="min-icon btn-more-icon">&#xE8C3;</span>
        </a>
      </div>
    </div>
  )
}