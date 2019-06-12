npm run clean

cp src/manifest.json build/manifest.json

npx browserify src/background.js -o build/background.js
npx browserify src/popup/popup.js -o build/popup.js

cp src/popup/popup.html build/popup.html
cp src/popup/popup.css build/popup.css

