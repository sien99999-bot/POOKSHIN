const fs = require('fs');
let text = fs.readFileSync('detail.html', 'utf8');

// Replace the CSS
const newCss = `    /* 빵집 정보 (section05) */
    .bakery-section { position: relative; width: 100%; min-height: 348px; margin-top: 64px; display: flex; flex-direction: column; }
    .bakery-bg { position: absolute; left: 0; top: 0; width: 100%; height: 348px; z-index: 0; }
    .bakery-bg img { width: 100%; height: 100%; object-fit: fill; }
    .bakery-contents { position: relative; z-index: 1; padding: 16px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 22px; }
    .bakery-header-row { display: flex; align-items: center; justify-content: flex-start; gap: 15px; }
    .bakery-name { font-weight: 700; font-size: clamp(calc(28px * 0.8), calc(28 * 100vw / 430), 28px); color: #000; letter-spacing: -0.56px; line-height: 1.5; margin: 0; white-space: nowrap; }
    .bakery-badge-wrap { display: flex; align-items: center; gap: 8px; }
    .bakery-badge { border: 1px solid #FFDA46; border-radius: 8px; padding: 1px 8px; font-size: clamp(calc(13px * 0.8), calc(13 * 100vw / 430), 13px); color: #FFDA46; font-weight: 400; white-space: nowrap; line-height: 1.5; }
    .bakery-dist { font-size: clamp(calc(13px * 0.8), calc(13 * 100vw / 430), 13px); color: #9B9B9B; font-weight: 400; white-space: nowrap; line-height: 1.5; }
    .bakery-tags { display: flex; gap: 8px; flex-wrap: wrap; }
    .bakery-tag { background: #F2F2F2; border-radius: 8px; padding: 2px 8px; font-weight: 600; font-size: clamp(calc(14px * 0.8), calc(14 * 100vw / 430), 14px); color: #9B9B9B; text-align: center; white-space: nowrap; flex-shrink: 0; line-height: 1.5; }
    .bakery-top { display: flex; flex-direction: column; gap: 18px; }
    .bakery-desc { font-weight: 500; font-size: clamp(calc(16px * 0.8), calc(16 * 100vw / 430), 16px); color: #000; letter-spacing: -0.32px; line-height: 1.5; margin: 0; }
    .bakery-photo-circle { position: absolute; right: 32px; top: 177px; width: 152px; height: 152px; max-width: 35vw; max-height: 35vw; border-radius: 50%; overflow: hidden; z-index: 2; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .bakery-photo-circle img { width: 100%; height: 100%; object-fit: cover; }
    .other-menu-btn { display: inline-flex; align-items: center; gap: 2px; border: 1px solid #8B8B8B; border-radius: 8px; padding: 1px 8px; font-size: clamp(calc(15px * 0.8), calc(15 * 100vw / 430), 15px); color: #8B8B8B; text-decoration: none; width: max-content; }`;

const oldCssRegex = /\/\* 빵집 정보 \(section05\) \*\/[\s\S]*?(?=\/\* 앱 정보 카드|\.info-cards-row)/;
text = text.replace(oldCssRegex, newCss + '\n\n    /* 앱 정보 카드');

// Replace HTML
const newHtml = `    <!-- Bakery Info (section05) -->
    <div class="bakery-section">
      <div class="bakery-bg">
        <img src="images/section05-background.svg" alt="" aria-hidden="true" />
      </div>
      <div class="bakery-contents">
        <div class="bakery-top">
          <div class="bakery-header-row">
            <h2 class="bakery-name">푹신 베이커리</h2>
            <div class="bakery-badge-wrap">
              <span class="bakery-badge">도보 4분</span>
              <span class="bakery-dist">(300M)</span>
            </div>
          </div>
          <div class="bakery-tags">
            <span class="bakery-tag">#요즘핫플</span>
            <span class="bakery-tag">#정성가득</span>
            <span class="bakery-tag">#크루아상맛집</span>
            <span class="bakery-tag">#겉바속촉</span>
          </div>
        </div>
        <p class="bakery-desc">
          푹신 베이커리는 바삭하고 결이 살아있는<br>
          크로아상을 대표 메뉴로,<br>
          부드럽고 달콤한 빵을 즐길 수 있는<br>
          따뜻한 베이커리입니다.
        </p>
        <a href="#" class="other-menu-btn">
          같은 가게 다른 메뉴 추천보기
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="bakery-photo-circle">
        <img src="images/bakery-photo.png" alt="푹신 베이커리" />
      </div>
    </div>`;

const oldHtmlRegex = /<!-- Bakery Info \(section05\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- Info Cards -->/;
text = text.replace(oldHtmlRegex, newHtml + '\n\n    <!-- Info Cards -->');

fs.writeFileSync('detail.html', text, 'utf8');
console.log('Fixed detail.html section05');
