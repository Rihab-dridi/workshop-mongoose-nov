// connect the application with a db
//require mongoose
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect("mongodb://localhost/workshop_nov", () => {
    try {
      console.log("the database is connected...");
    } catch (error) {
      console.log(error);
    }
  });
};
//export the connect function 
module.exports=connectDB