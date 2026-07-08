import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://elsawyabdalluh_db_user:6GFzPIAMdwcTxQjd@ac-blnm9ed-shard-00-00.8jrjhti.mongodb.net:27017,ac-blnm9ed-shard-00-01.8jrjhti.mongodb.net:27017,ac-blnm9ed-shard-00-02.8jrjhti.mongodb.net:27017/MediCare?ssl=true&replicaSet=atlas-10b9ro-shard-0&authSource=admin&appName=MedicareSite",
    )
    .then(() => {
      console.log("MongoDB connected successfully✅");
    });
};
