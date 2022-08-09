import { musicList, client } from '../config/mongo-config.js';

const getMusicList = async (req, res) => {
  await client.connect();

  musicList.find({}).toArray()
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    })
    .finally(() => {
      client.close();
    })
}

export { getMusicList };
