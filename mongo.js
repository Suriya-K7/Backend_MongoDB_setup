/*
const mongoose = require("mongoose");

// console.log(process.argv);

const URL = `mongodb+srv://suriyak7:suriya12345678@cluster0.labtl46.mongodb.net/NotesDB?retryWrites=true&w=majority`;
// const URL = `mongodb+srv://suriyak7:suriya12345678@cluster0.labtl46.mongodb.net/------here need to paste collection names-------?retryWrites=true&w=majority`;

mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// saving the data in DB
// defining a schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

// create a model
const Note = mongoose.model("Note", noteSchema, "notes");

/*

//actual data to store in DB
const note = new Note({
  content: "Learning MongoDB",
  important: true,
});

//saving data in DB
note
  .save()
  .then((result) => {
    console.log("note saved");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });

  */
/*
let mutipleNotes = [
  {
    content: "facing problem in MongoDB",
    important: true,
  },
  {
    content: "solving problem in MongoDB",
    important: true,
  },
];
mutipleNotes.forEach((note) => {
  let loadingData = new Note(note);
  loadingData.save();
});
*/

// fetching from mongoBD

Note.find({}, {}).then((notes) => {
  console.log(notes);
  mongoose.connection.close();
});
*/
