import mongoose from "mongoose";
import {MONGODB_URI} from './config.js'

try {
    mongoose.set('strictQuery', false)
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Databse is connected to", db.connection.name);
  } catch (err) {
    console.log("Fallo:", err);
  }
