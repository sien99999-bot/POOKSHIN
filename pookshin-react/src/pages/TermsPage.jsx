import { Link } from 'react-router-dom'
import './SimplePage.css'

export default function TermsPage() {
  return (
    <div id="app">
      <main className="page">
        <div className="page-header">
          <h1>서비스 이용약관</h1>
          <Link to="/setting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
        <section className="card" style={{ fontSize: 14, lineHeight: 1.8 }}>
          <strong>제 1조 (목적)</strong><br />
          본 약관은 POOKSHIN(이하 '회사')이 제공하는 위치 기반 베이커리 추천 서비스의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.<br /><br />
          <strong>제 2조 (서비스의 제공)</strong><br />
          회사는 사용자(와앙이)의 식감 취향 데이터를 바탕으로 맞춤형 빵과 주변 베이커리를 추천합니다.<br /><br />
          <strong>제 3조 (데이터의 수집 및 활용)</strong><br />
          사용자가 '포키'하거나 리뷰를 작성한 데이터는 취향 분석을 위해 저장되며, '내 취향 데이터' 페이지에서 시각화되어 제공됩니다.
        </section>
      </main>
    </div>
  )
}