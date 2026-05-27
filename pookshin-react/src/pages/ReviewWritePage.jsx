import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ReviewWritePage.css'

const BREADS = ['크루아상', '소금빵', '크림빵']
const TASTE_ROWS = [
  { left: '바삭', right: '쫄깃', default: 3 },
  { left: '촉촉', right: '꾸덕', default: 1 },
  { left: '버터', right: '담백', default: 3 },
  { left: '당도', right: null, default: 2 },
]

export default function ReviewWritePage() {
  const navigate = useNavigate()
  const [selectedBread, setSelectedBread] = useState(0)
  const [stars, setStars] = useState(4)
  const [segs, setSegs] = useState(TASTE_ROWS.map(r => r.default))
  const [reviewText, setReviewText] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSeg = (rowIdx, segIdx) => {
    setSegs(prev => prev.map((v, i) => i === rowIdx ? segIdx : v))
  }

  const handleConfirm = () => {
    setShowModal(false)
    navigate('/review-write')
  }

  return (
    <div id="app">
      <div className="review-header">
        <Link to="/my" className="btn-close-x">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="header-title">리뷰 하기</span>
        <div />
      </div>

      <div className="recent-poki-section">
        <span className="recent-poki-label">최근 포키한 빵</span>
        <div className="poki-chip-row">
          {BREADS.map((b, i) => (
            <span key={b} className={`poki-chip${i === selectedBread ? ' active' : ''}`} onClick={() => setSelectedBread(i)}>#{b}</span>
          ))}
        </div>
      </div>

      <div className="review-input-card">
        <div className="card-header-row">
          <span className="bread-tag">#{BREADS[selectedBread]}</span>
          <span className="card-question">어땠나요?</span>
        </div>

        <div className="star-row">
          {Array.from({ length: 5 }, (_, i) => (
            <button key={i} className={`star-btn${i < stars ? ' active' : ''}`} onClick={() => setStars(i + 1)}>
              <i className="mi">&#xE0A0;</i>
            </button>
          ))}
        </div>

        <div className="taste-grid">
          {TASTE_ROWS.map((row, ri) => (
            <div className="taste-row" key={ri}>
              <span className="taste-label-left">{row.left}</span>
              <div className="taste-segments">
                {Array.from({ length: 5 }, (_, si) => (
                  <div key={si} className={`seg${segs[ri] === si ? ' on' : ''}`} onClick={() => handleSeg(ri, si)} />
                ))}
              </div>
              <span className="taste-label-right" style={row.right ? {} : { color: 'transparent' }}>{row.right || '_'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-review-card">
        <div className="text-review-header">
          <span className="text-review-label">한줄 리뷰</span>
          <span className="text-review-optional">(선택)</span>
        </div>
        <div className="camera-box">
          <i className="mi" style={{ fontSize: 31.2, color: '#9b9b9b' }}>&#xE090;</i>
        </div>
        <textarea
          className="review-textarea"
          placeholder="빵이 바삭하고 버터향의 풍미가 깊어서 좋았어요 :)"
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
        />
      </div>

      <button className="btn-submit" onClick={() => setShowModal(true)}>리뷰 등록하기</button>

      {showModal && (
        <div className="modal-overlay open">
          <div className="modal-card">
            <div className="modal-check-circle">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="modal-title">리뷰 등록 완료 !</p>
            <button className="modal-confirm-btn" onClick={handleConfirm}>확인</button>
          </div>
        </div>
      )}
    </div>
  )
}