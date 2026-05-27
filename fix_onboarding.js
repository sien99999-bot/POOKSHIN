const fs = require('fs');

let content = fs.readFileSync('onboarding.html', 'utf8');

const jsTarget = `    // 비율을 왜곡하지 않고 축소 후 화면 정중앙에 배치
    app.style.transform = \`scale(\${scale})\`;
    
    // 축소된 화면의 실제 높이만큼 래퍼를 조절하여 빈 공간과 스크롤 완전 제거
    wrapper.style.height = \`\${932 * scale}px\`;
    
    // 화면 높이가 더 남을 경우, 세로 중앙 정렬 효과를 위해 여백 추가
    if (window.innerHeight > 932 * scale) {
        wrapper.style.marginTop = \`\${(window.innerHeight - 932 * scale) / 2}px\`;
    } else {
        wrapper.style.marginTop = '0px';
    }`;

const jsReplacement = `    // 반응형 레이아웃을 위해 app의 높이를 기기 화면 높이로 확장
    app.style.transform = \`scale(\${scale})\`;
    app.style.height = \`\${window.innerHeight / scale}px\`;
    
    wrapper.style.height = \`\${window.innerHeight}px\`;
    wrapper.style.marginTop = '0px';`;

content = content.replace(jsTarget, jsReplacement);
content = content.replace('left:146px; top:640px;', 'left:146px; bottom:3px; top:auto;');
content = content.replace('class="mascot-container mascot-happy" style="top:366px;"', 'class="mascot-container mascot-happy" style="bottom:246px; top:auto;"');
content = content.replace(/top:778px;/g, 'bottom:100px; top:auto;');
content = content.replace(/top:389px;/g, 'bottom:223px; top:auto;');
content = content.replace(/top:397px;/g, 'bottom:206px; top:auto;');

fs.writeFileSync('onboarding.html', content);
console.log('Updated onboarding.html');
