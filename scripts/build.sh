npm run clean

npx browserify src/background.js -o build/background.js
npx browserify src/popup.js -o build/popup.js

cp src/popup.html build/popup.html
cp src/manifest.json build/manifest.json
