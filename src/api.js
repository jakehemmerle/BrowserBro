
// copy browsing data to

const uploadToIpfs = async (node, data) => {
  const filesAdded = await node.add({
    path: `data-${new Date().getTime()}.json`,
    content: Buffer.from(JSON.stringify(data))
  })

  // copy browsing data to local storage

  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
  console.log(filesAdded)
  return filesAdded
}

const ping = (req, res) => res.send({ message: 'pong' })

module.exports = {
  uploadToIpfs,
  ping
}
