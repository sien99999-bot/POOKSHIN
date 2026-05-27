const fs = require('fs');

let html = fs.readFileSync('onboarding.html', 'utf-8');

// Replace width: 430px and height: 932px with 100% / 100dvh
html = html.replace(/width:\s*430px/g, 'width: 100%; max-width: 480px');
html = html.replace(/height:\s*932px/g, 'height: 100dvh');

// Remove the JS scale logic entirely
html = html.replace(/<script>[\s\S]*?<\/script>/g, (match) => {
    if (match.includes('resizeApp')) {
        return match.replace(/window\.addEventListener\('resize', resizeApp\);/g, '')
                    .replace(/resizeApp\(\);/g, '')
                    .replace(/function resizeApp\(\) \{[\s\S]*?\}/g, '');
    }
    return match;
});

// Convert inline px values to clamp(vw) EXCEPT for borders
html = html.replace(/([a-z-]+)\s*:\s*(-?\d+(?:\.\d+)?)px/g, (match, prop, val) => {
    const num = parseFloat(val);
    if (Math.abs(num) <= 2 || prop.includes('border')) return match;
    const vw = (num / 430 * 100).toFixed(3) + 'vw';
    const min = (num * 0.8).toFixed(1) + 'px';
    const max = num + 'px';
    if (num < 0) {
        return `${prop}: clamp(${max}, ${vw}, ${min})`;
    }
    return `${prop}: clamp(${min}, ${vw}, ${max})`;
});

// Additionally, for elements anchored to the bottom using `bottom:`, we want their size and horizontal positioning to be vw,
// but their vertical positioning `bottom` to be responsive to viewport height?
// Since `bottom` is already relative to the bottom of the container, scaling it by VW might look weird if the phone is very tall.
// But scaling by VW preserves aspect ratio positioning relative to width.
// Actually, using clamp for EVERYTHING preserves the layout ratio perfectly up to 430px!

fs.writeFileSync('onboarding.html', html, 'utf-8');
console.log('Converted onboarding.html to pure responsive CSS!');
