const IPFSHelper = require('../ipfs')
const BrowserHelper = require('../browser')
const listener = require('../browser/listeners')

async function uploadBrowsingDataToIPFS () {
  let browsingData = JSON.stringify({
    // TODO: call these in parallel
    cookies: await BrowserHelper.getCookies(),
    bookmarks: await BrowserHelper.getBookmarks(),
    history: await BrowserHelper.getHistory()
  })

  console.log('Data to be sent: ')
  console.log(JSON.parse(browsingData))

  IPFSHelper.uploadToIPFS(browsingData)
    .then(res => console.log(res))
}

function configureListeners () {
  listener.configurePrivateKeyListener()
}

module.exports = {
  uploadBrowsingDataToIPFS,
  configureListeners
}
