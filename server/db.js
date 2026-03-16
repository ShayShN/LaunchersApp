import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;
// const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri);

let db;

export async function connectDB() {
  await client.connect();
  db = client.db("LauncherRocket");
  console.log("connected");
}

export function getDB() {
  if (!db) {
    throw new Error("database not connected");
  }
  return db;
}