
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
    console.log('IPFS node ready.')
  })
}

const uploadToIPFS = async (data) => {
  const filesAdded = await IPFSNode.add({
    path: `data-${new Date().getTime()}.json`,
    content: Buffer.from(JSON.stringify(data))
  })

  // TODO: copy browsing data to local storage

  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
  console.log(filesAdded)
  return filesAdded
}

module.exports = {
  startNode,
  uploadToIPFS
}
