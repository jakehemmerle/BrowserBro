const IPFSHelper = require('./ipfs')
const { Bro } = require('./bro')

IPFSHelper.startNode()
Bro.configureMessageListeners()
