const path = require("path");
const fs = require("fs");
const consts = require("../store/consts");

const checkMusicList = () => {
    fs.stat(consts.musicListPath, (statErr) => {
        if(statErr) {
            console.log('There is no music list file, creating new file ...');
            fs.readdir(consts.musicPath, (musicErr, musicList) => {
                if(musicErr) {
                    console.log("Something wrong with music folder");
                    console.log(musicErr.message);
                } else {
                    let dataToList = [];
                    if(musicList.length > 0) {
                        dataToList = musicList.map((val, ind) => {
                            return {
                                name: val,
                                link: val,
                                id: ind
                            }
                        })
                    }
                    fs.appendFile(consts.musicListPath, JSON.stringify(dataToList), err => {
                        if(err) {
                            console.log("Cant append data to list");
                        } else {
                            console.log('Files appended');
                        }
                    });
                }
            })
        } else {
            fs.readFile(consts.musicListPath, (fileErr, fileData) => {
                if(fileErr) {
                    console.log('Failed to read music list');
                } else {
                    const oldMusicList = JSON.parse(fileData.toString('utf-8'));
                    let newMusicList = [];

                    fs.readdir(consts.musicPath, (musicErr, musList) => {
                        if(!musicErr) {
                            let musicNumber = 0;
                            musList.forEach(val => {
                                let createNew = true;
                                oldMusicList.forEach(oldVal => {
                                    if(val === oldVal.link) {
                                        newMusicList.push({
                                            ...oldVal,
                                            id: musicNumber
                                        });
                                        createNew = false;
                                        musicNumber++;
                                    }
                                });
                                if(createNew) {
                                    newMusicList.push({
                                        name: val,
                                        link: val,
                                        id: musicNumber
                                    })
                                    musicNumber++;
                                }
                            })
                            fs.writeFile(consts.musicListPath, JSON.stringify(newMusicList), writeErr => {
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
