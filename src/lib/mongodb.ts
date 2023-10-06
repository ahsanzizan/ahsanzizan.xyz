import { MongoClient } from "mongodb";

const MONGO_URI: string = process.env.MONGO_URI;
const client: MongoClient = new MongoClient(MONGO_URI);
const clientProm = client.connect();

export default clientProm;
