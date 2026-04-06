import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("URI to .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  const conn = await mongoose.connect(MONGO_URI!);
  cached.conn = conn;

  return conn;
}
