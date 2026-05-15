const fs = require('fs');
const http = require('http');
const path = require('path');

const urls = {
  imgVector5: "http://localhost:3845/assets/a89e86853d07986abd7fcb6aed72de050bdfe9e3.svg",
  imgRectangle3468591: "http://localhost:3845/assets/e166f169fc84d4eebbabfccc99fbf5440153afb5.png",
  imgGroup: "http://localhost:3845/assets/a3cd164ca56151128d56f31d083fba5911fb9d3a.svg",
  imgGroup1: "http://localhost:3845/assets/8f78efce66a9dd87b272c54a7ed396ede8ba35d1.svg",
  imgGroup2: "http://localhost:3845/assets/54e46e9bc360a1019486913a7352c04ab45e5ab3.svg",
  imgUnion: "http://localhost:3845/assets/0fd2344ce3fbb18c3fba3bf04e39cfc2b7802b16.svg",
  imgUnion1: "http://localhost:3845/assets/9e4668fd6718234bd08d768dc39e6ad976a08d9b.svg",
  imgGroup3: "http://localhost:3845/assets/a386e8ba9961bfb6798bbbcb31b023b7cae8d6fe.svg",
  imgUnion2: "http://localhost:3845/assets/6e657d64582c9b287316f26d2d9f91671c6a4dcf.svg",
  imgEllipse374: "http://localhost:3845/assets/95bdd31e296283b1d898c21c116c5e9d761fb5bf.svg",
  imgUnion3: "http://localhost:3845/assets/90f35a9e93d9585e05349478af38a66f84d1865d.svg",
  imgUnion4: "http://localhost:3845/assets/e5a461f5b557cf8f863d92d29e8b5428f2afe3f8.svg",
  imgGroup4: "http://localhost:3845/assets/04e4cd7452bf29a4f2def8db1f7d10982a61b376.svg",
  imgGroup5: "http://localhost:3845/assets/faf8cbb66f680ba6a23ededb3b62cbb81ae8dedf.svg",
  imgUnion5: "http://localhost:3845/assets/9b17066104bdc491bad2e41eb5aec462e043a3ca.svg",
  imgEllipse373: "http://localhost:3845/assets/6e8e99b3858af006f181ee9f064cd7ebcae8f05a.svg",
  imgRectangle3468590: "http://localhost:3845/assets/bf2b36b5120300f8440daa22af736d132f5f426c.svg",
  imgRectangle3468589: "http://localhost:3845/assets/16be75bca1bb95a6c9ce30a4a6cb8fcea7b202be.svg",
  imgLevels: "http://localhost:3845/assets/7ec69b5aea8587c0df5357b1267337482d71628a.svg",
  imgVector6: "http://localhost:3845/assets/3bab185379c4a2900d9a12b76ebeeebe2ad3f58c.svg",
  imgVector: "http://localhost:3845/assets/6aafd891a5ae33626fc51464a26c308059b41c74.svg",
  imgGroup6: "http://localhost:3845/assets/7e76b857734bf9ae06973e765da71cfd3aff25a4.svg"
};

const dir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

Object.entries(urls).forEach(([name, url]) => {
  const ext = url.split('.').pop();
  const dest = path.join(dir, `${name}.${ext}`);
  const file = fs.createWriteStream(dest);
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) {
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    console.error(err.message);
  });
});
console.log('Downloading complete');
