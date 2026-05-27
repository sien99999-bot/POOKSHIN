const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('viewport-fit=cover')) {
    content = content.replace(/,\s*viewport-fit=cover/g, '');
    content = content.replace(/viewport-fit=cover,\s*/g, '');
    content = content.replace(/viewport-fit=cover/g, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
