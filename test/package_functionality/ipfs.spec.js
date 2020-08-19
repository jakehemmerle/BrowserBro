describe('js-ipfs', () => {
  const Ipfs = require('ipfs')
  const IPFSNode = new Ipfs()
  IPFSNode.on('ready', () => {
    console.log('IPFS ready for tests')
  })

  describe('suite name', function () {
  })
  // describe('Key Generation', function () {
  //   it('should generate a key', () => {
  //     const keyParams = {
  //       type: 'rsa',
  //       size: '2048'
  //     }
  //     IPFSNode.key.gen('testKey', keyParams, (err, key) => {
  //       if (err) console.error(e)
  //       console.log(key)
  //     })
  //   })
  //
  //   it('should export that key', () => {
  //   })
  //
  //   it('should delete that key', () => {
  //   })
  //
  //   it('should have no keys', () => {
  //   })
  //
  //   it('should import a new key', () => {
  //   })
  //
  //   it('should rename that key', () => {
  //   })
  // })
})
