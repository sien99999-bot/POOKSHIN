import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './DetailPage.css'

const SLIDES = [
  { id: 0, img: '/images/hero-croissant.png', alt: '크루아상' },
  { id: 1, img: '/images/bakery-photo2.png', alt: '베이커리' },
  { id: 2, img: '/images/bakery-photo3.png', alt: '베이커리' },
]

const TASTE_ROWS = [
  { left: '바삭', right: '쫄깃', active: 3 },
  { left: '촉촉', right: '꾸덕', active: 1 },
  { left: '버터', right: '담백', active: 3 },
  { left: '당도', right: '', active: 2 },
]

export default function DetailPage() {
  const [current, setCurrent] = useState(0)
  const [sheetY, setSheetY] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [donuts, setDonuts] = useState(false)
  const [tasteSectionAnimate, setTasteSectionAnimate] = useState(false)

  const MIN_Y = -587
  const MAX_Y = 0

  const sheetRef = useRef(null)
  const scrollRef = useRef(null)
  const sliderRef = useRef(null)
  const donutRef = useRef(null)
  const tasteSectionRef = useRef(null)

  const dragRef = useRef({ isDragging: false, startY: 0, startSheetY: 0, startScrollTop: 0 })

  // Intersection observer for donut animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setDonuts(true) }),
      { threshold: 0.7 }
    )
    const tasteObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setTasteSectionAnimate(true) }),
      { threshold: 0.3 }
    )
    if (donutRef.current) observer.observe(donutRef.current)
    if (tasteSectionRef.current) tasteObs.observe(tasteSectionRef.current)
    return () => { observer.disconnect(); tasteObs.disconnect() }
  }, [])

  // Bottom sheet animation helper
  const snapSheet = useCallback((targetY, expand) => {
    setAnimating(true)
    setSheetY(targetY)
    setExpanded(expand)
    if (!expand && scrollRef.current) scrollRef.current.scrollTop = 0
    setTimeout(() => setAnimating(false), 300)
  }, [])

  // Bottom sheet drag
  const onPointerDown = useCallback(e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    if (expanded && e.pointerType !== 'mouse' && scrollRef.current?.scrollTop > 0) return

    dragRef.current = {
      isDragging: true,
      startY: e.clientY,
      startSheetY: sheetY,
      startScrollTop: scrollRef.current?.scrollTop ?? 0,
    }
    sheetRef.current?.setPointerCapture(e.pointerId)
  }, [expanded, sheetY])

  const onPointerMove = useCallback(e => {
    if (!dragRef.current.isDragging) return
    const delta = e.clientY - dragRef.current.startY

    if (expanded) {
      if (e.pointerType !== 'mouse' && delta < 0) {
        dragRef.current.isDragging = false
        sheetRef.current?.releasePointerCapture(e.pointerId)
        return
      }
      const newScroll = dragRef.current.startScrollTop - delta
      if (newScroll > 0) {
        if (scrollRef.current) scrollRef.current.scrollTop = newScroll
        return
      } else {
        setExpanded(false)
        if (scrollRef.current) scrollRef.current.scrollTop = 0
        dragRef.current.startY = e.clientY
        dragRef.current.startSheetY = MIN_Y
      }
    }

    let newY = dragRef.current.startSheetY + delta
    newY = Math.max(MIN_Y, Math.min(MAX_Y, newY))
    setSheetY(newY)
  }, [expanded, MIN_Y])

  const onPointerUp = useCallback(e => {
    if (!dragRef.current.isDragging) return
    dragRef.current.isDragging = false
    sheetRef.current?.releasePointerCapture(e.pointerId)

    const moved = Math.abs(e.clientY - dragRef.current.startY)
    if (moved < 8 && expanded) {
      const cardTop = sheetRef.current?.getBoundingClientRect().top ?? 0
      if (e.clientY - cardTop < 60) { snapSheet(MAX_Y, false); return }
    }

    if (!expanded) {
      if (sheetY < MIN_Y / 2) snapSheet(MIN_Y, true)
      else snapSheet(MAX_Y, false)
    }
  }, [expanded, sheetY, MIN_Y, snapSheet])

  // Slider drag
  const sliderDrag = useRef({ dragging: false, startX: 0, diffX: 0 })

  const onSliderTouchStart = e => {
    sliderDrag.current = { dragging: true, startX: e.touches[0].clientX, diffX: 0 }
  }
  const onSliderTouchMove = e => {
    if (!sliderDrag.current.dragging) return
    sliderDrag.current.diffX = e.touches[0].clientX - sliderDrag.current.startX
  }
  const onSliderTouchEnd = () => {
    if (!sliderDrag.current.dragging) return
    sliderDrag.current.dragging = false
    const { diffX } = sliderDrag.current
    if (diffX < -50) setCurrent(c => (c + 1) % 3)
    else if (diffX > 50) setCurrent(c => (c + 2) % 3)
  }

  const dimOpacity = Math.abs(sheetY / MIN_Y)

  return (
    <div id="app">
      <div className="hero-section">
        <Link to="/home" className="btn-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <h1 className="hero-title">CROISSANT</h1>

        <img src="/images/top-background-image.svg" className="hero-bg-shape" alt="" aria-hidden="true" />

        <div
          className="hero-slider"
          ref={sliderRef}
          onTouchStart={onSliderTouchStart}
          onTouchMove={onSliderTouchMove}
          onTouchEnd={onSliderTouchEnd}
        >
          {SLIDES.map((s, i) => {
            const pos = (i - current + 3) % 3
            return (
              <div key={s.id} className={`hero-img-item pos-${pos}`}>
                <img src={s.img} alt={s.alt} />
              </div>
            )
          })}
        </div>

        <div className="slide-dots">
          {SLIDES.map((_, i) => (
            <div key={i} className={`slide-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>

        {/* Dim overlay */}
        <div
          className={`dim-overlay${dimOpacity > 0.1 ? ' active' : ''}`}
          style={{ opacity: dimOpacity }}
          onClick={() => snapSheet(MAX_Y, false)}
        />

        {/* Bottom Sheet */}
        <div
          ref={sheetRef}
          className={`bottom-card-wrapper${expanded ? ' expanded' : ''}`}
          style={{ transform: `translateY(${sheetY}px)`, transition: animating ? 'transform 0.3s cubic-bezier(0.25,0.8,0.25,1)' : 'none' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="bottom-card-bg" />
          <div
            ref={scrollRef}
            className="scroll-content"
            style={{ overflowY: expanded ? 'auto' : 'hidden' }}
          >
            <div className="scroll-inner">
              <div className="card-top-handle">
                <div className="card-handle-bar" />
              </div>

              {/* Baker's Note */}
              <div className="bakers-note">
                <h2 className="bakers-note-title">
                  <img src="/images/wheat-bg.svg" alt="" aria-hidden="true" />
                  Baker&apos;s Note
                  <img src="/images/wheat-bg.svg" alt="" aria-hidden="true" style={{ transform: 'scaleX(-1)' }} />
                </h2>
                <p className="note-body">
                  오븐에서 꺼낸 시간,<br />
                  가장 먼저 전해지는 건 &apos;바삭함&apos;입니다.<br /><br />
                  겹겹이 살아있는 결을 따라<br />
                  가볍게 부서지는 식감과<br />
                  버터의 풍미가 함께 느껴지도록 완성했습니다.<br /><br />
                  처음 한 입의 바삭함을 즐겨보세요.
                </p>
              </div>

              {/* Donut Charts */}
              <div className="charts-section">
                <div className="charts-bg">
                  <img src="/images/section02-background-new.svg" alt="" aria-hidden="true" />
                  <div className="donut-absolute shop-pos" ref={donutRef}>
                    <div className={`donut-wrap shop${donuts ? ' animate' : ''}`}>
                      <svg viewBox="0 0 125 125">
                        <circle className="donut-bg-circle" cx="62.5" cy="62.5" r="50" />
                        <circle className="donut-fill-circle shop-fill" cx="62.5" cy="62.5" r="50" />
                      </svg>
                      <div className="donut-text-col">
                        <span className="donut-label-shop">가게</span>
                        <span className={`donut-pct-shop${donuts ? ' visible' : ''}`}>78%</span>
                      </div>
                    </div>
                  </div>
                  <div className="donut-absolute bread-pos">
                    <div className={`donut-wrap bread${donuts ? ' animate' : ''}`}>
                      <svg viewBox="0 0 160 160">
                        <circle className="donut-bg-circle bread-bg" cx="80" cy="80" r="65" />
                        <circle className="donut-fill-circle bread-fill" cx="80" cy="80" r="65" />
                      </svg>
                      <div className="donut-text-col">
                        <span className="donut-label-bread">빵</span>
                        <span className={`donut-pct-bread${donuts ? ' visible' : ''}`}>82%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fresh Banner */}
              <div className="fresh-banner-wrap">
                <div className="fresh-banner">
                  <div className="fresh-top">
                    <span className="mi fresh-alarm-icon">&#xEF60;</span>
                    <span className="fresh-title">갓 구운 시간</span>
                  </div>
                  <div className="fresh-bottom">
                    <span className="fresh-time">30분 전</span>
                    <p className="fresh-desc">아직 따뜻함이 남아있어요!<br />지금 &apos;포키&apos; 하면 가장 맛있어요!</p>
                  </div>
                </div>
              </div>

              {/* Bakery Info */}
              <div className="bakery-section">
                <div className="bakery-bg">
                  <img src="/images/section05-background.svg" alt="" aria-hidden="true" />
                </div>
                <div className="bakery-contents">
                  <div className="bakery-top">
                    <div className="bakery-header-row">
                      <h2 className="bakery-name">푹신 베이커리</h2>
                      <div className="bakery-badge-wrap">
                        <span className="bakery-badge">도보 4분</span>
                        <span className="bakery-dist">(300M)</span>
                      </div>
                    </div>
                    <div className="bakery-tags">
                      {['#요즘핫플', '#정성가득', '#크루아상맛집', '#겉바속촉'].map(t => (
                        <span key={t} className="bakery-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="bakery-desc">
                    푹신 베이커리는 바삭하고 결이 살아있는<br />
                    크로아상을 대표 메뉴로, <br />
                    부드럽고 달콤한 빵을 즐길 수 있는<br />
                    따뜻한 베이커리입니다.
                  </p>
                  <a href="#" className="other-menu-btn">
                    같은 가게 다른 메뉴 추천보기
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="bakery-photo-circle">
                  <img src="/images/bakery-photo.png" alt="푹신 베이커리" />
                </div>
              </div>

              {/* Info Cards */}
              <div className="info-cards-row">
                <div className="info-card">
                  <div className="info-card-title">영업시간</div>
                  <div className="info-card-row"><span>평일</span><span>08:00 - 22:00</span></div>
                  <div className="info-card-row"><span>주말</span><span>10:00 - 20:00</span></div>
                </div>
                <div className="info-card">
                  <div className="info-card-title">위치</div>
                  <p className="info-card-addr">서울특별시 성동구<br />연무장길 27-3, 1층</p>
                </div>
              </div>

              {/* Combos */}
              <div className="combo-section">
                <h2 className="combo-title">추천 조합</h2>
                <div className="combo-box">
                  {[
                    { img: '/images/emoji-coffee.png', name: '아메리카노와 함께', desc: '버터의 풍미와 쌉쌀한 커피가 균형을 이뤄요' },
                    { img: '/images/emoji-strawberry.png', name: '딸기잼 곁들이기', desc: '달콤새콤한 잼이 담백한 크루아상을 완성해요' },
                    { img: '/images/emoji-egg.png', name: '수란 + 에그 크루아상', desc: '브런치로 든든하게 하루를 시작하는 조합이에요' },
                  ].map(c => (
                    <div key={c.name} className="combo-item">
                      <img src={c.img} className="combo-emoji" alt="" />
                      <div className="combo-text">
                        <p className="combo-name">{c.name}</p>
                        <p className="combo-desc">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taste Data */}
              <div ref={tasteSectionRef} className={`taste-section${tasteSectionAnimate ? ' animate' : ''}`}>
                <h2 className="taste-title">식감 데이터</h2>
                <div className="taste-box">
                  {TASTE_ROWS.map((row, ri) => (
                    <div key={ri} className="taste-row">
                      <span className="taste-label">{row.left}</span>
                      <div className="taste-dots">
                        {Array.from({ length: 5 }, (_, di) => (
                          <span key={di} className={`dot${di === row.active ? ' on' : ''}`} />
                        ))}
                      </div>
                      <span className="taste-label taste-label-right">{row.right}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mascot */}
              <div className="mascot-banner">
                <div className="mascot-img-wrap">
                  <img src="/images/mascot-happy.png" alt="와앙이" />
                </div>
                <div className="mascot-text-box">
                  <p className="mascot-speech-title">와앙이의 한마디 !</p>
                  <p className="mascot-speech-text">
                    겉은 바삭, 속은 촉촉해서<br />
                    한 입 먹으면 멈출 수 없거든…<br />
                    와앙이가 보장해!
                  </p>
                </div>
              </div>

              {/* Ingredients */}
              <div className="ingredient-section">
                <h2 className="sec-title">성분 구성</h2>
                <div className="ingredient-row">
                  {['밀가루', '버터', '달걀'].map(name => (
                    <div key={name} className="ingredient-circle">
                      <span className="ingredient-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}