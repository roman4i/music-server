import { musicPath } from "../store/consts.mjs";
import path from "path";
import { client, musicList } from "../config/mongo-config.mjs";
import { ObjectId } from "mongodb";
import { parseBuffer } from "music-metadata";
import fs from 'fs';

// getSong request
const getSong = async (req, res) => {
  try {
    await client.connect();
    const result = await musicList.findOne({_id: ObjectId(req.params.id)})
    
    res.sendFile(path.join(musicPath, result.src));
  } catch (error) {
    res.status(400).end();
  }
}

// gets metadata from song and writes to the db
const getSongData = async (files) => {
  let toWrite = [];

  for (let key in files){
    const songData = await parseBuffer(files[key].data, 'audio/mpeg');
    toWrite.push(
      {
        src: files[key].name,
        name: path.parse(files[key].name).name,
        duration: songData.format.duration
      }
    );
    // musicPath + files[key].name
    files[key].mv(path.join(musicPath, files[key].name), (err) => {
      if (err) console.log(err.message);
    });
  }
  if (toWrite.length > 0) {
    const res = await musicList.insertMany(toWrite);
    return res.insertedCount
  }
  return 0;
}

const uploadSong = async (req, res) => {
  try {
    if(req.files) {
      let filesList = [];

      for(let key in req.files){
        filesList.push({ name: req.files[key].name });
      }

      await client.connect();
      const exists = await musicList.find({
        $or: [...filesList]
      }).toArray();

      if (exists.length > 0) {
        let noCopies = {};
        for(let key in req.files){
          let copy = false;
          exists.forEach(val => {
            if(req.files[key].name === val.src)  copy = true;
          });
          if(!copy) noCopies[key] = req.files[key];
        }
        const result = await getSongData(noCopies);

        res.send(JSON.stringify(result));
      } else {
        const result = await getSongData(req.files);
        
        res.send(JSON.stringify(result));
      }
    } else {
      res.status(400).end();
    }
  } catch (error) {
    res.status(500).end()
  }
}

// delete song
const deleteSong = async (req, res) => {
  await client.connect();

  const file = await musicList.findOne({_id: ObjectId(req.body.id)});

  const result = await musicList.deleteOne({_id: ObjectId(req.body.id)});

  if (result.deletedCount > 0) {
    fs.rm(path.join(musicPath, file.src), () => {});
    res.status(200).end();
  } else {
    res.status(400).end();
  }
}

const updateSong = async (req, res) => {
  try {
    await client.connect();

    const result = await musicList.updateOne({
      _id: ObjectId(req.body.id),
    }, { $set:{
      name: req.body.name,
    }});
    console.log(result);
    const count = result.modifiedCount;
    if (count > 0) {
      res.send(JSON.stringify({
        name: req.body.name,
      }));
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).end();
    console.log(error);
  }
};

export { getSong, uploadSong, deleteSong, updateSong };
