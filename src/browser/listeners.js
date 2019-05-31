const browser = require('webextension-polyfill')

const configurePrivateKeyListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(request)
    if (request.action === 'savePrivateKey') {
      await browser.storage.local.set({ privateKey: request.data })

      browser.storage.local.get(['privateKey'], function (result) {
        console.log('Value is now ' + result.privateKey)
      })
    }

    sendResponse({ complete: true })
  })
}

const configureSetIPNSValueListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(request)
    if (request.action === 'setNewIPNSValue') {
      await browser.storage.local.set({ IPNSValue: request.data })
      // TODO: write code that sets the latest IPFS value to the IPNS DHT

      browser.storage.local.get(['IPNSValue'], function (result) {
        console.log('IPNS value is now ' + result.IPNSValue)
      })
    }

    sendResponse({ complete: true })
  })
}

module.exports = {
  configurePrivateKeyListener,
  configureSetIPNSValueListener
}
