const fs = require('fs');

const depHtml = fs.readFileSync('deployment_source/home.html', 'utf8');

let srcHtml = depHtml
  .replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">/g, '')
  .replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">/g, ''); 

srcHtml = srcHtml.replace('</head>', '  <link rel="stylesheet" href="home.css" />\n    <link rel="stylesheet" href="navbar.css" />\n  </head>');

srcHtml = srcHtml.replace(/<img src="\/assets\/main-croissant-[^"]+\.png" /g, '<img src="images/main-croissant.png" ');
srcHtml = srcHtml.replace(/<img src="data:image\/svg\+xml[^"]+"/g, '<img src="images/bread-icon.svg"');
srcHtml = srcHtml.replace(/<img src="data:image\/svg\+xml[^"]+"/g, '<img src="images/arrow-4-right.svg"'); // For arrow-4-right.svg and others, this is a rough replacement

srcHtml = srcHtml.replace(/<link rel="apple-touch-icon" href="\/assets\/icon-[^"]+\.png" \/>/, '<link rel="apple-touch-icon" href="icon.png" />');

fs.writeFileSync('home.html', srcHtml);
console.log('Restored home.html');
