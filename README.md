# BrowserBro

[![browserbro](https://img.shields.io/badge/freenode-%23browserbro-brightgreen.svg)](https://webchat.freenode.net/?channels=browserbro)

Store your personal web data (passwords, history, cookies) on an encrypted IPFS drive.

Currenly in development.

## How to Use

### Setup

We are currently building with Node v11.15.0. Install the packages with ```npm install```

### Configure

#### ESLint

We use the Standard Style Sheet, and linting is required. Easiest way to get started is to run ```npx eslint --init```
and select the Standard Style Sheet. 

### Building

Build the packages by running```npm run build```. This cleans the /build directory, *browserifies* ```background.js```
and ```popup.js```, and copies everything needed to run the extension into the /build folder. Then, go to chrome://extensions,
click "Load Unpacked" (make sure 'developer mode' is on, top right), and select the /build folder. 

## How To Help

All help is appreciated! Feel free to grab one of the issues or reach out to @jakehemmerle on Twitter.    
