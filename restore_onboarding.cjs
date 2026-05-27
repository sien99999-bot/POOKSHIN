const fs = require('fs');

let html = fs.readFileSync('_recovery_backup_20260520_195750/onboarding.html', 'utf-8');

// 1. Viewport
html = html.replace(/<meta name="viewport"[^>]+>/, '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />');

// 2. Wrap app in viewport-wrapper
html = html.replace(/<div id="app">/, '<div id="viewport-wrapper">\n<div id="app">');
html = html.replace(/<\/div><!-- \/#app -->/, '</div><!-- /#app -->\n</div><!-- /#viewport-wrapper -->');

// 3. CSS for body, wrapper, and app
html = html.replace(/body\s*\{[\s\S]*?\}/, `body {
      margin: 0;
      background-color: #F8F4EC;
      font-family: 'Pretendard Variable', sans-serif;
      color: #333;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    #viewport-wrapper {
      width: 100%;
      min-height: 100%;
      background-color: #F8F4EC;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }`);

html = html.replace(/#app\s*\{[\s\S]*?\}/, `#app {
      width: 430px;
      height: 932px;
      flex-shrink: 0;
      position: relative;
      margin: 0;
      transform-origin: top center;
      overflow: visible;
      background: #F8F4EC;
      box-shadow: none;
    }`);

// 4. Update resizeApp in JS
html = html.replace(/<script>/, `<script>
  function resizeApp() {
    const app = document.getElementById('app');
    const wrapper = document.getElementById('viewport-wrapper');
    if (!app || !wrapper) return;
    
    const scaleX = window.innerWidth / 430;
    const scaleY = window.innerHeight / 932;
    const scale = Math.min(scaleX, scaleY);
    
    app.style.transform = \`scale(\${scale})\`;
    app.style.height = \`\${window.innerHeight / scale}px\`;
    
    wrapper.style.height = \`\${window.innerHeight}px\`;
    wrapper.style.marginTop = '0px';
  }
  window.addEventListener('resize', resizeApp);
  resizeApp();
`);

// 5. Change top anchors to bottom anchors for all elements that need to stick to bottom!
// .mascot-happy top:433px -> bottom:179px (932 - 433 - 320 = 179)
html = html.replace(/top:433px/g, 'bottom:179px; top:auto');
html = html.replace(/top:441px/g, 'bottom:162px; top:auto'); // excited

// buttons top:801px -> bottom:77px (932 - 801 - 54 = 77)
html = html.replace(/top:801px/g, 'bottom:77px; top:auto');

// bread bottom image (step 1)
html = html.replace(/top:640px/g, 'bottom:3px; top:auto');

fs.writeFileSync('onboarding.html', html, 'utf-8');
console.log('Restored and patched onboarding.html');
