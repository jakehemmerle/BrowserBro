const browser = require('webextension-polyfill')

document.addEventListener('DOMContentLoaded', function () {
  function handleFiles () {
    let fileToLoad = this.files[0]
    var fr = new FileReader()
    fr.onload = function (e) {
      console.log(e.target.result)

      // send to background script here
      browser.runtime.sendMessage({
        action: 'savePrivateKey',
        data: e.target.result
      })
    }
    fr.readAsText(fileToLoad)

    document
      .getElementById('input')
      .addEventListener('change', handleFiles, false)
  }
})
