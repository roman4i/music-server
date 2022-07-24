const path = require("path");
const fs = require("fs");

const serverPath = path.parse(__dirname).dir;
const musicListPath = path.join(serverPath, 'store', 'music-list.txt')
const musicPath = path.join(serverPath, "music");

const checkMusicList = () => {
    fs.stat(musicListPath, (statErr) => {
        if(statErr) {
            console.log('There is no music list file, creating new file ...');
            fs.readdir(musicPath, (musicErr, musicList) => {
                if(musicErr) {
                    console.log("Something wrong with music folder");
                    console.log(musicErr.message);
                } else {
                    let dataToList = [];
                    if(musicList.length > 0) {
                        dataToList = musicList.map((val) => {
                            return {
                                name: val,
                                link: val
                            }
                        })
                    }
                    fs.appendFile(musicListPath, JSON.stringify(dataToList), err => {
                        if(err) {
                            console.log("Cant append data to list");
                        } else {
                            console.log('Files appended');
                        }
                    });
                }
            })
        } else {
            fs.readFile(musicListPath, (fileErr, fileData) => {
                if(fileErr) {
                    console.log('Failed to read music list');
                } else {
                    const oldMusicList = JSON.parse(fileData.toString('utf-8'));
                    let newMusicList = [];

                    fs.readdir(musicPath, (musicErr, musList) => {
                        if(!musicErr) {
                            musList.forEach(val => {
                                let createNew = true;
                                oldMusicList.forEach(oldVal => {
                                    if(val === oldVal.link) {
                                        newMusicList.push(oldVal);
                                        createNew = false;
                                    }
                                });
                                if(createNew) {
                                    newMusicList.push({
                                        name: val,
                                        link: val
                                    })
                                }
                            })
                            fs.writeFile(musicListPath, JSON.stringify(newMusicList), writeErr => {
                                if(writeErr) {
                                    console.log('Cant write new data to music list');
                                } else {
                                    console.log('Music list checked succefully');
                                }
                            })
                        } else {
                            console.log('Cant read music folder');
                        }
                    });
                }
            })
        }
})}

module.exports = checkMusicList;
