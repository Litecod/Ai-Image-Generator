import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("db connected")
    })
    await mongoose.connect(`${process.env.MONOGODB_URL}/denerator`)
    //process.env.MONOGODB_URL
}

export default connectDB;

