const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let originalHtml = html;

  // 1. Update Viewport
  html = html.replace(
    /content="width=device-width,\s*initial-scale=1\.?0?,\s*maximum-scale=1\.?0?,\s*user-scalable=no"/g,
    'content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"'
  );

  // 2. Fix static paddings in topbars (CSS definitions)
  // Usually the first padding value is top. e.g., padding: 55px 16px 16px;
  html = html.replace(/padding:\s*(\d+)px\s+(\d+)px\s+(\d+)px;/g, (match, top, right, bottom) => {
    if (parseInt(top) >= 40) {
      return `padding-top: max(${top}px, env(safe-area-inset-top)); padding-bottom: ${bottom}px; padding-left: ${right}px; padding-right: ${right}px;`;
    }
    return match;
  });

  html = html.replace(/padding:\s*(\d+)px\s+(\d+)px\s+(\d+)px\s+(\d+)px;/g, (match, top, right, bottom, left) => {
    if (parseInt(top) >= 40) {
      return `padding-top: max(${top}px, env(safe-area-inset-top)); padding-bottom: ${bottom}px; padding-left: ${left}px; padding-right: ${right}px;`;
    }
    return match;
  });

  // Specifically target top fixed elements like back buttons or topbars that use top: px
  html = html.replace(/top:\s*(\d+)px;/g, (match, top) => {
    if (parseInt(top) >= 10 && parseInt(top) <= 50) {
      // It's likely a back button or floating header
      return `top: max(${top}px, env(safe-area-inset-top));`;
    }
    return match;
  });

  // For setting.html specific header
  html = html.replace(/padding-top:\s*max\(44px,\s*env\(safe-area-inset-top\)\);\s*padding-bottom:\s*20px;\s*padding-left:\s*16px;\s*padding-right:\s*16px;\s*position:\s*relative;\s*display:\s*flex;\s*align-items:\s*flex-end;\s*justify-content:\s*space-between;\s*box-sizing:\s*border-box;/g, 
    'padding-top: max(44px, env(safe-area-inset-top)); padding-bottom: 20px; padding-left: 16px; padding-right: 16px; position: relative; display: flex; align-items: flex-end; justify-content: space-between; box-sizing: border-box;'); // idempotent

  if (html !== originalHtml) {
    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated safe area in: ${file}`);
  }
});

// Also check css files
const cssFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.css'));
cssFiles.forEach(file => {
  let css = fs.readFileSync(file, 'utf8');
  let originalCss = css;

  css = css.replace(/padding:\s*(\d+)px\s+(\d+)px\s+(\d+)px;/g, (match, top, right, bottom) => {
    if (parseInt(top) >= 40) {
      return `padding-top: max(${top}px, env(safe-area-inset-top)); padding-bottom: ${bottom}px; padding-left: ${right}px; padding-right: ${right}px;`;
    }
    return match;
  });

  css = css.replace(/top:\s*(\d+)px;/g, (match, top) => {
    if (parseInt(top) >= 10 && parseInt(top) <= 50) {
      return `top: max(${top}px, env(safe-area-inset-top));`;
    }
    return match;
  });

  if (css !== originalCss) {
    fs.writeFileSync(file, css, 'utf8');
    console.log(`Updated safe area in: ${file}`);
  }
});
