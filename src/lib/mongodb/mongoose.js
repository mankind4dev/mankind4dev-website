import mongoose from "mongoose";

let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Aready connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "next-blog",
        useNewUrlParser: true,
        useUnifieldTopology: true,
    })
    console.log("Connected to MongoDB")
    initialized = true;
  } catch (error) {
    console.log("Error connecting to mongoDB:", error)
  }
  
};
