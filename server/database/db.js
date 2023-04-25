import mongoose from 'mongoose';


const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.j2jkavn.mongodb.net/?retryWrites=true&w=majority`;

 try{
   await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
   console.log("DB connected")
 }catch(error){
    console.log(`No db connected`, error);
 }
};

export default Connection;


