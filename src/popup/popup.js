const browser = require('webextension-polyfill')

let browsingDataToLocalMirrorButton = document.getElementById('browsingDataToLocalMirror')
let injectTestDataButton = document.getElementById('injectTestData')
let localMirrorToIPFSButton = document.getElementById('localMirrorToIPFS')
let setNewIPNSLinkButton = document.getElementById('setNewIPNSLink')
let fetchRemoteMirrorButton = document.getElementById('fetchRemoteMirror')
let mergeMirrorsButton = document.getElementById('mergeMirrors')
let loadMetadataIntoBrowserButton = document.getElementById('loadMetadataIntoBrowser')

const browsingDataToLocalMirror = () => {
  browser.runtime.sendMessage({
    action: 'browsingDataToLocalMirror'
  }).then(res => console.debug(res))
}

const injectTestData = () => {
  browser.runtime.sendMessage({
    action: 'injectTestData'
  }).then(res => console.debug(res))
}

const localMirrorToIPFS = () => {
  browser.runtime.sendMessage({
    action: 'localMirrorToIPFS'
  }).then(res => console.debug(res))
}

const setNewIPNSLink = () => {
  browser.runtime.sendMessage({
    action: 'setNewIPNSLink'
  }).then(res => console.debug(res))
}

const fetchRemoteMirror = () => {
  browser.runtime.sendMessage({
    action: 'fetchRemoteMirror'
  }).then(res => console.debug(res))
}

const mergeMirrors = () => {
  browser.runtime.sendMessage({
    action: 'mergeMirrors'
  }).then(res => console.debug(res))
}

const loadMetadataIntoBrowser = () => {
  browser.runtime.sendMessage({
    action: 'loadMetadataIntoBrowser'
  }).then(res => console.debug(res))
}

browsingDataToLocalMirrorButton.onclick = browsingDataToLocalMirror
injectTestDataButton.onclick = injectTestData
localMirrorToIPFSButton.onclick = localMirrorToIPFS
setNewIPNSLinkButton.onclick = setNewIPNSLink
fetchRemoteMirrorButton.onclick = fetchRemoteMirror
mergeMirrorsButton.onclick = mergeMirrors
loadMetadataIntoBrowserButton.onclick = loadMetadataIntoBrowser
