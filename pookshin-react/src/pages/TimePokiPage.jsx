import { Link } from 'react-router-dom'
import './TimePokiPage.css'

export default function TimePokiPage() {
  return (
    <div id="app">
      <div className="popup-card">
        <div className="alarm-icon">&#xEF60;</div>
        <h2 className="popup-title">
          갓 나온지 30분 된 빵이에요!<br />
          달려가서 &apos;포키&apos; 하세요!
        </h2>
        <Link to="/home" className="btn-confirm">확인</Link>
      </div>
    </div>
  )
}