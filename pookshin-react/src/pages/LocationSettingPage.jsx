import { Link } from 'react-router-dom'
import './SimplePage.css'

export default function LocationSettingPage() {
  return (
    <div id="app">
      <main className="page">
        <div className="page-header">
          <h1>위치 설정</h1>
          <Link to="/setting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
        <section className="card" style={{ padding: '20px', textAlign: 'center' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#FFA74A" style={{ marginBottom: 16 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
          </svg>
          <h3 style={{ marginTop: 0, color: '#000' }}>현재 설정된 위치</h3>
          <div style={{ fontSize: 20, fontWeight: 'bold', color: '#FB7459', padding: 16, background: '#F8F4EC', borderRadius: 12, marginBottom: 24 }}>성수동 2가</div>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 24 }}>위치 기반으로 갓 구운 빵과 추천 베이커리를 알려드려요.</p>
          <Link to="/setting" className="btn" style={{ marginTop: 0 }}>현재 위치로 다시 찾기</Link>
        </section>
      </main>
    </div>
  )
}