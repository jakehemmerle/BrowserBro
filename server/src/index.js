const IPFS = require('ipfs');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { startNode } = require('./util');

const IPFSNode = new IPFS();
let nodeRunning = startNode(IPFSNode);

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.get('/ping', (req, res) => res.send('Hello World!'));

app.post('/uploadFile', async (req, res) => {
  if (nodeRunning) {
    try {
      let uploadData = req.body.upload;

      const filesAdded = await IPFSNode.add({
        path: 'hello.txt',
        content: Buffer.from(uploadData)
      });

      console.log('Added file:', filesAdded[0].path, filesAdded[0].hash);

      const fileBuffer = await IPFSNode.cat(filesAdded[0].hash);

      console.log('Added file contents:', fileBuffer.toString());

      //   const upload = await node.add({
      //     path: 'hello.txt',
      //     content: Buffer.from(uploadData)
      //   })
      //   //   let uploadBuffer = bufferFromString(uploadData)
      //   //   let upload = await node.addListener(uploadBuffer)
      //   console.log(upload)
      res.send({ location: filesAdded[0].hash })
    } catch (e) {
      console.log(e)
    }
  } else {
    res.send({ error: 'bad' })
  }
});

app.post('/uploadConfig', async (req, res) => {
  const { config } = req.body;
  const privateKey = getPrivateKey(config);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function bufferFromString(str) {
  const strUtf8 = unescape(encodeURIComponent(str));
  const ab = new Uint8Array(strUtf8.length);
  for (let i = 0; i < strUtf8.length; i++) {
    ab[i] = strUtf8.charCodeAt(i)
  }
  return ab
}
