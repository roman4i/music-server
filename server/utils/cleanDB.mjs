import { client, musicList } from "../config/mongo-config.mjs";

const cleanCollection = async () => {
  await client.connect();

  const result = await musicList.drop();

  if(result) {
    console.log('Cleaned');
  } else {
    console.log('Failed');
  }

  await client.close();
}

cleanCollection();
