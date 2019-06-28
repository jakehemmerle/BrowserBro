const browser = require('webextension-polyfill')
const BrowserAPI = require('./api')
const IPFSHelper = require('../ipfs')

const configureBrowsingDataToLocalMirrorListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'browsingDataToLocalMirror') {
      console.debug(`Action: ${request.action}`)
      // TODO: make these calls parallel
      const browsingData = {
        history: await BrowserAPI.getHistory(),
        bookmarks: await BrowserAPI.getBookmarks(),
        cookies: await BrowserAPI.getCookies()
      }

      console.debug('Browsing data in browser: ')
      console.debug(browsingData)
      BrowserAPI.saveDataToLocalMirror(browsingData)
    }

    return Promise.resolve({ complete: true })
  })
}

const configureInjectTestDataListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'injectTestData') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
    }

    return Promise.resolve({ complete: true })
  })
}

const configureLocalMirrorToIPFSListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'localMirrorToIPFS') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
      IPFSHelper.uploadToIPFS(request.data)
        .then(res => console.debug(`Upload completed`))
    }

    return Promise.resolve({ complete: true })
  })
}

const configureSetNewIPNSLinkListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'setNewIPNSLink') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
    }

    return Promise.resolve({ complete: true })
  })
}

const configureFetchRemoteMirrorListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'fetchRemoteMirror') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
    }

    return Promise.resolve({ complete: true })
  })
}

const configureMergeMirrorsListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'mergeMirrors') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
    }

    return Promise.resolve({ complete: true })
  })
}

const configureLoadMetadataIntoBrowserListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'loadMetadataIntoBrowser') {
      console.debug(`Action: ${request.action}`)
      // TODO: action logic
    }

    return Promise.resolve({ complete: true })
  })
}

const configureLogLocalMirrorListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'logLocalMirror') {
      console.debug(`Action: ${request.action}`)
      BrowserAPI.getLocalMirror()
        .then((data) => console.log(data.localMirror))
    }

    return Promise.resolve({ complete: true })
  })
}

const configurePrivateKeyListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'savePrivateKey') {
      console.debug(`Action: ${request.action}`)
      await browser.storage.local.set({ privateKey: request.data })

      browser.storage.local.get(['privateKey'], function (result) {
        console.log('Value is now ' + result.privateKey)
      })
    }

    return Promise.resolve({ complete: true })
  })
}

const configureSetIPNSValueListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'setNewIPNSValue') {
      console.debug(`Action: ${request.action}`)
      await browser.storage.local.set({ IPNSValue: request.data })
      // TODO: write code that sets the latest IPFS value to the IPNS DHT

      browser.storage.local.get(['IPNSValue'], function (result) {
        console.log('IPNS value is now ' + result.IPNSValue)
      })
    }

    return Promise.resolve({ complete: true })
  })
}

const configureTestListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'testListener') {
      console.debug(`Action: ${request.action}`)
      console.log(`Test message received: ${request}`)
    }

    return Promise.resolve({ complete: true })
  })
}

module.exports = {
  configureBrowsingDataToLocalMirrorListener,
  configureInjectTestDataListener,
  configureLocalMirrorToIPFSListener,
  configureSetNewIPNSLinkListener,
  configureFetchRemoteMirrorListener,
  configureMergeMirrorsListener,
  configureLoadMetadataIntoBrowserListener,
  configureLogLocalMirrorListener,
  configurePrivateKeyListener,
  configureSetIPNSValueListener,
  configureTestListener
}
