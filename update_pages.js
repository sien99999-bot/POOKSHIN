const fs = require('fs');
const path = require('path');

const files = {
    'terms.html': `<main class="page">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
    <h1>서비스 이용약관</h1>
    <a href="setting.html" style="text-decoration:none; color:#000;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </a>
  </div>
  <section class="card" style="font-size: 14px; line-height: 1.8;">
    <strong>제 1조 (목적)</strong><br>
    본 약관은 POOKSHIN(이하 '회사')이 제공하는 위치 기반 베이커리 추천 서비스의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.<br><br>
    <strong>제 2조 (서비스의 제공)</strong><br>
    회사는 사용자(와앙이)의 식감 취향 데이터를 바탕으로 맞춤형 빵과 주변 베이커리를 추천합니다.<br><br>
    <strong>제 3조 (데이터의 수집 및 활용)</strong><br>
    사용자가 '포키'하거나 리뷰를 작성한 데이터는 취향 분석을 위해 저장되며, '내 취향 데이터' 페이지에서 시각화되어 제공됩니다.
  </section>
</main>`,

    'privacy.html': `<main class="page">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
    <h1>개인정보 처리방침</h1>
    <a href="setting.html" style="text-decoration:none; color:#000;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </a>
  </div>
  <section class="card" style="font-size: 14px; line-height: 1.8;">
    <strong>1. 수집하는 개인정보 항목</strong><br>
    회사는 회원가입 및 서비스 제공을 위해 아래와 같은 정보를 수집합니다.<br>
    - 필수항목: 소셜 로그인 식별값, 닉네임, 생년월일, 빵/식감 취향 데이터<br>
    - 선택항목: 위치 정보(주변 베이커리 추천용)<br><br>
    <strong>2. 개인정보의 이용 목적</strong><br>
    - 개인 맞춤형 빵 및 베이커리 큐레이션 서비스 제공<br>
    - '갓 구운 빵' 알림 및 POKI(포키) 동선 안내<br><br>
    <strong>3. 개인정보 보관 기간</strong><br>
    회원 탈퇴 시 즉시 파기됨을 원칙으로 합니다.
  </section>
</main>`,

    'withdraw.html': `<main class="page">
  <h1 style="color: #FB7459;">회원탈퇴</h1>
  <section class="card" style="text-align: center; margin-bottom: 24px;">
    <div style="font-size: 40px; margin-bottom: 20px;">😢</div>
    <h3 style="margin-top:0;">정말 떠나시겠어요?</h3>
    <p style="font-size: 14px; color: #666;">
      탈퇴하시면 지금껏 와앙이와 함께 모아온<br>
      <strong>소중한 취향 데이터와 포키 내역</strong>이<br>
      모두 사라지며 복구할 수 없습니다.
    </p>
  </section>
  <div style="display: flex; gap: 10px;">
    <a href="setting.html" class="btn" style="flex: 1; background: #C3C3C3; margin-top: 0;">취소</a>
    <a href="splash.html" class="btn" style="flex: 1; background: #FB7459; margin-top: 0;">탈퇴하기</a>
  </div>
</main>`,

    'profile-edit.html': `<main class="page">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
    <h1>프로필 수정</h1>
    <a href="setting.html" style="text-decoration:none; color:#000;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </a>
  </div>
  <section class="card" style="padding: 30px 24px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="width: 100px; height: 100px; background: #FFA74A; border-radius: 50%; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 18.91 5.86 16.88C7.54 15.18 9.68 14.1 12 14.1C14.32 14.1 16.46 15.18 18.14 16.88C16.43 18.91 14.03 20 12 20Z" />
        </svg>
      </div>
      <span style="color: #FB7459; font-weight: bold; font-size: 14px;">사진 변경</span>
    </div>
    <div style="margin-bottom: 20px;">
      <label style="font-size: 12px; font-weight: bold; color: #8B8B8B; margin-bottom: 8px; display: block;">닉네임</label>
      <input type="text" value="와앙이1234" style="width: 100%; padding: 16px; border-radius: 12px; border: 1px solid #E0E0E0; font-size: 16px; box-sizing: border-box; font-family: 'Interop', sans-serif;" />
    </div>
    <div style="margin-bottom: 20px;">
      <label style="font-size: 12px; font-weight: bold; color: #8B8B8B; margin-bottom: 8px; display: block;">이메일</label>
      <input type="email" value="sien99999@gmail.com" disabled style="width: 100%; padding: 16px; border-radius: 12px; border: 1px solid #E0E0E0; font-size: 16px; box-sizing: border-box; background: #F9F9F9; color: #999; font-family: 'Interop', sans-serif;" />
    </div>
  </section>
  <a href="setting.html" class="btn">저장하기</a>
</main>`,

    'contact.html': `<main class="page">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
    <h1>문의하기</h1>
    <a href="setting.html" style="text-decoration:none; color:#000;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </a>
  </div>
  <section class="card">
    <h3 style="margin-top: 0; color: #FF9F46;">POOKSHIN 고객센터</h3>
    <p style="font-size: 15px; margin-bottom: 8px;">와앙이에게 궁금한 점이 있으신가요?</p>
    <p style="font-size: 14px; color: #888; margin-bottom: 24px;">서비스 이용 불편, 오류 신고, 제휴 문의 등 다양한 의견을 환영합니다.</p>
    
    <div style="background: #F8F4EC; padding: 16px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
      <div style="font-weight: bold; margin-bottom: 4px;">이메일 문의</div>
      <div style="color: #FB7459; font-weight: 800; font-size: 18px;">support@pookshin.com</div>
    </div>
    <div style="font-size: 13px; color: #999; text-align: center;">평일 10:00 - 18:00 (주말 및 공휴일 휴무)</div>
  </section>
</main>`,

    'poki-success.html': `<main class="page" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 90vh;">
  <div style="width: 80px; height: 80px; background: #FF9F46; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </div>
  <h1 style="font-size: 32px; font-weight: 800; text-align: center; margin-bottom: 120px;">포키 완료 !</h1>
  <a href="map.html" class="btn" style="width: 100%; max-width: 354px;">길 찾기</a>
  <a href="home.html" style="margin-top: 24px; color: #9B9B9B; text-decoration: none; font-weight: bold; padding: 10px;">홈으로 돌아가기</a>
</main>`,
    
    'location-setting.html': `<main class="page">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
    <h1>위치 설정</h1>
    <a href="setting.html" style="text-decoration:none; color:#000;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </a>
  </div>
  <section class="card" style="padding: 20px; text-align: center;">
    <svg width="60" height="60" viewBox="0 0 24 24" fill="#FFA74A" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 16px;">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
    </svg>
    <h3 style="margin-top: 0;">현재 설정된 위치</h3>
    <div style="font-size: 20px; font-weight: bold; color: #FB7459; padding: 16px; background: #F8F4EC; border-radius: 12px; margin-bottom: 24px;">성수동 2가</div>
    <p style="font-size: 14px; color: #666; margin-bottom: 24px;">위치 기반으로 갓 구운 빵과 추천 베이커리를 알려드려요.</p>
    <a href="setting.html" class="btn" style="margin-top: 0;">현재 위치로 다시 찾기</a>
  </section>
</main>`
};

for (const [filename, newContent] of Object.entries(files)) {
    if (fs.existsSync(filename)) {
        let content = fs.readFileSync(filename, 'utf8');
        content = content.replace(/<div id="app">[\s\S]*?<\/div>\s*<\/body>/, \`<div id="app">\${newContent}</div>\\n</body>\`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log(\`Updated \${filename}\`);
    }
}
