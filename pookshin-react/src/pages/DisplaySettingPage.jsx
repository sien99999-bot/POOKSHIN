import { useState } from 'react'
import { Link } from 'react-router-dom'
import './DisplaySettingPage.css'

const OPTIONS = ['기본 화면', '큰 글자', '고대비']

export default function DisplaySettingPage() {
  const [selected, setSelected] = useState(0)

  return (
    <div id="app">
      <main className="page">
        <h1>디스플레이 설정</h1>
        <section className="card">
          {OPTIONS.map((opt, i) => (
            <div key={opt} className={`option${i === selected ? ' active' : ''}`} onClick={() => setSelected(i)}>{opt}</div>
          ))}
          <Link to="/setting" className="btn">저장</Link>
        </section>
      </main>
    </div>
  )
}