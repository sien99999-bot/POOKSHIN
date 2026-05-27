import { Link } from 'react-router-dom'
import './SimplePage.css'

export default function ContactPage() {
  return (
    <div id="app">
      <main className="page">
        <div className="page-header">
          <h1>문의하기</h1>
          <Link to="/setting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
        <section className="card">
          <h3 style={{ marginTop: 0, color: '#FF9F46' }}>POOKSHIN 고객센터</h3>
          <p style={{ fontSize: 15, marginBottom: 8, color: '#000', fontWeight: 'bold' }}>와앙이에게 궁금한 점이 있으신가요?</p>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>서비스 이용 불편, 오류 신고, 제휴 문의 등 다양한 의견을 환영합니다.</p>
          <div style={{ background: '#F8F4EC', padding: 16, borderRadius: 12, textAlign: 'center', marginBottom: 20 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 4, color: '#333' }}>이메일 문의</div>
            <div style={{ color: '#FB7459', fontWeight: 800, fontSize: 18 }}>support@pookshin.com</div>
          </div>
          <div style={{ fontSize: 13, color: '#999', textAlign: 'center' }}>평일 10:00 - 18:00 (주말 및 공휴일 휴무)</div>
        </section>
        <Link to="/setting" className="btn">돌아가기</Link>
      </main>
    </div>
  )
}