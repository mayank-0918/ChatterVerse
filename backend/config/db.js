const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
      const conn = await mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log('connected');
    }).catch((err)=>{
      console.log(err)
    })

  }



module.exports = connectDB;
