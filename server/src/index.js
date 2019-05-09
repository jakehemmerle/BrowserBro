const IPFS = require('ipfs')
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')

// SETUP
const app = express()
app.use(bodyParser.json()) // to support JSON-encoded bodies
const port = 3000

let IPFSNode

const startNode = () => {
  const options = {
    config: {
      Addresses: {
        Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star']
      }
    }
  }
  IPFSNode = new IPFS(options)

  IPFSNode.on('ready', () => {
    console.log('IPFS node ready.')
  })
}

startNode()

// ENDPOINTS
app.get('/ping', api.ping)

app.post('/uploadData', async (req, res) => {
  const browsingData = req.body
  console.log('Received browsing data')

  const filesAdded = api.uploadToIpfs(IPFSNode, browsingData)
  res.send({ filesAdded })
})

app.post('/syncBrowsingData', (req, res) => {

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// add file to ipfs

// add keys to node

// send browsing data to frontend

// save browsing data
