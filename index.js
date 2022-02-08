//main goal : CRUD of a contact list  through mongoose
//connect the application with a database

const connectDB = require("./config/connectDB");
connectDB();
//create a model /schema : the shape of oour data
const Contcats = require("./models/Contcats");

//CRUD
//Create a single person
const person = new Contcats({
  name: "salim",
  email: "salim1@gmail.com",
  phone: 216555888,
});
//save the person in the db
// person.save((err, res) => {
//   try {
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// });

// //create multiple records 
// Contcats.create([
//     {
//         name: "mahdi",
//         email: "mahdi@gmail.com",
//         phone: 2165777183,
//       },
//       {
//         name: "fedi",
//         email: "fedi@gmail.com",
//         phone: 216333888,
//       },
//       {
//         name: "Narjes",
//         email: "narjes@gmail.com",
//         phone: 216559985,
//       }],(error,res)=>{
//           try {
//             console.log(res);  
//           } catch (error) {
//               console.log(error);
//           }
//       })


// //Read the data 
// Contcats.find((err,res)=>{
//     try {
//       console.log(res);  
//     } catch (error) {
//         console.log(error);
//     }
// })

//Read one record 
//by name 
// Contcats.find({name:"Narjes"},(err,res)=>{
//     try {
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// } )

// //by id 
// Contcats.findById("62023f8492eb35268d50e956",(err,res)=>{
//     try {
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// })

// //Update data 
// Contcats.findByIdAndUpdate("62023f8492eb35268d50e956",{name:"amara"},(err,res)=>{
//     try {
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// } )


// //delete
// Contcats.findOneAndDelete({name:"mahdi"},(err,res)=>{
//     try {
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// } )
