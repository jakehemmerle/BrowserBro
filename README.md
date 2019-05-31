# BrowserBro

[![browserbro](https://img.shields.io/badge/freenode-%23browserbro-brightgreen.svg)](https://webchat.freenode.net/?channels=browserbro)

Store your personal web data (passwords, history, cookies) on an encrypted IPFS drive.

Currenly in development.

## How to Use

### Setup



Install the packages with ```npm install```

### Configure

#### ESLint

Run ```npx eslint --init``` and use the Standard style sheet. 

#### Build 

Build the packages by running```npm run build-js```. This turns 

## MVP Roadmap

#### Assumptions
User has access to private key file somehow

Assume files at ipns link are encrypted with same key pair as above

#### Authentication
*IPNS* - how is the extension going to remember the url? public key is address of ipns

#### Extension Features

- On initial launch, popup that prompts user to select where their private key file is located and saves into web auth api
- Download files from ipns link and decrypt
- Grab passwords
- DONE: Upload file to IPFS
- DONE: Load data back into browser
- DONE: Grab browsing history
- DONE: Grab bookmarks
- DONE: Grab cookies
