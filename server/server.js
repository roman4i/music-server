import express from "express";
import cors from "cors";
import musicListRoutes from "./routes/musicList.routes.js";

const app = express();

const port = 3001;

app.use(cors());
app.use('/musicList', musicListRoutes);

app.get('/', (req, res) => {
  res.send('Go to "/getMusicList" route');
})



// app.get('/getSong/:song',getSong);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
