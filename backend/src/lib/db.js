import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log("MongoDB Connected:", conn.connection.host);
  } catch (err) {
    console.error(err);
  }
}