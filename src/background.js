const IPFSHelper = require('./ipfs')
const { BrowserHelper } = require('./browser')

IPFSHelper.startNode()
BrowserHelper.configureListeners()
