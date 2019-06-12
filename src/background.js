const browser = require('webextension-polyfill')
const IPFSHelper = require('./ipfs')
const { Bro } = require('./bro')

IPFSHelper.startNode()
Bro.configureMessageListeners()

// browser.runtime.onConnect.addListener(() => {
//   port.onMessage.addListener(function (msg) {
//     console.log(`Action: ${msg.action}`)
//
//     if (msg.action === 'browsingDataToLocalMirror') {
//       console.log('fuck yeah messages are working')
//     } else if (msg.action === 'injectTestData') {
//
//     } else if (msg.action === 'localMirrorToIPFS') {
//
//     } else if (msg.action === 'setNewIPNSLink') {
//
//     } else if (msg.action === 'fetchRemoteMirror') {
//
//     } else if (msg.action === 'mergeMirrors') {
//
//     } else if (msg.action === 'loadMetadataIntoBrowser') {
//
//     }
//   })
// })

browser.runtime.onMessage.addListener( (msg) => {
  console.log(msg)
})
