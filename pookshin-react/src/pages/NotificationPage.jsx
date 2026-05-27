import { Link } from 'react-router-dom'
import './NotificationPage.css'

const NOTIFICATIONS = [
  { unread: true, icon: '&#xE0B0;', iconColor: '#ffa74a', title: '[베이크하우스] 새로운 빵이 구워졌어요!', sub: '와앙이님이 찜한 빵집에 신메뉴가 등록되었습니다. 지금 바로 확인해보세요.', time: '1시간 전' },
  { unread: true, icon: '&#xE0A0;', iconColor: '#ffa74a', title: '최근 포키한 크루아상은 어땠나요?', sub: '맛있는 빵을 드셨다면 리뷰를 남겨주세요. 와앙이님의 리뷰가 큰 도움이 됩니다.', time: '3시간 전' },
  { unread: false, icon: '&#xEF60;', iconColor: '#9b9b9b', title: '[크로플상점] 갓 나온지 30분 된 빵이에요!', titleColor: '#666', sub: '주변 베이커리에 갓 구운 빵이 나왔어요. 달려가서 \'포키\' 하세요!', time: '2일 전' },
  { unread: false, icon: '&#xEF40;', iconColor: '#9b9b9b', title: '알림 설정이 완료되었습니다.', sub: '이제 관심있는 빵집의 갓 구운 빵 소식을 가장 먼저 받아볼 수 있습니다.', time: '1주일 전' },
]

export default function NotificationPage() {
  return (
    <div id="app">
      <div className="topbar">
        <Link to="/home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="topbar-title">알림</div>
      </div>
      <div className="noti-list">
        {NOTIFICATIONS.map((n, i) => (
          <div key={i} className={`noti-card${n.unread ? ' unread' : ''}`}>
            <div className="noti-icon-box" style={!n.unread ? { background: '#f8f4ec' } : {}}>
              <i className="mi noti-icon" style={{ color: n.iconColor }} dangerouslySetInnerHTML={{ __html: n.icon }} />
            </div>
            <div className="noti-content">
              <p className="noti-message" style={n.titleColor ? { color: n.titleColor } : {}}>{n.title}</p>
              <p className="noti-subtext">{n.sub}</p>
              <p className="noti-time">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}