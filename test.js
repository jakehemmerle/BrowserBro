// const ipns = require('ipns')

let ipfsLink = '/ipfs/QmUY9gxNRZp1YmDuhqfhFZ3E8daKVwNkaMLdjQwE8uqE8u'
// var crypto = require('libp2p-crypto')

// crypto.keys.generateKeyPair('RSA', 1024, (err, _key) => {
//   if (err) {
//     return done(err)
//   }
//   key = _key
//   console.log(key.public)

//   //   ipns.create(key, ipfs, 1, '1000000000000', function(err, ipnsEntry) {
//   //     console.log(ipnsEntry)
//   //   })
// })
const IPFS2 = require('ipfs')
const ipfs = new IPFS2()

ipfs.on('ready', () => {
  //   ipfs.key.list(function(err, keys) {
  //     console.log(keys)
  //   })
  //   ipfs.key.gen(
  //     'my-key',
  //     {
  //       type: 'rsa',
  //       size: 2048
  //     },
  //     (err, key) => {
  //       console.log(key)
  //       //   ipfs.name.publish(
  //       //     ipfsLink,
  //       //     {
  //       //       resolve: true,
  //       //       lifetime: '1000000',
  //       //       ttl: '1000000',
  //       //       key: 'my-key'
  //       //     },
  //       //     function(err, name) {
  //       //       console.log(name)
  //       //     }
  //       //   )
  //     }
  //   )
  //   ipfs.name.publish(
  //     ipfs,
  //     {
  //       resolve: true,
  //       lifetime: '1000000',
  //       ttl: '1000000',
  //       key: 'a'
  //     },
  //     function(err, name) {
  //       console.log(name)
  //     }
  //   )
})
