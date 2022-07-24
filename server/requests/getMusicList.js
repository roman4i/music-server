const fs = require('fs');
const consts = require("../store/consts");

const getMusicList = (req, res) => {
    fs.readFile(consts.musicListPath, (fileErr, data) => {
        if(fileErr) {
            console.log('Cant read music list');
            res.statusCode = 500;
            res.send('[]');
        } else {
            res.send(data.toString('utf-8'))
        }
    });
}

module.exports = getMusicList;
