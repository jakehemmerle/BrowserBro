const IPFS = require('ipfs')
const ipns = require('ipns')
const express = require('express')
const bodyParser = require('body-parser')
const { startNode, getPrivateKey } = require('./util')

// SETUP
const app = express()
const port = 3000

const IPFSNode = new IPFS()
let nodeRunning = startNode(IPFSNode)

app.use(bodyParser.json()) // to support JSON-encoded bodies

// ENDPOINTS
app.get('/ping', (req, res) => res.send('Hello World!'))

app.post('/uploadFile', async (req, res) => {
  if (nodeRunning) {
    try {
      let uploadData = req.body.upload

      const filesAdded = await IPFSNode.add({
        path: 'hello.txt',
        content: Buffer.from(uploadData)
      })

      console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

      const fileBuffer = await IPFSNode.cat(filesAdded[0].hash)

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

app.post('/uploadPrivateKey', async (req, res) => {
  let config = ''
  try {
    config = req.body.config
  } catch (e) {
    console.warn('No \'config\' key in res.body')
  }

  const privateKey = getPrivateKey(config)
  IPFSNode.key.import('key', privateKey, 'password', (err, key) => {

  })
})

app.post('/syncBrowsingData', (req, res) => {

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function bufferFromString (str) {
  const strUtf8 = unescape(encodeURIComponent(str))
  const ab = new Uint8Array(strUtf8.length)
  for (let i = 0; i < strUtf8.length; i++) {
    ab[i] = strUtf8.charCodeAt(i)
  }
  return ab
}
