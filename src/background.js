const IPFS = require('ipfs')
const IpfsHelper = require('./ipfsHelper')

// SETUP

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
const uploadData = (browsingData) => {
  const filesAdded = IpfsHelper.uploadToIpfs(IPFSNode, browsingData)
  res.send({ filesAdded })
}

// add file to ipfs

// add keys to node

// send browsing data to frontend

// save browsing data

// CLIENT SIDE

browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log(request)
  if (request.action === 'savePrivateKey') {
    await browser.storage.local.set({ privateKey: request.data })

    browser.storage.local.get(['privateKey'], function (result) {
      console.log('Value currently is ' + result.privateKey)
    })
  }

  sendResponse({ ok: true })
})

async function getHistory () {
  const localHistory = await browser.history.search(
    {
      text: '',
      startTime: 0,
      maxResults: 0
    })
  console.log('Local History saved.')
  return localHistory
}

// Input is array of string urls
function loadHistory (allHistory) {
  let history = allHistory.allUrls
  for (let i = 0; i < history.length; i++) {
    browser.history.addUrl({ url: history[i] })
  }
  console.log('History inserted.')
}

async function getBookmarks () {
  const bookmarks = await browser.bookmarks.getTree()
  console.log('Local Bookmarks saved.')
  return bookmarks
}

// Input is array of json objects bookmarks
function loadBookmarks (allBookmarks) {
  let bookmarks = allBookmarks.allBookmarks
  for (let i = 0; i < bookmarks.length; i++) {
    browser.bookmarks.create({
      parentId: bookmarks[i].parentId,
      title: bookmarks[i].title,
      url: bookmarks[i].url
    })
  }
  console.log('Bookmarks inserted.')
}

async function getCookies () {
  const cookies = await browser.cookies.getAll({})
  console.log('Local Cookies saved.')
  return cookies
}

// Input is array of json objects cookies
function loadCookies (allCookies) {
  let cookies = allCookies.allCookies
  for (let i = 0; i < cookies.length; i++) {
    browser.cookies.set({
      ...cookies[i],
      url: cookies[i].domain
    })
  }
  console.log('Cookies loaded.')
}

async function uploadBrowsingDataToIpfs () {
  let browsingData = JSON.stringify({
    cookies: await getCookies(),
    bookmarks: await getBookmarks(),
    history: await getHistory()
  })

  console.log('Data to be sent: ')
  console.log(JSON.parse(browsingData))

  uploadData(browsingData)

}
