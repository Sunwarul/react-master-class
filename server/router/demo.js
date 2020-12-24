const fs = require('fs');
const directoryToOpen = '/home/sunwarul/Pictures';
let images = [];

fs.readdirSync(directoryToOpen).forEach(file => {
    images.push(file);
})
