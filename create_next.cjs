const fs = require('fs');

let homeHtml = fs.readFileSync('home.html', 'utf8');

// Update home.html NEXT button to link to home-next.html
homeHtml = homeHtml.replace('<a href="home.html" class="btn-base btn-next">NEXT</a>', '<a href="home-next.html" class="btn-base btn-next">NEXT</a>');
fs.writeFileSync('home.html', homeHtml, 'utf8');

// Create home-next.html
let nextHtml = homeHtml;

// Modify content
nextHtml = nextHtml.replace('바삭한 한입,', '쫄깃한 빵결,');
nextHtml = nextHtml.replace('main-croissant.png', 'bread-salt.png');
nextHtml = nextHtml.replace('<h2 class="product-name">크루아상</h2>', '<h2 class="product-name">소금빵</h2>');
nextHtml = nextHtml.replace('30분', '10분');
nextHtml = nextHtml.replace('#바삭70%', '#쫄깃70%');
nextHtml = nextHtml.replace('#크런치', '#짭짤고소');
nextHtml = nextHtml.replace('#겉바속촉', '#버터동굴');
nextHtml = nextHtml.replace('크런치한 겉바속촉!<br />\n            폭신 베이커리의 시그니처 메뉴', '바닥은 바삭, 속은 쫄깃!<br />\n            르뺑 성수의 인기 넘버원 메뉴');
// For robustness, replacing by text
nextHtml = nextHtml.replace(/크런치한 겉바속촉!<br \/>\s*폭신 베이커리의 시그니처 메뉴/g, '바닥은 바삭, 속은 쫄깃!<br />\n            르뺑 성수의 인기 넘버원 메뉴');

nextHtml = nextHtml.replace('5,600원', '3,500원');
nextHtml = nextHtml.replace('4.3', '4.6');
nextHtml = nextHtml.replace('<a href="home-next.html" class="btn-base btn-next">NEXT</a>', '<a href="home.html" class="btn-base btn-next">NEXT</a>'); // Link back to home

fs.writeFileSync('home-next.html', nextHtml, 'utf8');
console.log('Created home-next.html');
