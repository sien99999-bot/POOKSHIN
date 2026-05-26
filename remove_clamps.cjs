const fs = require('fs');
let html = fs.readFileSync('review.html', 'utf-8');

// Remove clamps globally
html = html.replace(/clamp\([^,]+,\s*[^,]+,\s*([^)]+)\)/g, '$1');

// Fix score-text to 24px (Figma spec)
html = html.replace(/font-size:\s*40px;/g, 'font-size: 24px;');

// Fix taste-dot size and layout
html = html.replace('.taste-dots {\n      flex: 1; display: flex; justify-content: space-between; align-items: center; gap: 4px;\n    }', '.taste-dots {\n      flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 4.5px;\n    }');
html = html.replace('.taste-dot {\n      flex: 1; height: 5px;', '.taste-dot {\n      width: 27px; height: 5.25px;');
html = html.replace('.taste-dot.active {\n      flex: 2; background: #FA534C;\n    }', '.taste-dot.active {\n      background: #FA534C;\n    }');

// Fix summary-score layout (Make it side by side according to Figma)
// In Figma, summary-score and summary-bars are side-by-side. 
// "좌: 4.3 (24px Bold, #FB7459) / 5 (16px SemiBold, #9B9B9B)" and stars below it.
// My code: display: flex; flex-direction: column; align-items: center; which is correct, but let's align left if needed.
html = html.replace('display: flex; flex-direction: column; align-items: center; gap: 8px;', 'display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 8px;');

fs.writeFileSync('review.html', html, 'utf-8');
console.log('Fixed review.html with exact px');
