import { Link } from 'react-router-dom'
import '../styles/home.css'
import './PokiSuccessPage.css'

export default function PokiSuccessPage() {
  return (
    <div id="app">
      <main className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: 61.5, height: 61.5, background: '#FF9F46', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, textAlign: 'center', marginBottom: 150, color: '#000' }}>포키 완료 !</h1>
        <Link to="/map" className="btn" style={{ width: '100%', maxWidth: 354 }}>길 찾기</Link>
        <Link to="/home" style={{ marginTop: 24, color: '#9B9B9B', textDecoration: 'none', fontWeight: 'bold', padding: 10 }}>홈으로 돌아가기</Link>
      </main>
    </div>
  )
}
