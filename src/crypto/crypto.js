const generateRSAKeyPair = () => {
  // TODO: logic for generateNewKey. This should be used to generate master
}

const generateSessionKey = () => {
  // TODO: logic for generateSessionKey (AES)
}

const setMasterKey = (publicKey, privateKey) => {
  // TODO: logic for setMasterKey, master RSA
}

const setSessionKey = (newSessionKey) => {
  // TODO: logic for setSessionKey, set key used to encrypt data
}

const deleteMasterKey = () => {
  // TODO: logic for deleteMasterKey
}

const signDeviceKey = (devicePublicKey) => {
  // TODO: logic for signDeviceKey
}

const verifyDeviceKey = (devicePublicKey) => {
  // TODO: logic for verifyDeviceKey
}

const encryptData = (data) => {
  // TODO: logic for encryptData
}

const decryptData = (data) => {
  // TODO: logic for decryptData
}

const encryptSymmetricKeyForEachDevice = () => {
  // TODO: logic for encryptSymmetricKeys
}

const getSymmetricKey = () => {
  // TODO: logic for getSymmetricKey, decrypt and returns the symmetric key
}

module.exports = {
  generateRSAKeyPair,
  generateSessionKey,
  setMasterKey,
  setSessionKey,
  deleteMasterKey,
  signDeviceKey,
  verifyDeviceKey,
  encryptData,
  decryptData,
  encryptSymmetricKeyForEachDevice,
  getSymmetricKey
}
