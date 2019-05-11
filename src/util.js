const getPrivateKey = (configFile) => {
  // TODO: parse config file and return private key
  const config = JSON.parse(getTestConfigFile())
  try {
    return config.Identity.PrivKey
  } catch (e) {
    console.error('Unable to read config file: ', e)
  }
}

const getTestConfigFile = () => {
  const fs = require('fs')
  return fs.readFileSync('resources/jsipfs/config', 'utf8')
}

const bufferFromString = str => {
  const strUtf8 = unescape(encodeURIComponent(str))
  const ab = new Uint8Array(strUtf8.length)
  for (let i = 0; i < strUtf8.length; i++) {
    ab[i] = strUtf8.charCodeAt(i)
  }
  return ab
}

module.exports = {
  getPrivateKey,
  getTestConfigFile,
  bufferFromString
}
