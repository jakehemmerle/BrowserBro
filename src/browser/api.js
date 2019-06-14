// This file is an abstraction over the webextension-polyfill package
// that allows us to interact with the browser.

const browser = require('webextension-polyfill')

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

function saveDataToLocalMirror (data) {
  console.debug('Inside saveDataToLocalMirror')
  browser.storage.local.set({ localMirror: data })
    .then(res => console.debug(res))
}

function getLocalMirror () {
  return browser.storage.local.get(['localMirror'])
}

// TODO: write functions that get and set data to values "localMirrorCache" and "IPFSMirrorCache"

module.exports = {
  getHistory,
  loadHistory,
  getBookmarks,
  loadBookmarks,
  getCookies,
  loadCookies,
  saveDataToLocalMirror,
  getLocalMirror
}
