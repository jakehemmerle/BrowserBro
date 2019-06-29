
const IPFS = require('ipfs')

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
    console.debug('IPFS node ready.')
  })
}

const uploadToIPFS = async (data) => {
  console.log(`data: ${data}`)
  const filesAdded = await IPFSNode.add({
    path: `data-${new Date().getTime()}.json`,
    content: Buffer.from(JSON.stringify(data))
  })

  console.debug('Added file:', filesAdded[0].path, filesAdded[0].hash)
  console.debug(filesAdded)
  return filesAdded
}

module.exports = {
  startNode,
  uploadToIPFS
}
