const fs = require('fs');

let content = fs.readFileSync('setting.html', 'utf-8');

// 1. Viewport
content = content.replace(
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />',
  '<meta name="viewport" content="width=430, user-scalable=no" />'
);

// 2. CSS adjustments
// Header
content = content.replace(
  'padding-top: calc(env(safe-area-inset-top) + 10px); padding-bottom: 10px; padding-left: 16px; padding-right: 16px; position: relative; display: flex; align-items: flex-end; justify-content: space-between; box-sizing: border-box;',
  'margin-top: 27px; height: 24px; padding-left: 16px; padding-right: 16px; position: relative; display: flex; align-items: center; justify-content: space-between; box-sizing: border-box;'
);
// .btn-back
content = content.replace(
  'justify-content: center;\n        text-decoration: none;',
  'justify-content: flex-start;\n        text-decoration: none;'
);
// .header-title
content = content.replace(
  'bottom: 24px;\n        transform: translateX(-50%);\n        font-size: clamp(calc(16px * 0.8), calc(16 * 100vw / 430), 16px);',
  'top: 50%;\n        transform: translate(-50%, -50%);\n        font-size: 16px;'
);
// .header-bell
content = content.replace(
  '.header-bell {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }',
  '.header-bell {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n        width: 32px;\n        height: 32px;\n      }'
);

// .user-summary-card
content = content.replace(
  'margin: 10px 16px 0;',
  'margin: 28px 16px 0;\n        box-sizing: border-box;'
);
content = content.replace(
  'font-size: clamp(calc(48px * 0.8), calc(48 * 100vw / 430), 48px);',
  'font-size: 48px;'
);
content = content.replace(
  'font-size: clamp(calc(20px * 0.8), calc(20 * 100vw / 430), 20px);',
  'font-size: 20px;'
);
content = content.replace(
  'font-size: clamp(calc(16px * 0.8), calc(16 * 100vw / 430), 16px);',
  'font-size: 16px;'
);
content = content.replace(
  'top: max(10px, env(safe-area-inset-top));',
  'top: 12px;'
);
content = content.replace(
  'font-size: clamp(calc(13px * 0.8), calc(13 * 100vw / 430), 13px);',
  'font-size: 13px;'
);
content = content.replace(
  'font-size: clamp(calc(15.36px * 0.8), calc(15.36 * 100vw / 430), 15.36px);',
  'font-size: 15.36px;'
);

// .setting-list
content = content.replace(
  'padding: 40px 0 100px;',
  'padding: 41px 0 130px;'
);
// .setting-item font-size (there are two)
content = content.replaceAll(
  'font-size: clamp(calc(16px * 0.8), calc(16 * 100vw / 430), 16px);',
  'font-size: 16px;'
);
// .divider
content = content.replace(
  'margin: 24px auto;',
  'margin: 18px auto 26px;'
);
// .footer-actions
content = content.replace(
  'margin-top: 80px;',
  'margin-top: 36px;'
);

// HTML inline styles
content = content.replace(
  'font-size: clamp(calc(24px * 0.8), calc(24 * 100vw / 430), 24px);',
  'font-size: 24px;'
);
content = content.replace(
  'font-size: clamp(calc(15.36px * 0.8), calc(15.36 * 100vw / 430), 15.36px);',
  'font-size: 15.36px;'
);

fs.writeFileSync('setting.html', content, 'utf-8');
console.log('setting.html updated successfully');
