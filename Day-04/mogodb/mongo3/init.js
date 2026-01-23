const mongoose = require("mongoose");
const Chat = require("./models/chats");

// async function main() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/fakewhatsApp");
//     console.log("Connected to MongoDB");

//     const allChats = [
//       {
//         from: "s1",
//         to: "s2",
//         message: "Hello, Bob! How are you?",
//         timestamp: new Date(),
//       },
//       {
//         from: "a1",
//         to: "a2",
//         message: "Hello, Bob! How are you?",
//         timestamp: new Date(),
//       },
//       {
//         from: "b1",
//         to: "b2",
//         message: "Hello, Bob! How are you?",
//         timestamp: new Date(),
//       },
//     ];

//     await Chat.insertMany(allChats);
//     console.log("Chats inserted successfully");
//   } catch (err) {
//     console.error(err);
//   } finally {
//     mongoose.connection.close(); // 👈 IMPORTANT
//   }
// }

// main();
