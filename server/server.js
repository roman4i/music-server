const express = require("express");
const path = require("path");

const app = express();

const port = 3001;
const project_dir = 'C:\\Users\\Роман\\Documents\\projects\\music-server'

app.use(express.static(path.join(project_dir, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(project_dir, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
