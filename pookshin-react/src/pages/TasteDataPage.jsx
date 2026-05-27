import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './TasteDataPage.css'

export default function TasteDataPage() {
  const donutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate')
      }),
      { threshold: 0.5 }
    )
    if (donutRef.current) observer.observe(donutRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="app">
      <div className="header">
        <div />
        <div className="header-title">내 취향 데이터</div>
        <Link to="/my" className="header-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="hero">
        <div className="hero-white-strip" />
        <div className="hero-mascot">
          <img src="/images/mascot-mypage.png" alt="와앙이" />
        </div>
        <div className="hero-badge">
          <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20139%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%209039'%3e%3cpath%20id='Rectangle%203468629'%20d='M0%2023.5813C0%2011.232%2011.0813%201.8336%2023.265%203.84961L113.897%2018.8464C128.379%2021.2426%20139%2033.7655%20139%2048.4439V90H0V23.5813Z'%20fill='%23FFA74A'/%3e%3c/g%3e%3c/svg%3e" alt="" />
        </div>
        <div className="hero-name">와앙이1234</div>
        <div className="hero-status-wrap">
          <span className="hero-status-text">요즘은 바삭한게 좋아 -!</span>
        </div>
        <div className="hero-tags">
          <span className="tag">#크루아상</span>
          <span className="tag">#소금빵</span>
          <span className="tag">#크림빵</span>
        </div>
      </div>

      <div className="section-title">DNA 요약</div>
      <div className="card">
        <div className="word-cloud">
          <div><span className="word large">바삭파</span> <span className="word small">성수동활동형</span></div>
          <div><span className="word small">리뷰확신형</span> <span className="word large">크루아상매니아</span></div>
          <div><span className="word large">푹신베이커리</span> <span className="word small">겉바속촉</span></div>
          <div><span className="word small">담백파</span> <span className="word large">디저트좋아</span></div>
          <div><span className="word small" style={{ marginLeft: -50 }}>조용한분위기</span></div>
        </div>
        <div className="divider" />
        <div className="dna-desc">
          <span className="dna-desc-title">당신은...</span>
          <span className="dna-desc-content">
            <strong>바삭파 크루아상매니아,</strong><br />
            디저트 좋아하는 조용한 성수동빵순이 🥐
          </span>
        </div>
      </div>

      <div className="section-title">취향 밸런스</div>
      <div className="radar-container">
        <div className="radar-wrapper">
          <img src="/images/radar-chart.svg" alt="취향 밸런스 차트" className="radar-bg" />
          <div className="radar-labels">
            <span style={{ top: 0, left: 138 }}>바삭</span>
            <span style={{ top: 83, left: 267 }}>버터</span>
            <span style={{ top: 210, left: 269 }}>촉촉</span>
            <span style={{ top: 287, left: 138 }}>쫄깃</span>
            <span style={{ top: 210, left: 0 }}>담백</span>
            <span style={{ top: 83, left: 0 }}>꾸덕</span>
          </div>
        </div>
      </div>
      <div className="banner-right">
        <img src="/images/banner-arrow-right.png" alt="" />
        겉바속촉을 좋아하는 너! 쫄깃담백한건 조금 싫어할지도?
      </div>

      <div className="section-title">내 취향 트렌드</div>
      <div className="trend-header">
        <div className="donut-wrap animate-donut" ref={donutRef}>
          <svg viewBox="0 0 160 160">
            <circle className="donut-bg-circle" cx="80" cy="80" r="65" />
            <circle className="donut-fill-circle" cx="80" cy="80" r="65" />
          </svg>
          <div className="donut-text">82%</div>
        </div>
        <div className="trend-text">
          <div><h3>#바삭</h3></div>
          <p>바삭함을 가장 좋아해요.<br />바삭 취향이 가장 크게<br />증가했어요.</p>
        </div>
      </div>

      <div className="trend-graph">
        <div className="x-axis">
          <span>4주전</span>
          <span>3주전</span>
          <span>2주전</span>
          <span>1주전</span>
        </div>
        <div className="graph-img-wrap">
          <img src="/images/trend-graph-original.svg" alt="트렌드 그래프" />
        </div>
      </div>

      <div className="banner-left">
        <div className="banner-left-icon-wrapper">
          <img src="/images/banner-arrow-up.png" alt="" />
        </div>
        지난 4주간 바삭 취향이 &nbsp;<strong style={{ color: '#FFA74A', fontSize: 18 }}>12% 상승</strong>&nbsp; 했어요 !
      </div>

      <div className="comment-section">
        <div className="comment-card">
          <h3>와앙이의 코멘트</h3>
          <p>
            넌 겉바속촉 정통파야! 바삭 82%는<br />
            첫 한입 소리까지 중요하게 여긴다는<br />
            뜻이야. 버터 73%는 풍미 진한 유럽식<br />
            빵을 좋아한다는 신호!<br />
            <strong style={{ fontWeight: 600, color: '#FFA74A' }}>에피 바게트나 덴마크 페이스트리</strong>를<br />
            다음에 추천해줄게!
          </p>
        </div>
        <img src="/images/mascot-excited.png" alt="와앙이" className="comment-mascot" />
      </div>

      <div className="bottom-yellow-section">
        <div className="section-title">추천 빵</div>
        <div className="recommend-scroll">
          <div className="rec-card">
            <img src="/images/bread-garlic.png" alt="갈릭 휘낭시에" className="rec-img" />
            <div className="rec-title">갈릭 휘낭시에</div>
          </div>
          <div className="rec-card">
            <img src="/images/bread-epi.png" alt="에피 바게트" className="rec-img" />
            <div className="rec-title">에피 바게트</div>
          </div>
          <div className="rec-card">
            <img src="/images/bread-salt.png" alt="소금빵" className="rec-img" />
            <div className="rec-title">소금빵</div>
          </div>
        </div>
      </div>
    </div>
  )
}