import _mongoose, { connect } from "mongoose";

declare global {
  // Use 'var' because 'const' and 'let' wouldn't work properly
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    connection: typeof _mongoose | null;
  };
}

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

export default async function connectDB() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const options: _mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = connect(MONGO_URI, options)
      .then((mongoose) => mongoose)
      .catch((err) => {
        throw err;
      });
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.connection;
}
