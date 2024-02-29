const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let customHeader = req.get('custom-header');
  let xForwardedFor = req.get('x-forwarded-for');
  let viewerIp = req.get('viewer-ip');
  res.send(`
    <p>Custom header:  ${customHeader}</p>
    <p>X-Forwarded-For:  ${xForwardedFor}</p>
    <p>Cloudfront Viewer Ip:  ${viewerIp}</p>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})