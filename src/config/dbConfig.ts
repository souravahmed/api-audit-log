import mongoose from "mongoose";
const dbConfig = async (process) => {
  try {
    await mongoose.connect(
      process.env.CONNECTION_STRING ?? "mongodb://localhost:27017/auditLog"
    );
    console.log(`Mongo db connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConfig;
