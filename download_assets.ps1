$urls = @(
  @("http://localhost:3845/assets/1296f79b77295a3ff028f5271bc8cc5ae9f40f33.png", "images\bread-baguette.png"),
  @("http://localhost:3845/assets/a40f48bccd59b9c9e156459f4782337607c236de.png", "images\bread-wheat.png"),
  @("http://localhost:3845/assets/8022222e7754e52a5cc4cc040cb4cdfc5a5fea13.png", "images\mascot-happy.png"),
  @("http://localhost:3845/assets/7ec69b5aea8587c0df5357b1267337482d71628a.svg", "images\status-levels.svg"),
  @("http://localhost:3845/assets/89add341345582f6dadcaee67ccbd47bbcb47b20.svg", "images\dots-indicator-1.svg"),
  @("http://localhost:3845/assets/c95ce4d356c95777d0a7c150601c010a649f8f2c.png", "images\bread-food.png"),
  @("http://localhost:3845/assets/76593515b33ab18c15b4bcd5683a38b3c6e60a4a.png", "images\bread-bagel.png"),
  @("http://localhost:3845/assets/e27d77355ba4311144efe60d04b80afb4d03c3d1.png", "images\mascot-thinking.png"),
  @("http://localhost:3845/assets/150b0edd3035e8bcf3499eee4064affadf20b251.svg", "images\dots-indicator-2.svg"),
  @("http://localhost:3845/assets/80d44aa4e66a05eebd0aeeb70066ec8cdcd7cc73.png", "images\mascot-excited.png"),
  @("http://localhost:3845/assets/6280529c25ef7dbbb15664fb2313664b5da39e14.svg", "images\dots-indicator-3.svg")
)

foreach ($pair in $urls) {
  $url = $pair[0]
  $file = $pair[1]
  try {
    Invoke-WebRequest -Uri $url -OutFile $file -UseBasicParsing
    Write-Host "OK: $file"
  } catch {
    Write-Host "FAILED: $file - $_"
  }
}
Write-Host "All done."
