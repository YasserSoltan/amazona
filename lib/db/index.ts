import mongoose from "mongoose";

// Define a proper type for the cache
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Initialize with proper typing
const cached: MongooseCache = (global as { mongoose?: MongooseCache }).mongoose || { 
  conn: null, 
  promise: null 
};

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);
  cached.conn = await cached.promise;
  return cached.conn;
};
