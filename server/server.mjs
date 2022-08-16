import express from "express";
import cors from "cors";
import musicListRoutes from "./routes/musicList.routes.mjs";
import songsRoutes from "./routes/song.routes.mjs";
import fileUpload from "express-fileupload";

const app = express();

const port = 3001;

app.use(cors());
app.use(fileUpload());

app.use('/musicList', musicListRoutes);
app.use('/songs', songsRoutes);

app.get('/', (req, res) => {
  res.send('Go to "/getMusicList" route');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
