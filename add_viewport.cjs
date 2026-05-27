const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('viewport-fit=cover')) {
    content = content.replace(/content="(width=[^"]+)"/, 'content="$1, viewport-fit=cover"');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
