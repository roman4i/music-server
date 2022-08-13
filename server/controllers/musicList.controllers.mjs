import { musicList, client } from '../config/mongo-config.mjs';

const getMusicList = async (req, res) => {
  await client.connect();

  musicList.find({}).toArray()
    .then(result => {
      const modResult = result.map(val => {
        const modDuration = Math.round(val.duration);
        return {
          ...val,
          duration:modDuration,
        }
      })
      res.send(JSON.stringify(modResult));
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
