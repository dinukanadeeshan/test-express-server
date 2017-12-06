const express = require('express')
const app = express()

app.get('/api/v1/', (req, res) => res.send('Hello World!'))
app.post('/api/v2/', (req, res) => {
  console.log(req);
  res.send('Recieved')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
