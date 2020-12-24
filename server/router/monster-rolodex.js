const express = require('express');
const router = express.Router();

/**
 * Access the pictures folder from the local PC
 */
const fs = require('fs');
const directoryToOpen = "/home/sunwarul/Pictures";

let monstersImages = [];

fs.readdirSync(directoryToOpen).forEach(file => {
    monstersImages.push(`${directoryToOpen}/${file}`);
});

router.get('/', (req, res) => {
    const monsters = [
        {
            id: 1,
            name: 'Monster 1',
            image: monstersImages[0]
        },

        {
            id: 2,
            name: 'Monster 2',
            image: monstersImages[1]
        },
        {
            id: 3,
            name: 'Monster 3',
            image: monstersImages[2]
        },
    ]
    res.json({ 'monsters': monsters })
})

module.exports = router