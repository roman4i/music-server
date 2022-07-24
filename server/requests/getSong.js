const fs = require("fs");
const path = require("path");
const consts = require("../store/consts");

const getSong = (req, res) => {
    fs.readFile(consts.musicListPath, (fileErr, data) => {
        if(fileErr) {
            console.log('Cant read music list');
            res.statusCode = 500;
            res.send();
        } else {
            const musicList = JSON.parse(data.toString('utf-8'));
            let matchPresents = false;
            musicList.forEach(val => {
                if(val.id == req.params.song) {
                    matchPresents = true;
                    res.sendFile(path.join(consts.musicPath, val.link));
                } 
            });
            if(!matchPresents) {
                res.statusCode = 500;
                res.end();
            }
        }
    })
}

module.exports = getSong;
