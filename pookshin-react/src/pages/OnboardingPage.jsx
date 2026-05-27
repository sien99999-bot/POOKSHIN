import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './OnboardingPage.css'

const CARDS = ['donut', 'croissant', 'hotdog', 'waffle']

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [selectedCard, setSelectedCard] = useState('croissant')
  const [textureChips, setTextureChips] = useState({ '#바삭한': true, '#쫄깃한': false, '#촉촉한': false, '#버터리한': false, '#담백한': true, '#고소한': false, '#달콤한': false })
  const [tasteChips, setTasteChips] = useState({ '#겉바속촉': true, '#버터폭발': false, '#고소풍미': false, '#은은단맛': false, '#디저트형': true, '#쫄깃결': false })
  const appRef = useRef(null)

  useEffect(() => {
    function applyScale() {
      const wrapper = document.getElementById('viewport-wrapper')
      const app = appRef.current
      if (!wrapper || !app) return
      const vw = window.innerWidth
      const vh = window.innerHeight
      const safeTop = parseInt(getComputedStyle(wrapper).paddingTop) || 0
      const scale = Math.min(1, vw / 430, (vh - safeTop) / 832)
      app.style.transform = `scale(${scale})`
    }
    applyScale()
    window.addEventListener('resize', applyScale)
    return () => window.removeEventListener('resize', applyScale)
  }, [])

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2500)
      return () => clearTimeout(timer)
    }
  }, [step])

  function toggleCard(name) {
    setSelectedCard(prev => prev === name ? null : name)
  }

  function toggleTextureChip(label) {
    setTextureChips(prev => ({ ...prev, [label]: !prev[label] }))
  }

  function toggleTasteChip(label) {
    setTasteChips(prev => ({ ...prev, [label]: !prev[label] }))
  }

  function chipClass(selected, type) {
    if (!selected) return 'chip chip-unsel'
    return type === 'red' ? 'chip chip-red' : 'chip chip-yellow'
  }

  return (
    <div id="viewport-wrapper">
      <div id="onboarding-app" ref={appRef}>

        {/* SCREEN 1 */}
        <div className={`screen${step === 1 ? ' active' : ''}`} id="step-1">
          <div className="intro-bg-bread-left">
            <img src="/images/bread-baguette.png" alt="" />
          </div>
          <div className="intro-bg-wheat-right">
            <img src="/images/bread-wheat.png" alt="" />
          </div>
          <div className="intro-bg-bread-bottom">
            <img src="/images/bread-baguette.png" alt="" />
          </div>
          <div className="intro-text-box">
            <p>당신을 위한</p>
            <p>오븐이 열리고</p>
            <p>있어요</p>
            <p>...</p>
          </div>
        </div>

        {/* SCREEN 2 */}
        <div className={`screen${step === 2 ? ' active' : ''}`} id="step-2">
          <div style={{ position: 'absolute', right: 24, top: 138, textAlign: 'right', fontFamily: "'Pretendard Variable',sans-serif", fontSize: 40, color: '#FF9F46', lineHeight: 1.7, letterSpacing: '-2px', whiteSpace: 'nowrap' }}>
            <p style={{ fontWeight: 600 }}>안녕 -!</p>
            <p><span style={{ fontWeight: 600 }}>나는 </span><span style={{ fontWeight: 700, color: 'white', background: '#FF9F46', padding: '0 4px', borderRadius: 2 }}>와앙이</span><span style={{ fontWeight: 600 }}> 야</span></p>
            <p><span style={{ fontWeight: 600 }}>너의 </span><span style={{ fontWeight: 700, color: 'white', background: '#FF9F46', padding: '0 4px', borderRadius: 2 }}>빵 취향 </span><span style={{ fontWeight: 600 }}>이 궁금해</span></p>
            <p style={{ fontWeight: 600 }}>알려줄 수 있을까?</p>
          </div>
          <div className="mascot-container mascot-happy" style={{ top: 410 }}>
            <img src="/images/mascot-happy.png" alt="와앙이" />
          </div>
          <button className="btn btn-orange" style={{ left: 41, bottom: 100, top: 'auto', width: 354, height: 54 }} onClick={() => setStep(3)}>시작하기</button>
        </div>

        {/* SCREEN 3 */}
        <div className={`screen${step === 3 ? ' active' : ''}`} id="step-3">
          <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2054%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%208901'%3e%3ccircle%20id='Ellipse%204'%20cx='5'%20cy='5'%20r='5'%20fill='%23FF9F46'/%3e%3ccircle%20id='Ellipse%205'%20cx='27'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3ccircle%20id='Ellipse%206'%20cx='49'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3c/g%3e%3c/svg%3e"
               style={{ position: 'absolute', left: 188, top: 66, width: 54, height: 10 }} alt="" />
          <div style={{ position: 'absolute', top: 153, left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 24, color: '#000', letterSpacing: '-0.48px', lineHeight: 1.5 }}>
            <p>와앙! 지금 당장 한입 크게</p>
            <p>베어 물고 싶은 빵은 뭐야?</p>
          </div>
          <p style={{ position: 'absolute', top: 232, left: 0, right: 0, textAlign: 'center', fontWeight: 500, fontSize: 16, color: '#8B8B8B', letterSpacing: '-0.32px', lineHeight: 1.5 }}>선호하는 빵을 선택해 주세요.</p>

          <div className={`bread-card${selectedCard === 'donut' ? ' selected' : ''}`} style={{ left: 83, top: 298 }} onClick={() => toggleCard('donut')}>
            <img src="/images/bread-bagel.png" style={{ position: 'absolute', width: 289.6, height: 287.9, left: -14.6, top: -16.9, pointerEvents: 'none', maxWidth: 'none' }} alt="베이글" />
          </div>

          <div className={`bread-card${selectedCard === 'croissant' ? ' selected' : ''}`} style={{ left: 226, top: 298 }} onClick={() => toggleCard('croissant')}>
            <img src="/images/onboarding-breads-1.png" style={{ position: 'absolute', width: 268, height: 267.8, left: -130, top: -10.7, pointerEvents: 'none', maxWidth: 'none' }} alt="크루아상" />
          </div>
          {selectedCard === 'croissant' && (
            <p style={{ position: 'absolute', top: 429, left: 226, width: 131.4, textAlign: 'center', fontWeight: 700, fontSize: 16, color: '#FB7459', letterSpacing: '0.16px', lineHeight: 1.5 }}>Croissant</p>
          )}

          <div className={`bread-card${selectedCard === 'hotdog' ? ' selected' : ''}`} style={{ left: 83, top: 458 }} onClick={() => toggleCard('hotdog')}>
            <img src="/images/onboarding-breads-1.png" style={{ position: 'absolute', width: 269.4, height: 269.1, left: -10.5, top: -119.2, pointerEvents: 'none', maxWidth: 'none' }} alt="핫도그" />
          </div>

          <div className={`bread-card${selectedCard === 'waffle' ? ' selected' : ''}`} style={{ left: 226, top: 458 }} onClick={() => toggleCard('waffle')}>
            <img src="/images/bread-bagel.png" style={{ position: 'absolute', width: 277.8, height: 276.7, left: -137, top: -129.6, pointerEvents: 'none', maxWidth: 'none' }} alt="와플" />
          </div>

          <button className="btn btn-white"  style={{ left: 41, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(2)}>이전</button>
          <button className="btn btn-orange" style={{ left: 223, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(4)}>다음</button>
        </div>

        {/* SCREEN 4 */}
        <div className={`screen${step === 4 ? ' active' : ''}`} id="step-4">
          <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2054%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%208901'%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3ccircle%20cx='27'%20cy='5'%20r='5'%20fill='%23FF9F46'/%3e%3ccircle%20cx='49'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3c/g%3e%3c/svg%3e"
               style={{ position: 'absolute', left: 188, top: 66, width: 54, height: 10 }} alt="" />
          <div style={{ position: 'absolute', top: 153, left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 24, color: '#000', letterSpacing: '-0.48px', lineHeight: 1.5 }}>
            <p>와앙! 지금 가장 끌리는</p>
            <p>식감을 골라봐!</p>
          </div>
          <p style={{ position: 'absolute', top: 232, left: 0, right: 0, textAlign: 'center', fontWeight: 500, fontSize: 16, color: '#8B8B8B', letterSpacing: '-0.32px', lineHeight: 1.5 }}>선호하는 식감을 선택해 주세요.</p>

          {[
            { label: '#바삭한', left: 44, top: 300 },
            { label: '#쫄깃한', left: 131, top: 300 },
            { label: '#촉촉한', left: 218, top: 300 },
            { label: '#버터리한', left: 305, top: 300 },
            { label: '#담백한', left: 101, top: 344 },
            { label: '#고소한', left: 188, top: 344 },
            { label: '#달콤한', left: 275, top: 344 },
          ].map(({ label, left, top }) => (
            <div key={label} className={chipClass(textureChips[label], 'red')} style={{ left, top }} onClick={() => toggleTextureChip(label)}>{label}</div>
          ))}

          <div className="mascot-container mascot-thinking" style={{ bottom: 209, top: 'auto' }}>
            <img src="/images/mascot-thinking.png" alt="고민하는 와앙이" />
          </div>

          <button className="btn btn-white"  style={{ left: 41, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(3)}>이전</button>
          <button className="btn btn-orange" style={{ left: 223, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(5)}>다음</button>
        </div>

        {/* SCREEN 5 */}
        <div className={`screen${step === 5 ? ' active' : ''}`} id="step-5">
          <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2054%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%208901'%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3ccircle%20cx='27'%20cy='5'%20r='5'%20fill='%239B9B9B'/%3e%3ccircle%20cx='49'%20cy='5'%20r='5'%20fill='%23FF9F46'/%3e%3c/g%3e%3c/svg%3e"
               style={{ position: 'absolute', left: 188, top: 66, width: 54, height: 10 }} alt="" />
          <div style={{ position: 'absolute', top: 153, left: 0, right: 0, textAlign: 'center', fontWeight: 700, fontSize: 24, color: '#000', letterSpacing: '-0.48px', lineHeight: 1.5 }}>
            <p>디테일 차이!</p>
            <p>너가 아는 한 끗 차이 취향을 알려줘.</p>
          </div>
          <p style={{ position: 'absolute', top: 232, left: 0, right: 0, textAlign: 'center', fontWeight: 500, fontSize: 16, color: '#8B8B8B', letterSpacing: '-0.32px', lineHeight: 1.5 }}>선호하는 빵의 취향을 선택해 주세요.</p>

          {[
            { label: '#겉바속촉', left: 67, top: 297 },
            { label: '#버터폭발', left: 175, top: 297 },
            { label: '#고소풍미', left: 283, top: 297 },
            { label: '#은은단맛', left: 121, top: 343 },
            { label: '#디저트형', left: 229, top: 343 },
          ].map(({ label, left, top }) => (
            <div key={label} className={chipClass(tasteChips[label], 'yellow')} style={{ left, top }} onClick={() => toggleTasteChip(label)}>{label}</div>
          ))}
          <div className={chipClass(tasteChips['#쫄깃결'], 'yellow')} style={{ left: '50%', top: 389, transform: 'translateX(-50%)' }} onClick={() => toggleTasteChip('#쫄깃결')}>#쫄깃결</div>

          <div className="mascot-container mascot-excited" style={{ bottom: 192, top: 'auto' }}>
            <img src="/images/mascot-new.png" alt="신난 와앙이" />
          </div>

          <button className="btn btn-white"  style={{ left: 41, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(4)}>이전</button>
          <button className="btn btn-orange" style={{ left: 223, bottom: 100, top: 'auto', width: 172, height: 54 }} onClick={() => setStep(6)}>다음</button>
        </div>

        {/* SCREEN 6 - 로그인 */}
        <div className={`screen${step === 6 ? ' active' : ''}`} id="step-6">
          <div className="highlight-box hl-pick"></div>
          <div style={{ position: 'absolute', top: 224, left: 0, right: 0, textAlign: 'center', fontFamily: "'Pretendard Variable',sans-serif", fontSize: 40, color: '#FF9F46', lineHeight: 1.5, letterSpacing: '-0.8px', whiteSpace: 'nowrap' }}>
            <p style={{ fontWeight: 600 }}>이제 고민 끝.</p>
            <p><span style={{ fontWeight: 600 }}>와앙이가 </span><span style={{ fontWeight: 700, color: 'white' }}>정해줄게</span><span style={{ fontWeight: 600 }}> -!</span></p>
          </div>

          <Link to="/home" style={{ position: 'absolute', left: 39, bottom: 269, top: 'auto', width: 344, height: 60, borderRadius: 10, background: '#FEE500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', fontFamily: "'Pretendard Variable',sans-serif", fontWeight: 600, fontSize: 18, color: '#000', letterSpacing: '-0.36px', lineHeight: '22px' }}>
            <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2036%2033.778'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.902'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18%200C8.58%200%200%207.572%200%2013.978C0%2018.778%203.116%2023.012%207.862%2025.528L5.866%2032.86C5.688%2033.51%206.426%2034.026%206.992%2033.652L15.746%2027.842C16.484%2027.914%2017.236%2027.956%2018%2027.956C27.94%2027.956%2036%2021.698%2036%2013.978C36%207.572%2027.94%200%2018%200Z'%20fill='black'/%3e%3c/svg%3e" style={{ width: 22, height: 22 }} alt="" />
            카카오 로그인
          </Link>

          <Link to="/home" style={{ position: 'absolute', left: 39, bottom: 189, top: 'auto', width: 344, height: 60, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', fontFamily: "'Pretendard Variable',sans-serif", fontWeight: 600, fontSize: 18, color: '#000', letterSpacing: '-0.36px', lineHeight: '22px', border: '1px solid #e5e5e5' }}>
            <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.54%2011.7614C22.54%2010.9459%2022.4668%2010.1618%2022.3309%209.40909H11.5V13.8575H17.6891C17.4225%2015.295%2016.6123%2016.513%2015.3943%2017.3284V20.2139H19.1109C21.2855%2018.2118%2022.54%2015.2636%2022.54%2011.7614Z'%20fill='%234285F4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.4999%2022.9998C14.6049%2022.9998%2017.2081%2021.9701%2019.1108%2020.2137L15.3942%2017.3282C14.3645%2018.0182%2013.0472%2018.426%2011.4999%2018.426C8.50469%2018.426%205.96946%2016.403%205.06515%2013.6848H1.2231V16.6644C3.11537%2020.4228%207.00446%2022.9998%2011.4999%2022.9998Z'%20fill='%2334A853'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.06523%2013.6851C4.83523%2012.9951%204.70455%2012.258%204.70455%2011.5001C4.70455%2010.7421%204.83523%2010.0051%205.06523%209.31506V6.33552H1.22318C0.444318%207.88802%200%209.64438%200%2011.5001C0%2013.3557%200.444318%2015.1121%201.22318%2016.6646L5.06523%2013.6851Z'%20fill='%23FBBC05'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.4999%204.57386C13.1883%204.57386%2014.7042%205.15409%2015.8961%206.29364L19.1945%202.99523C17.2029%201.13955%2014.5997%200%2011.4999%200C7.00446%200%203.11537%202.57705%201.2231%206.33545L5.06515%209.315C5.96946%206.59682%208.50469%204.57386%2011.4999%204.57386Z'%20fill='%23EA4335'/%3e%3c/g%3e%3c/svg%3e" style={{ width: 23, height: 23 }} alt="" />
            구글 로그인
          </Link>

          <Link to="/home" style={{ position: 'absolute', left: 39, bottom: 109, top: 'auto', width: 344, height: 60, borderRadius: 10, background: '#000', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', fontFamily: "'Pretendard Variable',sans-serif", fontWeight: 600, fontSize: 18, color: 'white', letterSpacing: '-0.36px', lineHeight: '22px' }}>
            <img src="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2021%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.5664%206.43262H15.5693C17.3363%206.5757%2018.6639%207.20841%2019.6035%208.30762C17.8983%209.51082%2017.0264%2011.1578%2017.0449%2013.2158V13.2168C17.0633%2014.9442%2017.695%2016.4034%2018.9326%2017.5537C19.3704%2017.9697%2019.8513%2018.3113%2020.375%2018.5811C20.286%2018.822%2020.196%2019.0567%2020.1006%2019.2842C19.7363%2020.128%2019.3063%2020.9022%2018.8096%2021.6123C18.1091%2022.6138%2017.5605%2023.269%2017.1641%2023.6143L17.1543%2023.624C16.5382%2024.1922%2015.9123%2024.4546%2015.2656%2024.4707C14.7881%2024.4692%2014.1732%2024.3316%2013.4141%2024.0186H13.4131C12.569%2023.6733%2011.7687%2023.4922%2011.0166%2023.4922C10.2349%2023.4923%209.41535%2023.6717%208.56055%2024.0176H8.55957C7.77035%2024.3379%207.18161%2024.484%206.76953%2024.498H6.76562C6.18318%2024.5229%205.55112%2024.2719%204.8584%2023.626L4.85254%2023.6201L4.84668%2023.6152C4.41115%2023.2343%203.83611%2022.5521%203.12012%2021.5371V21.5361L2.84668%2021.1348C2.22415%2020.1789%201.69906%2019.0889%201.27441%2017.8594H1.27539C0.756775%2016.3446%200.5%2014.8881%200.5%2013.4873C0.500058%2011.8851%200.845086%2010.5327%201.51367%209.41309L1.51562%209.4082C2.04226%208.50696%202.73884%207.80203%203.61035%207.2832C4.47956%206.76582%205.41537%206.50197%206.42871%206.48438C6.94125%206.48523%207.66338%206.64696%208.62305%207.00586V7.00684C9.11778%207.19304%209.53283%207.33595%209.86328%207.43359C10.1768%207.52623%2010.4651%207.59375%2010.6826%207.59375C10.7985%207.59371%2010.9313%207.56699%2011.0469%207.53906C11.1747%207.50817%2011.3296%207.46335%2011.5088%207.40723C11.8684%207.29461%2012.3476%207.12706%2012.9424%206.9082C14.0248%206.51786%2014.8924%206.37532%2015.5664%206.43262ZM15.2471%200.5625C15.2323%201.65575%2014.8305%202.69036%2014.0049%203.67383C13.093%204.74273%2012.0664%205.35195%2010.999%205.41309C11.0051%204.35831%2011.4682%203.19662%2012.3203%202.22949L12.3223%202.22754C12.7351%201.75235%2013.2668%201.34848%2013.9268%201.02148C14.3959%200.792213%2014.8359%200.641884%2015.2471%200.5625Z'%20fill='white'%20stroke='black'/%3e%3c/svg%3e" style={{ width: 18, height: 22 }} alt="" />
            애플 로그인
          </Link>
        </div>

      </div>
    </div>
  )
}
