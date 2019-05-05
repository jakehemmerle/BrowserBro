const IPFS = require('ipfs')

const node = new IPFS()
const ipns = require('ipns')

node.on('ready', async () => {
  nodeRunning = true
  console.log('IPFS Node Running')
})

let nodeRunning = false

const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/uploadFile', async (req, res) => {
  if (nodeRunning) {
    try {
      let uploadData = req.body.upload

      const filesAdded = await node.add({
        path: 'hello.txt',
        content: Buffer.from(uploadData)
      })

      let ipfsUrl = filesAdded[0].hash

      console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

      const fileBuffer = await node.cat(filesAdded[0].hash)
      console.log('Added file contents:', fileBuffer.toString())

      // let privateKey =
      //   '-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEA3AH0XvUTjslVrmeJwlSafJGcgxNV/RqoxoaYeiy0w6d9gC08SrtVDxQdY3nCmwNbR5YZ6ZjMX3uW02BkB9KoOCt3gaw4dd9Dawn0+5DaW1cliCq8f7qJRmzNG7UpEJZhth5fndzjTV/475SKnCzmW9DNlEjdS+d7SwG1TbbT8WZYTrAx3yaIf0FTvPjXmfR868F/bpWC47qGGoeavH62Psx6AFS9BHRtT9mwGVJpIBeHIwzF+UVsoqnHdKW/ZI1NqY9xepz2sx3Nvb3O1T2fudgQkDQW1IYKRFJuebMdBQfg+/rMEbLM647D3PEc34xWBNU4TiMnpFXMEredosEk8wIDAQABAoIBAG0ehw7l7Rpf36BN+DSrc6gfLIqSd46+v0EgFtZaABoeo4+EYCgMvAZripwBEzWBN6/M0fNbdtpQ2SDj6Rk8MXUSkgZ93c8QukaHvLtdQAAXvCTKVY3gfh+w7RY2BzUT8Ui7zd7lZNPGqxhhC1KkrmiRqrVGYoQ4Pp2YLk1qRbqvhXmSUAsaO2B0IKY+jtsT9P+3w/WjIOo6ASlbLw4q8blMLuTqZULGHzeeEMUvQ206NeguSfm7GJauOSlrsRT6f8FCuXSlyDw7VgmRP4C0RgrzNwfnhFkWjE/KyylU498B+LT3L9cIysSKQ6ow6rn/xkgKEGGaWs5xeYIRbGOGVkECgYEA/CR0uH4sJNnpHhSMKIdWh7uycOywQgA+aPfzg/X7p53ibeCbBQAAY0v8acy8UBItqlTEZLjuK2TlyvvygrWcL4vFOyU8o1Kc5ZCPk7gglNkYqj0VKFF62dKg5fEDvTy1pgOazvR7ZbfzhhIuqiGgef0zNZu4AiS8dieHrk6G0ZMCgYEA31+joinyxQgSDUzB7AKNUtsrGshPwp9WQJCnkfr00JTxo1Y5HWx5ADpGgb45hZ3+oTULIRZ3EfkXQeIH8726VhdH4RuE+OiXYdFO5BRhjCPk2U8jp7Zc12oVsGphAFhupe5FcPTLFQgbzYkyk0r4q8rkhIHNyVqs6Dq5fw+n+yECgYEAq36kQOPYZIwuSX5SQjKjARkB6lqiG5IM4Npcr9F8A+qYGoHdDk6M9Py2xsMxBgkHNEYJejRqEevDfAdXT930SEZ5tJvEHZXQDzf+38sppfPvGcMIA+8/bq4bL6p5D5oeNrdW8RJKZ8nxAayWPrM2ciJsVTb/tb2EzZxfZYgVnK8CgYB6OGddbJx0KJVQB6a3zzGqm1c7gUz7DZnxG/VET88ybbzFhYEc02Rltn0rsnzg2nEfndloElW2VNff6aA2QqK5RmXDCv63/vQNxqvm6ivxtRYbvUyiEIs+JsKVU6+ds8VfLz95rceMy3IDBUXSCByGSy68PhXuTZn8O12R42wjYQKBgQCfNXEesfi0MWevENFJ8J2uebE484CxR/zfZWEScD2W6J+2edHgIdQLfA6vhHgllMNWdcfDVLqGADlBRVQUBHsNYlo40lUSKQ6hHye5MCdY17T2fOBhJQCov+hla24fR2aYwCyLYN9gIOGFB5mqG/muSO7FVjxGCng4UgIY+fvDlw==-----END RSA PRIVATE KEY-----'

      // ipns.create(privateKey, ipfsUrl, 0, '10000', function(err, ipnsEntry) {
      //   if (err) {
      //     console.log(err)
      //   }
      //   console.log(ipnsEntry)
      // })

      // console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

      // const fileBuffer = await node.cat(flesiAdded[0].hash)

      // console.log('Added file contents:', fileBuffer.toString())

      res.send({ location: ipfsUrl })
    } catch (e) {
      console.log(e)
    }
  } else {
    res.send({ error: 'bad' })
  }
})

