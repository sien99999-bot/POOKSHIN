const fs = require('fs');
const path = require('path');
const assetsDir = path.join(__dirname, 'assets');
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));

for (let file of files) {
  let content = fs.readFileSync(path.join(assetsDir, file), 'utf8');
  content = content.replace(/url\('\/assets\//g, "url('");
  content = content.replace(/url\(\/assets\//g, "url(");
  content = content.replace(/url\("\/assets\//g, 'url("');
  fs.writeFileSync(path.join(assetsDir, file), content);
}
console.log('Fixed CSS asset paths.');
