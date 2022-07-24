const fs = require("fs");
const path = require("path");

const serverPath = path.parse(__dirname).dir;
const musicPath = path.join(serverPath, "music");
console.log(musicPath);

fs.stat(musicPath, (err, stats) => {
    if(err) {
        fs.mkdir(musicPath, (createDirErr) => {
            if(createDirErr) {
                console.log("Unable to create 'music' folder");
            } else {
                console.log("Created 'music' folder");
            }
        })
    } else {
        console.log('You are already have the music folder');
    }
})
