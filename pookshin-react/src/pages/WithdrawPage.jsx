import { Link } from 'react-router-dom'
import './WithdrawPage.css'

export default function WithdrawPage() {
  return (
    <div id="app">
      <main className="page">
        <h1 style={{ color: '#FB7459' }}>회원탈퇴</h1>
        <section className="card" style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>😢</div>
          <h3 style={{ marginTop: 0 }}>정말 떠나시겠어요?</h3>
          <p style={{ fontSize: 14, color: '#666' }}>
            탈퇴하시면 지금껏 와앙이와 함께 모아온<br />
            <strong>소중한 취향 데이터와 포키 내역</strong>이<br />
            모두 사라지며 복구할 수 없습니다.
          </p>
        </section>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/setting" className="btn" style={{ flex: 1, background: '#C3C3C3', marginTop: 0 }}>취소</Link>
          <Link to="/" className="btn" style={{ flex: 1, background: '#FB7459', marginTop: 0 }}>탈퇴하기</Link>
        </div>
      </main>
    </div>
  )
}