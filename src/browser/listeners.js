const browser = require('webextension-polyfill')

const configurePrivateKeyListener = () => {
  browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'savePrivateKey') {
      console.log(request)
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
      console.log(request)
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
      console.log(`Test message received: ${request}`)
    }

    return Promise.resolve({ complete: true })
  })
}

module.exports = {
  configurePrivateKeyListener,
  configureSetIPNSValueListener,
  configureTestListener
}
