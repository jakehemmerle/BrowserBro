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

function getHistory() {
  let allUrls = []

  chrome.history.search(
    {
      text: '',
      startTime: 0,
      maxResults: 0
    },
    function(data) {
      data.forEach(function(page) {
        allUrls.push(page.url)
      })
      console.log(data.length)
      //Need to turn array into string to save as file? or json
      return { allUrls: allUrls }
    }
  )
}

//Input is array of string urls
function loadHistory(allUrls) {
  let history = allUrls.allUrls
  for (let i = 0; i < history.lenghth; i++) {
    chrome.history.addUrl({ url: history[i] })
  }
  return true
}

// setInterval(getBrowsingData, 5000)
// getBrowsingData()

function getBookmarks() {
  let allBookmarks = []

  chrome.bookmarks.getTree(function(data) {
    let dataObject = data[0].children
    for (let i = 0; i < dataObject.length; i++) {
      let subchild = dataObject[i].children
      for (let j = 0; j < subchild.length; j++) {
        allBookmarks.push(subchild[j])
      }
    }
    return { allBookmarks: allBookmarks }
  })
}

//Input is array of json objects bookmarks
function loadBookmarks(allBookmarks) {
  let bookmarks = allBookmarks.allBookmarks
  for (let i = 0; i < bookmarks.length; i++) {
    chrome.bookmarks.create({
      parentId: bookmarks[i].parentId,
      title: bookmarks[i].title,
      url: bookmarks[i].url
    })
  }
}

function getCookies() {
  chrome.cookies.getAll({}, function(data) {
    return { allCookies: data }
  })
}

//Input is array of json objects cookies
function loadCookies(allCookies) {
  let cookies = allCookies.allCookies
  for (let i = 0; i < cookies.length; i++) {
    chrome.cookies.set({
      url: cookies[i].domain,
      value: cookies[i].value,
      path: cookies[i].path,
      secure: cookies[i].secure,
      httpOnly: cookies[i].httpOnly,
      sameSite: cookies[i].sameSite,
      expirationDate: cookies[i].expirationDate
    })
  }
  return true
}

async function uploadAllData() {
  let url = 'http://localhost:3000/uploadData'

  let cookies = getCookies()
  let bookmarks = getBookmarks()
  let history = getHistory()

  let privateKey = chrome.storage.local.get(['privateKey'])

  let data = {
    privateKey: privateKey,
    cookies: cookies,
    bookmarks: bookmarks,
    history: history
  }

  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
}
