const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let text = fs.readFileSync(file, 'utf8');
  let original = text;
  text = text.replace('<meta name="viewport" content="width=430, user-scalable=no" />', '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />');
  
  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    console.log('Fixed viewport in ' + file);
  }
});
