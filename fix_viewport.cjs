const fs = require('fs');
const path = require('path');
const dir = '.';
const files = fs.readdirSync(dir);
files.forEach(file => {
    if (file.endsWith('.html') && file !== 'onboarding.html') {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        let modified = false;

        // Change width=430 to width=device-width, initial-scale=1, maximum-scale=1
        if (content.includes('width=430')) {
            content = content.replace(/content="width=430(?:,\s*user-scalable=no)?"/g, 'content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(path.join(dir, file), content, 'utf8');
            console.log('Fixed viewport:', file);
        }
    }
});
