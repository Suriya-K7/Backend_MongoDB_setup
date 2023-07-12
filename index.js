// express
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const URL = process.env.ATLAS_URI;
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

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// getting full data

app.get("/api/notes", (req, res) => {
  Note.find({}, {}).then((notes) => {
    res.status(200).json(notes);
  });
});

// posting data

app.post("/api/notes", (req, res) => {
  //preparing object to store in collection
  const note = new Note(req.body);
  note.save().then(() => {
    res.status(201).json({ message: "post request completed" });
  });
});

// getting data of particular id

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id).then((note) => {
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// delete data of particular id

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id).then((deletedNote) => {
    if (deletedNote) {
      res.status(200).json({ message: "Deleted sucessfully" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// put data of particular id

app.put("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body;
  Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
    if (updatedNote) {
      res.status(200).json({ message: "updated" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// patching data of particular id

app.patch("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body;
  Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
    if (updatedNote) {
      res.status(200).json({ message: "updated" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

app.listen(3001, () => {
  console.log("server running in port no 3001");
});
