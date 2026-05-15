const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove Status Bar blocks
  content = content.replace(/\s*<!--.*?Status Bar.*?-->/g, '');
  content = content.replace(/\s*<div class="status-bar">[\s\S]*?<\/div>/g, '');
  
  // Remove Navbar / Home Indicator blocks
  content = content.replace(/\s*<!--.*?Home Indicator.*?-->/g, '');
  content = content.replace(/\s*<div class="navbar">\s*<div class="navbar-pill"><\/div>\s*<\/div>/g, '');
  content = content.replace(/\s*<div class="navbar">[\s\S]*?<\/div>\s*<\/div>/g, '');
  content = content.replace(/\s*<div class="bottom-safe-area"><\/div>/g, '');
  content = content.replace(/\s*<div class="system-indicator"><\/div>/g, '');
  
  fs.writeFileSync(file, content);
  console.log('Processed ' + file);
});
