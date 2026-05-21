const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://pookshin-l59in2u2f-sien99999-7877s-projects.vercel.app';
const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

function download(urlPath, destPath) {
  return new Promise((resolve) => {
    https.get(baseUrl + urlPath, res => {
      if(res.statusCode !== 200) {
        console.log('Failed:', urlPath, res.statusCode);
        return resolve();
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        console.log('Downloaded:', urlPath);
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
  const assetSet = new Set();
  
  for(let file of files) {
    const content = fs.readFileSync(file, 'utf8');
    // Find all /assets/... references
    const regex = /(?:href|src)=["'](\/assets\/[^"']+)["']/g;
    let match;
    while((match = regex.exec(content)) !== null) {
      assetSet.add(match[1]);
    }
  }

  for(let asset of assetSet) {
    const dest = path.join(__dirname, asset.substring(1)); // remove leading slash
    await download(asset, dest);
  }
}
run();
