chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log(request)
  if (request.action == 'savePrivateKey') {
    await chrome.storage.local.set({ privateKey: request.data })

    chrome.storage.local.get(['privateKey'], function(result) {
      console.log('Value currently is ' + result.privateKey)
    })
  }

  sendResponse({ ok: true })
})

function getBrowsingData() {
  chrome.history.search({ text: '', maxResults: 3 }, function(data) {
    // console.log(data.length)
    data.forEach(function(page) {
      console.log(page)
    })
  })
}

//getBrowsingData()

function getBookmarks() {
  chrome.bookmarks.getTree(function(data) {
    console.log(data)
  })
}

function getCookies() {
  chrome.cookies.getAll({}, function(data) {
    console.log(data)
  })
}
getCookies()

//getBookmarks()
