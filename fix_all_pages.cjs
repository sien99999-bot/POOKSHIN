const fs = require('fs');
const path = require('path');

const dir = 'd:\\명시은\\POOKSHIN';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Fix viewport
  content = content.replace(
    /<meta name="viewport" content="width=430, user-scalable=no" \/>/g,
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />'
  );
  
  // 3. Fix 932px heights
  if (file !== 'onboarding.html') {
    content = content.replace(
      /height:\s*932px;/g,
      'min-height: 100vh; height: 100%;'
    );
    content = content.replace(
      /min-height:\s*932px;/g,
      'min-height: 100vh;'
    );
    content = content.replace(
      /max-height:\s*932px;/g,
      'max-height: 100vh;'
    );
  }

  // 4. Responsive Font Sizes (scale down to 80% on smaller screens)
  // Skip onboarding.html and splash.html as they use canvas scaling
  if (file !== 'onboarding.html' && file !== 'splash.html') {
    content = content.replace(
      /font-size:\s*(\d+(?:\.\d+)?)px/g,
      'font-size: clamp(calc($1px * 0.8), calc($1 * 100vw / 430), $1px)'
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});
