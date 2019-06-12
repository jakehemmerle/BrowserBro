const browser = require('webextension-polyfill')

// const port = browser.runtime.connect({ name: 'browserbro' })
//
// port.onMessage.addListener((msg) => {
//   if (msg.action === "Who's there?") {
//
//   } else if (msg.action === 'Madame who?') {
//
//   }
// })

let browsingDataToLocalMirrorButton = document.getElementById('browsingDataToLocalMirror')
let injectTestDataButton = document.getElementById('injectTestData')
let localMirrorToIPFSButton = document.getElementById('localMirrorToIPFS')
let setNewIPNSLinkButton = document.getElementById('setNewIPNSLink')
let fetchRemoteMirrorButton = document.getElementById('fetchRemoteMirror')
let mergeMirrorsButton = document.getElementById('mergeMirrors')
let loadMetadataIntoBrowserButton = document.getElementById('loadMetadataIntoBrowser')

const browsingDataToLocalMirror = () => {
  console.log('Sending message to background.js...')
  browser.runtime.sendMessage({
    action: 'testListener'
  }).then(res => console.log(res))
}

const injectTestData = () => {

}

const localMirrorToIPFS = () => {

}

const setNewIPNSLink = () => {

}

const fetchRemoteMirror = () => {

}

const mergeMirrors = () => {

}

const loadMetadataIntoBrowser = () => {

}

browsingDataToLocalMirrorButton.onclick = browsingDataToLocalMirror
injectTestDataButton.onclick = injectTestData
localMirrorToIPFSButton.onclick = localMirrorToIPFS
setNewIPNSLinkButton.onclick = setNewIPNSLink
fetchRemoteMirrorButton.onclick = fetchRemoteMirror
mergeMirrorsButton.onclick = mergeMirrors
loadMetadataIntoBrowserButton.onclick = loadMetadataIntoBrowser
