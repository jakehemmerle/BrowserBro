const IPFS = require('ipfs')

const node = new IPFS()

node.on('ready', async () => {
  nodeRunning = true
  console.log('IPFS Node Running')
})

let nodeRunning = false

const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/uploadFile', async (req, res) => {
  if (nodeRunning) {
    try {
      let uploadData = req.body.upload

      const filesAdded = await node.add({
        path: 'hello.txt',
        content: Buffer.from(uploadData)
      })

      console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

      const fileBuffer = await node.cat(filesAdded[0].hash)

      console.log('Added file contents:', fileBuffer.toString())

      //   const upload = await node.add({
      //     path: 'hello.txt',
      //     content: Buffer.from(uploadData)
      //   })

      //   //   let uploadBuffer = bufferFromString(uploadData)
      //   //   let upload = await node.addListener(uploadBuffer)
      //   console.log(upload)
      res.send({ location: filesAdded[0].hash })
    } catch (e) {
      console.log(e)
    }
  } else {
    res.send({ error: 'bad' })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function bufferFromString(str) {
  var strUtf8 = unescape(encodeURIComponent(str))
  var ab = new Uint8Array(strUtf8.length)
  for (var i = 0; i < strUtf8.length; i++) {
    ab[i] = strUtf8.charCodeAt(i)
  }
  return ab
}
