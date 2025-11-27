import mongoose from "mongoose";

async function ConnectDB() {
    await mongoose.connect(process.env.DB_CONNECTION_URL)
        .then(() => console.log("Database Connected Successfully"))
        .catch(err => console.log(err))
}

export default ConnectDB;
