const path = require("path");

const serverPath = path.parse(__dirname).dir;
const musicListPath = path.join(serverPath, 'store', 'music-list.txt')
const musicPath = path.join(serverPath, "music");

module.exports.serverPath = serverPath;
module.exports.musicListPath = musicListPath;
module.exports.musicPath = musicPath;
