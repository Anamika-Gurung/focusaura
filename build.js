const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

// Copy files from public to dist
fs.readdirSync(publicDir).forEach(file => {
  fs.copyFileSync(path.join(publicDir, file), path.join(dist, file));
});

console.log('Build complete: Files copied to dist/');
