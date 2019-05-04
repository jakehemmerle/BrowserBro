# BrowserBro

[![browserbro](https://img.shields.io/badge/freenode-%23browserbro-brightgreen.svg)](https://webchat.freenode.net/?channels=browserbro)

Store your personal web data (passwords, history, cookies) on an encrypted IPFS drive.

Currenly in development.

-----------------------Challenges-----------------------------

Assumptions:
User has access to private key file somehow
Assume files at ipns link are encrypted with same key pair as above

Authentication
IPNS - how is the extension going to remember the url? public key is address of ipns

Extension Side

- On initial launch, popup that prompts user to select where their private key file is located and saves into web auth api
- Download files from ipns link and decrypt
- Load data back into browser
- Grab browsing history
- Grab bookmarks
- Grab cookies/passwords etc
- input/output format

MVP Version

- lets just have server that deals with downloads/uploads -> we can browserify afterwards
