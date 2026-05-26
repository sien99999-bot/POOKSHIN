const fs = require('fs');
let html = fs.readFileSync('review.html', 'utf-8');

// Fix image back button
html = html.replace('images/arrow-4-left.svg', 'images/arrow-4-right.svg" style="transform: rotate(180deg); width: 24px; height: 24px;');

// Make font sizes and spacings responsive based on 430px width
html = html.replace(/([a-z-]+)\s*:\s*(\d+(?:\.\d+)?)px/g, (match, prop, val) => {
    const num = parseFloat(val);
    // don't clamp tiny values or border widths
    if (num <= 2 || prop === 'border' || prop === 'border-width' || prop === 'border-bottom' || prop.includes('border-radius')) return match;
    
    // Formula: calc(val / 430 * 100vw)
    const vw = (num / 430 * 100).toFixed(3) + 'vw';
    
    // Use clamp to limit minimum (80% of original) and maximum (100% of original)
    const min = (num * 0.8).toFixed(1) + 'px';
    const max = num + 'px';
    return `${prop}: clamp(${min}, ${vw}, ${max})`;
});

// Center the review list properly
html = html.replace('.review-list {', '.review-list {\n      margin: 0 auto;\n      max-width: 430px;');

fs.writeFileSync('review.html', html, 'utf-8');
console.log('Fixed review.html!');
