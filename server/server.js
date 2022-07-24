const express = require("express");
const path = require("path");
const checkMusic = require('./utils/checkMusicFolder');

const app = express();

const port = 3001;
const project_dir = 'C:\\Users\\Роман\\Documents\\projects\\music-server'

// don't forget to execute 'addMusicFolder.js' before use server, then put your files there
checkMusic();

app.use(express.static(path.join(project_dir, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(project_dir, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
