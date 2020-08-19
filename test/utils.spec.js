const { getPrivateKey, getTestConfigFile } = require('../src/utils/util')

describe('util', function () {
  describe('getTestConfigFile()', () => {
    it('should print a config file', () => {
      console.log(getTestConfigFile())
    })
  })

  describe('getPrivateKey()', () => {
    it('should print a private key', () => {
      console.log(getPrivateKey())
    })
  })
})