async function test() {
  let uploadData = 'jake sucks bro'
  const filesAdded = await node.add({
    path: 'hello123.txt',
    content: Buffer.from(uploadData)
  })

  let ipfsUrl = filesAdded[0].hash

  let privateKey =
    '-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEA3AH0XvUTjslVrmeJwlSafJGcgxNV/RqoxoaYeiy0w6d9gC08SrtVDxQdY3nCmwNbR5YZ6ZjMX3uW02BkB9KoOCt3gaw4dd9Dawn0+5DaW1cliCq8f7qJRmzNG7UpEJZhth5fndzjTV/475SKnCzmW9DNlEjdS+d7SwG1TbbT8WZYTrAx3yaIf0FTvPjXmfR868F/bpWC47qGGoeavH62Psx6AFS9BHRtT9mwGVJpIBeHIwzF+UVsoqnHdKW/ZI1NqY9xepz2sx3Nvb3O1T2fudgQkDQW1IYKRFJuebMdBQfg+/rMEbLM647D3PEc34xWBNU4TiMnpFXMEredosEk8wIDAQABAoIBAG0ehw7l7Rpf36BN+DSrc6gfLIqSd46+v0EgFtZaABoeo4+EYCgMvAZripwBEzWBN6/M0fNbdtpQ2SDj6Rk8MXUSkgZ93c8QukaHvLtdQAAXvCTKVY3gfh+w7RY2BzUT8Ui7zd7lZNPGqxhhC1KkrmiRqrVGYoQ4Pp2YLk1qRbqvhXmSUAsaO2B0IKY+jtsT9P+3w/WjIOo6ASlbLw4q8blMLuTqZULGHzeeEMUvQ206NeguSfm7GJauOSlrsRT6f8FCuXSlyDw7VgmRP4C0RgrzNwfnhFkWjE/KyylU498B+LT3L9cIysSKQ6ow6rn/xkgKEGGaWs5xeYIRbGOGVkECgYEA/CR0uH4sJNnpHhSMKIdWh7uycOywQgA+aPfzg/X7p53ibeCbBQAAY0v8acy8UBItqlTEZLjuK2TlyvvygrWcL4vFOyU8o1Kc5ZCPk7gglNkYqj0VKFF62dKg5fEDvTy1pgOazvR7ZbfzhhIuqiGgef0zNZu4AiS8dieHrk6G0ZMCgYEA31+joinyxQgSDUzB7AKNUtsrGshPwp9WQJCnkfr00JTxo1Y5HWx5ADpGgb45hZ3+oTULIRZ3EfkXQeIH8726VhdH4RuE+OiXYdFO5BRhjCPk2U8jp7Zc12oVsGphAFhupe5FcPTLFQgbzYkyk0r4q8rkhIHNyVqs6Dq5fw+n+yECgYEAq36kQOPYZIwuSX5SQjKjARkB6lqiG5IM4Npcr9F8A+qYGoHdDk6M9Py2xsMxBgkHNEYJejRqEevDfAdXT930SEZ5tJvEHZXQDzf+38sppfPvGcMIA+8/bq4bL6p5D5oeNrdW8RJKZ8nxAayWPrM2ciJsVTb/tb2EzZxfZYgVnK8CgYB6OGddbJx0KJVQB6a3zzGqm1c7gUz7DZnxG/VET88ybbzFhYEc02Rltn0rsnzg2nEfndloElW2VNff6aA2QqK5RmXDCv63/vQNxqvm6ivxtRYbvUyiEIs+JsKVU6+ds8VfLz95rceMy3IDBUXSCByGSy68PhXuTZn8O12R42wjYQKBgQCfNXEesfi0MWevENFJ8J2uebE484CxR/zfZWEScD2W6J+2edHgIdQLfA6vhHgllMNWdcfDVLqGADlBRVQUBHsNYlo40lUSKQ6hHye5MCdY17T2fOBhJQCov+hla24fR2aYwCyLYN9gIOGFB5mqG/muSO7FVjxGCng4UgIY+fvDlw==-----END RSA PRIVATE KEY-----'

  console.log(ipfsUrl)

  // ipns.create(privateKey, ipfsUrl, 0, '10000', function(err, ipnsEntry) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log(ipnsEntry)
  // })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function bufferFromString(str) {
  var strUtf8 = unescape(encodeURIComponent(str))
  var ab = new Uint8Array(strUtf8.length)
  for (var i = 0; i < strUtf8.length; i++) {
    ab[i] = strUtf8.charCodeAt(i)
  }
  return ab
}
