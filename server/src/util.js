const startNode = (node) => {
  node.on('ready', async () => {
    console.log('IPFS Node Running');
    return true;
  });
  return false;
};

const getPrivateKey = (configFile) => {
  // TODO: parse config file and return private key
  const config = JSON.parse(getTestConfigFile());
  try {
    return config.Identity.PrivKey;
  } catch (e) {
    console.error('Unable to read config file: ', e);
  }
};

const getTestConfigFile = () => {
  const fs = require('fs');
  return fs.readFileSync('resources/jsipfs/config', 'utf8');
};

module.exports = {
  startNode,
  getPrivateKey,
  getTestConfigFile,
};
