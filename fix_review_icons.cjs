const fs = require('fs');
let h = fs.readFileSync('review.html', 'utf-8');
// Replace .mi star classes with .min-icon star classes
h = h.replaceAll('class="mi star yellow"', 'class="min-icon star yellow"');
h = h.replaceAll('class="mi star gray"', 'class="min-icon star gray"');
h = h.replaceAll('class="mi btn-more-icon"', 'class="min-icon btn-more-icon"');
fs.writeFileSync('review.html', h, 'utf-8');
console.log('Done - replaced all mi -> min-icon');
