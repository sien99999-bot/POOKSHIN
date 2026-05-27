const fs = require('fs');
let html = fs.readFileSync('onboarding.html', 'utf-8');

// mascot-happy (step 2) top:433px -> bottom:179px
html = html.replace(/top:433px/g, 'bottom:179px; top:auto');
// mascot-thinking (step 4) top: 403px -> bottom: 209px
html = html.replace(/top:\s*403px/g, 'bottom:209px; top:auto');
// mascot-excited (step 5) top: 411px -> bottom: 192px
html = html.replace(/top:\s*411px/g, 'bottom:192px; top:auto');

// buttons top:778px -> bottom:100px
html = html.replace(/top:778px/g, 'bottom:100px; top:auto');

// bread bottom image (step 1) top:640px -> bottom:3px
html = html.replace(/top:640px/g, 'bottom:3px; top:auto');

// login buttons (step 6)
html = html.replace(/top:603px/g, 'bottom:269px; top:auto');
html = html.replace(/top:683px/g, 'bottom:189px; top:auto');
html = html.replace(/top:763px/g, 'bottom:109px; top:auto');

fs.writeFileSync('onboarding.html', html, 'utf-8');
console.log('Successfully updated anchors!');
