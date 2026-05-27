const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach(file => {
    if ((file.endsWith('.html') || file.endsWith('.css')) && file !== 'onboarding.html' && file !== 'splash.html' && file !== 'fix_width.js') {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        let modified = false;

        // Replace exact 'width: 430px;' with 'max-width: 480px;'
        if (content.includes('width: 430px;')) {
            content = content.replace(/max-width: 430px;/g, 'max-width: 480px;');
            modified = true;
        }
        
        // Sometimes it's without semicolon or has max-width
        if (content.includes('width: 430px')) {
            content = content.replace(/max-width: 430px(?!\s*;)/g, 'max-width: 480px');
            modified = true;
        }

        // Also fix any hardcoded left/right absolute coordinates to be relative if necessary?
        // Let's stick to the user's request: "ê°€ë¡œë? 100%ë¡??¡ê³ "
        
        if (modified) {
            fs.writeFileSync(path.join(dir, file), content, 'utf8');
            console.log('Fixed:', file);
        }
    }
});
