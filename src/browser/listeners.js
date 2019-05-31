const browser = require('webextension-polyfill')

const configurePrivateKeyListener = () => {
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
}

module.exports = {
  configurePrivateKeyListener
}
