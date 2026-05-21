const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const EXCLUDE = ['deployment_source', 'node_modules', 'dist', '.git'];

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (EXCLUDE.some(e => full.includes(e))) continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) files = files.concat(walk(full));
    else if (f.endsWith('.html')) files.push(full);
  }
  return files;
}

const htmlFiles = walk(ROOT);

let updated = 0;
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Fix viewport meta — replace any width=430 variant
  const newViewport = 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no';
  if (content.includes('width=430')) {
    content = content.replace(
      /content="width=430[^"]*"/g,
      `content="${newViewport}"`
    );
    changed = true;
  }

  // Fix status bar style — change "default" to "black-translucent"
  if (content.includes('apple-mobile-web-app-status-bar-style') &&
      content.includes('content="default"')) {
    content = content.replace(
      /name="apple-mobile-web-app-status-bar-style"\s+content="default"/g,
      'name="apple-mobile-web-app-status-bar-style" content="black-translucent"'
    );
    changed = true;
  }
  // also the reversed attribute order
  if (content.includes('apple-mobile-web-app-status-bar-style') &&
      content.includes('"default"')) {
    content = content.replace(
      /content="default"\s+name="apple-mobile-web-app-status-bar-style"/g,
      'name="apple-mobile-web-app-status-bar-style" content="black-translucent"'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', path.relative(ROOT, file));
    updated++;
  }
}
console.log(`\nDone. Updated ${updated} files.`);
