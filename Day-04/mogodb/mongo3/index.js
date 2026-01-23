const expres = require("express");
const app = expres();
const path = require("path");
const Chat = require("./models/chats");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

// const Chat = require("./models/chats.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expres.static(path.join(__dirname, "public")));
app.use(expres.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// mongoose connection
const mongoose = require("mongoose");
const { error } = require("console");
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/fakewhatsApp");
}

// let chat1 = new Chat({
//   from: "Alice",
//   to: "Bob",
//   message: "Hello, Bob! How are you?",
//   timestamp: new Date(),
// });
// chat1.save().then((res) => console.log(res));

// index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  console.log(chats);
  //   res.send("working");
  res.render("index", { chats });
});

//new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404,"page not found");
  res.render("new.ejs");
});

//create route
app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    timestamp: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});


//new-show route
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    // throw new ExpressError(404, "Chat Not Found");
    next(new ExpressError(404, "Chat Not Found"));
  }
  res.render("edit.ejs", { chat });
});

//middleware for handling errors
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occurred" } = err;
  res.send(err);
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});
//delete route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

// home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
