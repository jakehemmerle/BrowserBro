const IPFSHelper = require('./ipfs')
const Browser = require('./browser')

IPFSHelper.startNode()
Browser.configureListeners()
