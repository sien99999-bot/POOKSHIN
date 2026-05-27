const fs = require('fs');

let html = fs.readFileSync('onboarding.html', 'utf-8');

// 1. Ensure viewport is device-width
html = html.replace(/<meta name="viewport" content="width=430[^>]+>/, '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />');

// 2. Remove JS scale logic completely (if any exists)
html = html.replace(/<script>[\s\S]*?<\/script>/g, (match) => {
    if (match.includes('resizeApp')) {
        return match.replace(/window\.addEventListener\('resize', resizeApp\);/g, '')
                    .replace(/resizeApp\(\);/g, '')
                    .replace(/function resizeApp\(\) \{[\s\S]*?\}/g, '');
    }
    return match;
});

// 3. Update #app to be 100% width and 100dvh
html = html.replace(/width:\s*430px;/g, 'width: 100%; max-width: 480px;');

// 4. Convert inline px values to clamp(vw) EXCEPT for borders and 0
html = html.replace(/([a-z-]+)\s*:\s*(-?\d+(?:\.\d+)?)px/g, (match, prop, val) => {
    const num = parseFloat(val);
    if (Math.abs(num) <= 2 || prop.includes('border') || prop.includes('box-shadow') || num === 0) return match;
    const vw = (num / 430 * 100).toFixed(3) + 'vw';
    const min = (num * 0.8).toFixed(1) + 'px';
    const max = num + 'px';
    if (num < 0) {
        return `${prop}: clamp(${max}, ${vw}, ${min})`;
    }
    return `${prop}: clamp(${min}, ${vw}, ${max})`;
});

// Fix any weird issues with min/max clamp where max < min
// Not necessary since our script handles negative correctly.

fs.writeFileSync('onboarding.html', html, 'utf-8');
console.log('Converted current onboarding.html to pure responsive CSS!');
