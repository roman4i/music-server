import { musicPath } from "../store/consts.mjs";
import path from "path";
import { client, musicList } from "../config/mongo-config.mjs";
import { ObjectId } from "mongodb";

const getSong = async (req, res) => {
  try {
    await client.connect();
    const result = await musicList.findOne({_id: ObjectId(req.params.id)})
    
    res.sendFile(path.join(musicPath, result.src));
  } catch (error) {
    res.status(400).end();
  }
};

export { getSong };
