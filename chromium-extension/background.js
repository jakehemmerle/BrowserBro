chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log(request)
  await chrome.storage.local.set({ privateKey: request.data })

  chrome.storage.local.get(['privateKey'], function(result) {
    console.log('Value currently is ' + result.privateKey)
  })

  sendResponse({ ok: true })
})
