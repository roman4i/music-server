import express from "express";
import cors from "cors";
import musicListRoutes from "./routes/musicList.routes.js";
import songsRoutes from "./routes/song.routes.js";

const app = express();

const port = 3001;

app.use(cors());

app.use('/musicList', musicListRoutes);
app.use('/songs', songsRoutes);

app.get('/', (req, res) => {
  res.send('Go to "/getMusicList" route');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
