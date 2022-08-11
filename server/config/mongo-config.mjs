import { MongoClient } from "mongodb"; 

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const db = client.db('music-server');

const musicList = db.collection('music-list');
const serverData = db.collection('server-data');

export { client, db, musicList, serverData};
