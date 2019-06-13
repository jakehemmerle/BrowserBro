const IPFSHelper = require('../ipfs')
const BrowserHelper = require('../browser')
const listener = require('../browser/listeners')

async function uploadBrowsingDataToIPFS () {
  let browsingData = JSON.stringify({
    // TODO: optimization: call these in parallel
    cookies: await BrowserHelper.getCookies(),
    bookmarks: await BrowserHelper.getBookmarks(),
    history: await BrowserHelper.getHistory()
  })

  console.log('Data to be sent: ')
  console.log(JSON.parse(browsingData))

  IPFSHelper.uploadToIPFS(browsingData)
    .then(res => console.log(res))
}

function configureMessageListeners () {
  listener.configureBrowsingDataToLocalMirrorListener()
  listener.configureInjectTestDataListener()
  listener.configureLocalMirrorToIPFSListener()
  listener.configureFetchRemoteMirrorListener()
  listener.configureMergeMirrorsListener()
  listener.configureLoadMetadataIntoBrowserListener()
  listener.configureLogLocalMirrorListener()
  listener.configurePrivateKeyListener()
  listener.configureSetIPNSValueListener()
  listener.configureTestListener()
}

module.exports = {
  uploadBrowsingDataToIPFS,
  configureMessageListeners
}
