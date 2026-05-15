Invoke-WebRequest -Uri 'http://localhost:3845/assets/4b155a8f60095027eaa56ff86fe7da897c2dfc8b.svg' -OutFile 'images\icon-kakao.svg' -UseBasicParsing
Invoke-WebRequest -Uri 'http://localhost:3845/assets/ecc496f9ef1330385fcf811fcb197774d09017c7.svg' -OutFile 'images\icon-google.svg' -UseBasicParsing
Invoke-WebRequest -Uri 'http://localhost:3845/assets/8a748d7edcf9164cf5fa487618ac27e7595ccbcd.svg' -OutFile 'images\icon-apple.svg' -UseBasicParsing
Write-Host 'Done'
