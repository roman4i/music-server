import { client, musicList } from "../config/mongo-config.js";
import fs from 'fs/promises';
import { parseFile } from "music-metadata";
import path from 'path';
import { musicPath } from "../store/consts.js";

const putMusic = async () => {
  const allMusic = await fs.readdir(musicPath)
    .catch(err => {
      return [];
    });
  
  const toDB = allMusic.map(async val => {
    let songData = {
      src: val,
    }

    const songMetadata = await parseFile(path.join(musicPath, val));

    songData.duration = songMetadata.format.duration;
    songData.name = path.parse(val).name;

    return songData;
  })

  const mappedToDB = await Promise.all(toDB)

  await client.connect();

  try {
    const dbWriteRes = await musicList.insertMany(mappedToDB);
    console.log(dbWriteRes.insertedCount);
  } catch (error) {
    console.log(error.message);
  }

  await client.close();
}

putMusic();
