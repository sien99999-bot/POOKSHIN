const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/href="\/assets\//g, 'href="assets/');
  content = content.replace(/src="\/assets\//g, 'src="assets/');
  content = content.replace(/url\('\/assets\//g, "url('assets/");
  fs.writeFileSync(file, content);
}
console.log('Fixed asset paths in all HTML files.');
