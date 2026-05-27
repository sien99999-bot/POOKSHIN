const fs = require('fs');

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf-8');

    // Restore #app margin
    content = content.replace("margin: -44px auto 0;", "margin: 0 auto;");

    // Replace top: XXXpx
    content = content.replace(/top:\s*(-?\d+)px/g, (match, p1) => {
        const val = parseInt(p1, 10);
        // Do not shift elements that are at the bottom (buttons, etc.)
        if (val >= 600) {
            return match;
        }
        const newVal = val - 44;
        return `top:${newVal}px`;
    });

    // Handle intro-text-box top:calc(50% - 190px);
    content = content.replace("top:calc(50% - 190px);", "top:calc(50% - 234px);");

    fs.writeFileSync(filename, content, 'utf-8');
}

processFile("onboarding.html");
console.log("Done");
