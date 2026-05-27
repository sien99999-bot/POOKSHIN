import { Link } from 'react-router-dom'
import './ProfileEditPage.css'

export default function ProfileEditPage() {
  return (
    <div id="app">
      <main className="page">
        <div className="page-header">
          <h1>프로필 수정</h1>
          <Link to="/setting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
        <section className="card profile-card">
          <div className="profile-photo-wrap">
            <div className="profile-photo">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 18.91 5.86 16.88C7.54 15.18 9.68 14.1 12 14.1C14.32 14.1 16.46 15.18 18.14 16.88C16.43 18.91 14.03 20 12 20Z" />
              </svg>
            </div>
            <span className="photo-change">사진 변경</span>
          </div>
          <div className="field-wrap">
            <label className="field-label">닉네임</label>
            <input type="text" defaultValue="와앙이1234" className="field-input" />
          </div>
          <div className="field-wrap">
            <label className="field-label">이메일</label>
            <input type="email" defaultValue="sien99999@gmail.com" disabled className="field-input disabled" />
          </div>
        </section>
        <Link to="/setting" className="btn">저장하기</Link>
      </main>
    </div>
  )
}