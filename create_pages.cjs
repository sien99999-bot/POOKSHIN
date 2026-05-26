const fs = require('fs');

// 1. my-reviews.html (Based on review.html)
let reviewHtml = fs.readFileSync('review.html', 'utf-8');
reviewHtml = reviewHtml.replace('<title>POOKSHIN - 리뷰</title>', '<title>POOKSHIN - 내 리뷰</title>');
reviewHtml = reviewHtml.replace('<span class="nav-title">리뷰</span>', '<span class="nav-title">내 리뷰</span>');
fs.writeFileSync('my-reviews.html', reviewHtml, 'utf-8');

// 2. saved-bread.html (A simple list of bread based on review.html structure)
let savedBreadHtml = fs.readFileSync('review.html', 'utf-8');
savedBreadHtml = savedBreadHtml.replace('<title>POOKSHIN - 리뷰</title>', '<title>POOKSHIN - 찜한 빵</title>');
savedBreadHtml = savedBreadHtml.replace('<span class="nav-title">리뷰</span>', '<span class="nav-title">찜한 빵</span>');
// Replace the summary box and sort links with empty since it's just a simple list for dummy
savedBreadHtml = savedBreadHtml.replace(/<div class="summary-box">[\s\S]*?<\/div>\s*<div class="sort-links">[\s\S]*?<\/div>/, '');
fs.writeFileSync('saved-bread.html', savedBreadHtml, 'utf-8');

// 3. saved-bakery.html (Based on map.html's bakery list, but as a full list)
let savedBakeryHtml = fs.readFileSync('map.html', 'utf-8');
savedBakeryHtml = savedBakeryHtml.replace('<title>POOKSHIN - Map</title>', '<title>POOKSHIN - 찜한 가게</title>');
savedBakeryHtml = savedBakeryHtml.replace(
  /<div class="map-header">[\s\S]*?<\/div>\s*<div class="map-container">[\s\S]*?<\/div>/, 
  '<div class="my-topbar" style="background:white; padding: 44px 16px 16px; display:flex; align-items:center; justify-content:space-between;"><a href="my.html" style="color:black;text-decoration:none;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18L9 12L15 6"/></svg></a><span style="font-weight:700; font-size:16px;">찜한 가게</span><span class="min-icon">&#xEF40;</span></div>'
);
savedBakeryHtml = savedBakeryHtml.replace('.bakery-list-container {', '.bakery-list-container { position: relative; top: 0; width: 100%; height: auto; padding-bottom: 120px; ');
fs.writeFileSync('saved-bakery.html', savedBakeryHtml, 'utf-8');

// Update my.html to link to these new pages
let myHtml = fs.readFileSync('my.html', 'utf-8');
myHtml = myHtml.replace(
  /<a href="map\.html" class="stat-item">[\s\S]*?<span class="stat-icon">&#xE09C;<\/span>[\s\S]*?<span class="stat-label">찜한 빵<\/span>[\s\S]*?<\/a>/, 
  '<a href="saved-bread.html" class="stat-item">\n          <span class="stat-icon">&#xE09C;</span>\n          <span class="stat-label">찜한 빵</span>\n        </a>'
);
myHtml = myHtml.replace(
  /<a href="map\.html" class="stat-item">[\s\S]*?<span class="stat-icon">&#xF020;<\/span>[\s\S]*?<span class="stat-label">찜한 가게<\/span>[\s\S]*?<\/a>/, 
  '<a href="saved-bakery.html" class="stat-item">\n          <span class="stat-icon">&#xF020;</span>\n          <span class="stat-label">찜한 가게</span>\n        </a>'
);
myHtml = myHtml.replace(
  /<a href="review\.html" class="stat-item">[\s\S]*?<span class="stat-icon">&#xF007;<\/span>[\s\S]*?<span class="stat-label">내 리뷰<\/span>[\s\S]*?<\/a>/, 
  '<a href="my-reviews.html" class="stat-item">\n          <span class="stat-icon">&#xF007;</span>\n          <span class="stat-label">내 리뷰</span>\n        </a>'
);
fs.writeFileSync('my.html', myHtml, 'utf-8');

console.log('Successfully created virtual pages');
