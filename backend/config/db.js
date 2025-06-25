import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://darshan:darshan@home.gyzq2.mongodb.net').
    then(()=>console.log("DB Connected"));
   
}


