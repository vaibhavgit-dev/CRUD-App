import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://vaibhav:vaibhav123@cluster0.gippd.mongodb.net/CRUD-App');
    console.log("DB Connected");
}